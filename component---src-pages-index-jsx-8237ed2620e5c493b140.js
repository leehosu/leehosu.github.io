(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Dtc0:function(e,t,a){"use strict";a.r(t);var r=a("dI71"),n=a("q1tI"),i=a.n(n),o=a("TJpk"),c=a.n(o),l=a("hpys"),s=a("Xhe4"),m=a("gHWQ"),p=a("AeLu"),u=a("1wty"),d=a("okzv"),h=a("L6NH"),g=a("IpnI"),f=a.n(g),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=Object(h.c)(e),a=Object(h.d)(t),r=a.tagList,n=a.categoryList,o=i.a.createElement(u.a,{postList:t,hasThumbnail:f.a.homeHasThumbnail,hasLoadmore:f.a.homeHasLoadmore,postsPerPage:f.a.postsPerPage,numberLoadmore:f.a.numberLoadmore,btnLoadmore:f.a.btnLoadmore}),g=i.a.createElement(p.a,{tagList:r,categoryList:n,links:f.a.sidebarLinks}),y=f.a.homeHeader?""+f.a.homeHeader:""+f.a.siteTitle;return i.a.createElement(l.a,null,i.a.createElement("div",{className:"index-container"},i.a.createElement(c.a,{title:f.a.siteTitle}),i.a.createElement(d.a,null),i.a.createElement(s.a,{title:y}),i.a.createElement(m.a,{content:o,sidebar:g})))},t}(i.a.Component);t.default=y},"T/ZZ":function(e,t,a){var r,n,i;i=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var n=e[r];if("string"!=typeof n)throw new TypeError("Url must be a string. Received "+n);""!==n&&(r>0&&(n=n.replace(/^[\/]+/,"")),n=r<e.length-1?n.replace(/[\/]+$/,""):n.replace(/[\/]+$/,"/"),t.push(n))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(n="function"==typeof(r=i)?r.call(t,a,t,e):r)||(e.exports=n)},okzv:function(e,t,a){"use strict";var r=a("dI71"),n=a("q1tI"),i=a.n(n),o=a("TJpk"),c=a.n(o),l=a("T/ZZ"),s=a.n(l),m=a("IpnI"),p=a.n(m),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e,t,a,r,n=this.props,o=n.postNode,l=n.postPath,m=n.postSEO,u="";if(m){var d=o.frontmatter;e=d.title,t=d.description?d.description:o.excerpt,a=d.keywords,d.cover&&(u=d.cover.childImageSharp.fixed.src),r=s()(p.a.siteUrl,p.a.pathPrefix,l)}else e=p.a.siteTitle,t=p.a.siteDescription,u=p.a.siteLogo;u=s()(p.a.siteUrl,p.a.pathPrefix,u);var h=s()(p.a.siteUrl,p.a.pathPrefix),g=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:""}];return m&&g.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:e,image:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:u},description:t}),i.a.createElement(c.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:u}),a&&i.a.createElement("meta",{name:"keywords",content:a}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g)),i.a.createElement("meta",{property:"og:url",content:m?r:h}),m?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:u}),i.a.createElement("meta",{property:"fb:app_id",content:p.a.siteFBAppID?p.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:p.a.userTwitter?p.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:u}))},t}(n.Component);t.a=u}}]);
//# sourceMappingURL=component---src-pages-index-jsx-8237ed2620e5c493b140.js.map