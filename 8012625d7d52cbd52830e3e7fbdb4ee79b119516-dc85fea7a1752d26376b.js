(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1YUG":function(e,t,a){},"1wty":function(e,t,a){"use strict";var r=a("dI71"),n=a("q1tI"),i=a.n(n),s=a("9eSz"),o=a.n(s),l=a("FJJU"),d=function(e){var t=e.post,a=e.extraClass,r=void 0===a?"":a,n=t.cover?t.cover.childImageSharp.fluid:null;return n?i.a.createElement(l.a,{to:t.slug,key:t.title,className:"thumbnail-wrapper line-height-reset "+r},i.a.createElement(o.a,{fluid:n,className:"thumbnail-img margin-right-2"})):null},c=a("L6NH"),u=function(e){var t=e.date,a=e.extraClass,r=void 0===a?"":a;return i.a.createElement("div",{className:"text-description "+r},function(e){var t=new Date,a=new Date(e),r=Math.floor((t.getTime()-a.getTime())/1e3/60);if(r<1)return"방금전";if(r<60)return r+"분전";var n=Math.floor(r/60);return n<24?n+"시간전":""+Object(c.a)(e)}(t))},f=(a("usEV"),function(e){var t=e.post,a=e.extraClass,r=void 0===a?"":a,n=t.categories;return i.a.createElement("div",{className:"post-info-wrapper "+r},i.a.createElement(l.a,{to:t.slug},i.a.createElement("h2",null,i.a.createElement("small",null,t.title))),i.a.createElement("div",{className:"margin-bottom-half"},t.excerpt),i.a.createElement("div",{className:"post-info-bottom"},i.a.createElement("small",null,i.a.createElement(u,{date:t.date})),i.a.createElement("span",{className:"separator"},"·"),n&&n.map((function(e,t){return i.a.createElement("small",{key:t}," ",e," ")}))))}),m=(a("ozrQ"),function(e){var t=e.post,a=e.hasThumbnail;return i.a.createElement("article",{className:"article-container padding-bottom-2 padding-top-2 border-bottom border-color-light-grey"},a&&i.a.createElement(d,{post:t}),i.a.createElement(f,{post:t}))}),p=a("IpnI"),g=a.n(p),h=a("IP2g"),b=(a("1YUG"),function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={maxPosts:t.props.hasLoadmore&&t.props.postsPerPage?t.props.postsPerPage:t.props.postList.length,filteredData:t.props.postList},t.handleLoadmore=function(){var e=t.props,a=e.hasLoadmore,r=void 0!==a&&a,n=e.numberLoadmore;r&&t.setState((function(e){return{maxPosts:e.maxPosts+n}}))},t.handleInputChange=function(e){var a=e.target.value,r=t.props.postList.filter((function(e){var t=e.title,r=e.category,n=e.tags;return t&&t.toLowerCase().includes(a.toLowerCase())||n&&n.join("").toLowerCase().includes(a)||r&&r.join("").toLowerCase().includes(a)}));t.setState((function(e){return{filteredData:r}}))},t}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.hasThumbnail,a=void 0===t||t,r=e.hasLoadmore,n=void 0!==r&&r,s=this.state.filteredData,o=this.state.maxPosts;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"post-listing-container"},i.a.createElement("div",{className:"container-full row padding-none margin-bottom-none search"},i.a.createElement("div",{className:"search-input"},i.a.createElement("div",{className:"search-icon"},i.a.createElement(h.a,{icon:["fas","search"],style:{color:"#0ca678"}})),i.a.createElement("input",{className:"margin-bottom-none",type:"text",name:"q",placeholder:g.a.searchWidgetPlaceHolder,required:!0,spellCheck:"false",onChange:this.handleInputChange}))),s.map((function(e,t){return t<o?i.a.createElement(m,{key:t,post:e,hasThumbnail:a}):null}))),n&&o<s.length&&i.a.createElement("div",{className:"loadmore-wrapper margin-top padding-top-half text-center"},i.a.createElement("button",{className:"tags",onClick:this.handleLoadmore},this.props.btnLoadmore)))},t}(n.Component));t.a=b},"4nfp":function(e,t,a){},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,E=v&&window.IntersectionObserver,y=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+s+o+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(O,(0,l.default)({ref:t,src:a},i,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,n(r),o):o})),O=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,y=e.itemProp,S=e.loading,I=e.draggable,N=g||h;if(!N)return null;var R=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:R?1:0,transition:P?"opacity "+v+"ms":"none"},o),z="boolean"==typeof b?"lightgray":b,T={transitionDelay:v+"ms"},H=(0,l.default)({opacity:this.state.imgLoaded?0:1},P&&T,o,f),j={title:t,alt:this.state.isVisible?"":a,style:H,className:m,itemProp:y},W=this.state.isHydrated?p(N):N[0];if(g)return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),z&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&T)}),W.base64&&d.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:j,imageVariants:N,generateSources:x}),W.tracedSVG&&d.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:j,imageVariants:N,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,w(N),d.default.createElement(O,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:S},W,{imageVariants:N}))}}));if(h){var q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete q.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},z&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:z,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},P&&T)}),W.base64&&d.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:j,imageVariants:N,generateSources:x}),W.tracedSVG&&d.default.createElement(k,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:j,imageVariants:N,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,w(N),d.default.createElement(O,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:S},W,{imageVariants:N}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function z(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}R.propTypes={resolutions:P,sizes:V,fixed:z(c.default.oneOfType([P,c.default.arrayOf(P)])),fluid:z(c.default.oneOfType([V,c.default.arrayOf(V)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=R;t.default=T},AeLu:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("FJJU"),s=function(e){var t=e.extraClass,a=void 0===t?"":t,r=e.children;return n.a.createElement("aside",{className:a+" padding-top padding-bottom"},r)},o=function(e){var t=e.title;return n.a.createElement("h3",{className:"text-uppercase"},n.a.createElement("small",null,t))},l=a("L6NH"),d=a("IpnI"),c=a.n(d),u=(a("jXxs"),function(e){var t=e.categoryList;return n.a.createElement(s,{extraClass:"categories-container"},n.a.createElement(o,{title:c.a.categoryWidgetTitle}),n.a.createElement("div",null,t.map((function(e){return n.a.createElement(i.a,{key:e,to:Object(l.b)(e),className:"block border-bottom border-color-light-grey padding-top-half padding-bottom-half category"},n.a.createElement("span",null,e))}))))}),f=(a("MCO8"),function(e){var t=e.content;return n.a.createElement(i.a,{key:t,to:Object(l.e)(t),className:"inline-block margin-right-half margin-bottom-half  border border-color-light-grey padding-left-half padding-right-half tags"},n.a.createElement("span",{className:"content"},t))}),m=function(e){var t=e.tagList;return n.a.createElement(s,{extraClass:"categories-container"},n.a.createElement(o,{title:c.a.tagWidgetTitle}),n.a.createElement("div",null,t.map((function(e){return n.a.createElement(f,{key:e,content:e})}))))},p=function(e){var t=e.latestPostEdges,a=Object(l.c)(t);return n.a.createElement(s,{extraClass:"latest-posts-container"},n.a.createElement(o,{title:c.a.latestPostsWidgetTitle}),n.a.createElement("div",null,a.map((function(e,t){return n.a.createElement(i.a,{key:t,to:e.slug,className:"block border-bottom border-color-light-grey padding-top-half padding-bottom-half"},n.a.createElement("span",null,e.title))}))))},g=function(e){var t=e.links;return n.a.createElement(n.a.Fragment,null,t&&t.length>0&&n.a.createElement(s,{extraClass:"categories-container"},n.a.createElement(o,{title:c.a.linksWidgetTitle}),n.a.createElement("div",null,t.map((function(e){return n.a.createElement(i.a,{key:e.label,to:e.url,className:"block border-bottom border-color-light-grey padding-top-half padding-bottom-half"},n.a.createElement("span",null,e.label))})))))},h=a("dI71"),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){return n.a.createElement(n.a.Fragment,null,c.a.hasSearch&&n.a.createElement(s,{extraClass:"search-container"},n.a.createElement(o,{title:c.a.searchWidgetTitle}),n.a.createElement("div",{className:"container-full row padding-none margin-bottom-none"},n.a.createElement("div",{className:"padding-none padding-right-half col-xs-10"},n.a.createElement("input",{className:"margin-bottom-none",type:"text",name:"q",placeholder:c.a.searchWidgetPlaceHolder,required:!0,spellCheck:"false"})))))},t}(r.Component),v=a("V+In");t.a=function(e){var t=e.tagList,a=e.categoryList,r=e.latestPostEdges,i=e.links;return n.a.createElement("aside",{className:"sidebar-container "+(c.a.sidebarSticky?"height-full":""),style:{width:"300px"}},n.a.createElement(b,null),r&&n.a.createElement(p,{latestPostEdges:r}),a&&n.a.createElement(u,{categoryList:a}),t&&n.a.createElement(m,{tagList:t}),i&&n.a.createElement("div",{className:"position-sticky top-zero"},n.a.createElement(g,{links:i})),n.a.createElement(v.a,{client:"ca-pub-2038621379918916",slot:"7576233308",format:"auto",responsive:"true",layoutKey:"-fz+6a+19-cg+hh"}))}},MCO8:function(e,t,a){},"V+In":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);t.a=function(e){var t=e.className,a=void 0===t?"adsbygoogle":t,i=e.client,s=void 0===i?"":i,o=e.slot,l=void 0===o?"":o,d=e.format,c=void 0===d?"":d,u=e.responsive,f=void 0===u?"":u,m=e.layoutKey,p=void 0===m?"":m;return Object(r.useEffect)((function(){try{(window.adsbygoogle=window.adsbygoogle||[]).push({}),console.log("Advertise is pushed")}catch(e){console.error("AdvertiseError",e)}}),[]),n.a.createElement("ins",{className:a,style:{overflowX:"auto",overflowY:"hidden",display:"block",textAlign:"center"},"data-ad-client":s,"data-ad-slot":l,"data-ad-format":c,"data-full-width-responsive":f,"data-ad-layout-key":p})}},gHWQ:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);a("4nfp");t.a=function(e){var t=e.content,a=e.sidebar;return n.a.createElement("section",{className:"main-container container"},n.a.createElement("div",{className:"content-wrapper padding-top-half padding-bottom-2"},t),n.a.createElement("div",{className:"sidebar-wrapper padding-top-half padding-bottom-2"},a))}},jXxs:function(e,t,a){},ozrQ:function(e,t,a){},usEV:function(e,t,a){}}]);
//# sourceMappingURL=8012625d7d52cbd52830e3e7fbdb4ee79b119516-dc85fea7a1752d26376b.js.map