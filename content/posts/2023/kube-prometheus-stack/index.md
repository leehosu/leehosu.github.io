---
template: "post"
title: "kube-prometheus-stack으로 모니터링 시스템 구축하기"
date: "2023-08-27 15:40"
slug: "kubelet"
keywords: "devops"
cover : './cover.png'
categories: 
    - Devops
    - Kubernetes
    - promehtues
    - loki
    - grafana
    - Observability
tags: 
    - Devops
    - Kubernetes
    - promehtues
    - loki
    - grafana
    - Observability
---


# 들어가며
사내에서 EFK-Stack(ElasticSearch+Fluent-bit+Kibana)를 이용하여 모니터링 시스템을 구축했었습니다. 하지만 AWS Opensearch를 이용하다보니 비용적인 문제와 비교적 활용도가 낮았던 fluent-bit(응답이 길면 Probe가 자꾸 문제가 발생), metirc 데이터 필요, 쿠버네티스에 맞지 않은 설정들등 다양한 이슈로 모니터링 시스템을 바꿔야 하는 요구 사항이 생겼습니다. 그러던 중 쿠버네티스 모니터링 시스템계의 또 하나의 터줏대감인 Prometheus, Loki, Grafana를 이용하여 새롭게 모니터링 시스템을 구축하였습니다.

<aside>
💡 개념적인 내용은 공식 문서와 ChatGPT를 참고하여 작성하였습니다.
</aside>

# Prometheus

![prometheus](./prometheus-logo.png)

## Prometheus란?

Prometheus는 SoundCloud에서 처음 개발된 오픈 소스 시스템 모니터링 및 알림 툴킷입니다. 2012년에 시작된 이후로 많은 회사와 조직이 Prometheus를 채택하였고, 매우 활발한 개발자와 사용자 커뮤니티를 가지고 있습니다.

![CNCF](./CNCF.png)

Prometheus는 2016년 Kubernetes 에 이어 두 번째 프로젝트로 Cloud Native Computing Foundation에 합류했으며, 서비스 운영을 위해 모니터링 시스템을 구축할 때 가장 널리 사용되는 툴 중 하나입니다.

## 특징

![prometheus-point](./prometheus-point.png)

- **다차원 데이터 모델**: 메트릭 이름과 키/값 쌍으로 시계열 데이터를 식별합니다.
- **PromQL**: 이러한 차원성을 활용할 수 있는 유연한 쿼리 언어입니다.
- **분산 저장에 의존하지 않음**: 단일 서버 노드가 자립적으로 작동합니다.
- **HTTP를 통한 풀 모델**: 시계열 데이터 수집이 HTTP를 통해 이루어집니다.
- **서비스 발견 또는 정적 구성을 통한 타겟 발견**: 다양한 그래핑 및 대시보드 지원 모드가 있습니다.

위처럼 여러 특징이 있지만 주요 특징은 2가지로 요약됩니다.

**Pull-Based Monitoring**

기존의 Push-Based Monitoring 방식 대신에 Pull-Based Monitoring을 사용합니다. 대상 서버에 설치된 Exporter가 메트릭 정보를 수집하고, 이 데이터는 수집 서버가 주기적으로 가져가는 구조입니다. 

즉, 클라이언트에서 서버로 데이터를 보내는 것(PUSH)가 아닌 서버가 클라이언트의 데이터를 수집(Pull) 방식입니다. 이러한 방식은 기존의 에이전트(agent) 방식보다 더 유연하고 관리하기 쉽습니다.

**시계열 데이터베이스(TSDB)**

관계형 데이터베이스(RDB) 대신 메트릭 이름과 key-value 쌍으로 식별되는 시계열 데이터 모델을 사용합니다. 이를 통해 대량의 정보를 빠르게 검색할 수 있습니다.


## Architecture
![prometheus-architecture](./architecture.png)

**Exporter**

- host서버에 설치되어 메트릭 데이터를 수집하는 역할을 합니다.
- Prometheus 서버가 접근하여 데이터를 가져올 수 있는 HTTP 엔드포인트를 제공하여 다양한 데이터를 수집합니다.

**Prometheus Server**

- Prometheus Server는 메트릭 데이터를 스크랩하고 저장합니다.
- 메트릭 데이터 수집 주기를 설정하여 지정된 시간마다 대상 서버에 있는 Exporter로부터 데이터를 수집합니다.
- 수집한 데이터를 저장하고 PromQL(프로메테우스 쿼리 언어)를 사용하여 데이터를 쿼리하고 필터링할 수 있습니다.

**Grafana**

- Grafana는 데이터 시각화 도구로, Prometheus가 수집한 메트릭 데이터를 그래프나 대시보드 형태로 시각화하여 표현할 수 있습니다.
- Prometheus Server에서 직접 제공하는 웹 뷰보다 더 다양한 시각화 기능을 제공하며, Grafana를 통해 데이터를 더 직관적으로 이해할 수 있습니다.

**Alertmanager**

- Prometheus가 수집한 메트릭 데이터를 기반으로 경고를 생성하고 규칙을 만들어 관리합니다.


이렇듯 Prometheus로 metric 데이터를 수집하려고 했지만 Docker형태나 pod 형태로 배포하기엔 따로 작업을 해야해서 다른 방안이 없나하고 찾아보던 중 Prometheus, Grafana, Alertmanager 등을 함께 묶어 kubernetes 환경에 맞게 Helm 차트 형태로 설치할 수 있는 kube-prometheus-stack을 발견했습니다..!

# kube-prometheus-stack

![kps](./kube-prometheus-stack.png)

## Kube-Prometheus-Stack이란?

kube-prometheus-stack은 kubernetes cluster에 맞게 구성된 오픈 소스 프로젝트입니다. Prometheus를 기반으로 하며, 쿠버네티스 클러스터의 다양한 컴포넌트들의 메트릭 데이터를 수집하고 이를 시계열 데이터로 생성하여 모니터링 및 경고 기능을 제공합니다.

즉, 쿠버네티스 클러스터만 있다면 간단하게 helm chart로 설치가 가능합니다!

github : https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack

## Architecture

![kps-architecture](./architecture-kube-prometheus.png)

**Prometheus Operator**

- 쿠버네티스 내에서 Prometheus 서버와 관련된 리소스들을 관리하기 위한 컨트롤러입니다.
- Prometheus와 관련된 설정, 서비스 디스커버리, 룰 및 대시보드를 관리할 수 있습니다.

**Prometheus Server**

- 고가용성을 제공하는 Prometheus 서버입니다.
- 메트릭 데이터를 스크랩하고 저장합니다.

**Alertmanager**

- Prometheus가 수집한 메트릭 데이터를 기반으로 경고를 생성하고 관리하는 역할을 합니다.

**Prometheus node-exporter**

- node-exporter는 Host의 metric을 수집하는 역할을 합니다.
- CPU, 메모리, 디스크 사용량 등의 데이터를 수집하여 Prometheus로 전달합니다.

**Prometheus Adapter for Kubernetes Metrics APIs**

- 쿠버네티스의 메트릭 API와 연동하여 클러스터 내부의 리소스 메트릭 데이터를 수집하고 Prometheus로 전달합니다.

**kube-state-metrics**

- 쿠버네티스 클러스터의 상태 정보를 메트릭으로 수집합니다.
- 파드, 디플로이먼트, 노드 등의 상태 정보를 모니터링할 수 있습니다.

**Grafana**

- Grafana는 데이터 시각화 및 대시보드 생성 도구로, 수집한 메트릭 데이터를 그래프나 대시보드 형태로 시각화하여 사용자에게 제공합니다.

## 구성
![kps-chart](./kps-helm.png)

kube-prometheus-stack을 포함한 대부분의 Helm 배포 패키지는 비슷한 구성으로 이루어져있습니다.

**charts** 

- Helm 차트의 종속 차트를 포함하는 위치입니다.
- 이 패키지의 경우 grafana, kube-state-metrics, prometheus-node-exporter가 존재합니다.

**templates**

- Helm 차트의 템플릿 파일들을 포함합니다.
- 템플릿은 Kubernetes 리소스의 정의를 작성하는 데 사용되며, 애플리케이션의 배포, 서비스, 구성 등을 관리할 수 있습니다

**crds** 

- Custom Resource Definitions(CRDs) 파일을 포함할 수 있는 위치입니다.
- Kubernetes API에 사용자 정의 리소스와 그에 대한 스키마를 추가하는 데 사용됩니다.

**Chart.yaml** 

- Helm 차트의 메타 정보를 정의합니다.
- 메타 정보에는 차트의 이름, 버전, 유형, 유지 보수자 정보 등이 포함됩니다.
- 종속 차트, 애플리케이션의 버전 제약 조건 등을 지정할 수도 있습니다.

**values.yaml**

- Helm 차트의 기본 구성 값을 정의합니다.
- 애플리케이션의 설정 옵션, 환경 변수, 리소스 크기 등을 설정할 수 있습니다.
- `values.yaml` 파일에 정의된 값은 템플릿 파일 내에서 사용될 수 있으며, 차트를 배포할 때 사용자 지정 값으로 수정하여 배포할 수도 있습니다.

## 설치하기

### create namespace

```bash
$ kubectl create namsespace monitoring
```

먼저 KPS을 설치할 네임스페이스를 생성합니다.

### Add Helm repo

```bash
# 헬름 차트의 저장소 추가
$ helm repo add prometheus-community https://prometheus-community.github.io/$ helm-charts
helm repo update
```

Helm을 통해 prometheus-community repo를 cluster에 받아옵니다.

### Pull helm config file

몇가지 커스텀을 해야하기 때문에 config에 대한 값을 수정할 수 있는 manifast file을 다운로드 한 후 압축을 풀어줍니다.

```bash
$ helm pull prometheus-community/kube-prometheus-stack
$ tar xvfz kube-prometheus-stack-${version}.tgz #설치된 버전을 작성하시면 됩니다!
```

### service 수정

대시보드 형태로 외부에서 접근할 수 있게 `prometheus-grafana`와 `prometheus-kube-prometheus-operator` 만 clusterIP에서 LoadBalancer나 NodePort로 변경합니다.

그 후 해당 values.yaml 파일을 토대로 설치하면 정상적으로 설치가 완료됩니다.