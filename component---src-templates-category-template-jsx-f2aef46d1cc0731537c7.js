(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1jTp":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),i=t("IP2g"),s=t("FJJU"),c=function(e){var a=e.value,t=e.index,n=e.currentPage,c=e.pathPrefix,l=e.pathPrefixPagination,o=0===a&&t<n/2,g=0===a&&t>n/2,u=c;return o?u+=l+"/"+(n-3):g?u+=l+"/"+(n+3):1!==a&&(u+=l+"/"+a),r.a.createElement(s.a,{to:u,className:"pagination-item "+(n===a?"active":""),activeClassName:"active"},o&&r.a.createElement(i.a,{icon:["fas","angle-double-left"],size:"xs"}),0!=a&&a,g&&r.a.createElement(i.a,{icon:["fas","angle-double-right"],size:"xs"}))};t("UYo0"),a.a=function(e){var a=e.currentPage,t=e.totalPages,n=e.pathPrefix,i=e.pathPrefixPagination,s=e.extraClass,l=[];if(t<=7)for(var o=1;o<=t;o++)l.push(o);else if(a<=4){for(var g=1;g<=5;g++)l.push(g);l.push(0,t)}else if(t-a<4){l.push(1,0);for(var u=t-4;u<=t;u++)l.push(u)}else l.push(1,0,a-1,a,a+1,0,t);return r.a.createElement(r.a.Fragment,null,t>=2&&r.a.createElement("div",{className:"pagination-container "+s},l.map((function(e,t){return r.a.createElement(c,{key:n+"-"+t,value:e,index:t,currentPage:a,pathPrefix:n,pathPrefixPagination:i})}))))}},UYo0:function(e,a,t){},nz5Z:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),i=t("TJpk"),s=t.n(i),c=t("hpys"),l=t("Xhe4"),o=t("gHWQ"),g=t("AeLu"),u=t("1wty"),p=t("1jTp"),m=t("L6NH"),f=t("IpnI"),P=t.n(f);a.default=function(e){var a=e.data,t=e.pageContext,n=t.category,i=t.categoryList,f=t.tagList,h=t.latestPostEdges,d=t.currentPage,E=t.totalPages,x=a.allMarkdownRemark.edges,v=Object(m.c)(x),b=r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{postList:v,hasThumbnail:P.a.categoryHasThumbnail,hasLoadmore:!1}),r.a.createElement(p.a,{extraClass:"margin-top padding-top-half",currentPage:d,totalPages:E,pathPrefix:Object(m.b)(n),pathPrefixPagination:P.a.pathPrefixPagination})),y=r.a.createElement(g.a,{tagList:f,categoryList:i,latestPostEdges:h,links:P.a.sidebarLinks});return r.a.createElement(c.a,null,r.a.createElement("div",{className:"category-container"},r.a.createElement(s.a,{title:P.a.categoryHeader+" "+n+" - "+P.a.siteTitle}),r.a.createElement(l.a,{title:P.a.categoryHeader+" "+n}),r.a.createElement(o.a,{content:b,sidebar:y})))}}}]);
//# sourceMappingURL=component---src-templates-category-template-jsx-f2aef46d1cc0731537c7.js.map