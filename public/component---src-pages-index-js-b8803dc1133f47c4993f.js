(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{191:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=function(e){var t=e.value,a=t.bgImg,n=t.className,l=t.textForScreenReaders,i=t.url;return r.a.createElement("a",{href:i,className:n},r.a.createElement("img",{src:a,alt:""}),r.a.createElement("span",{className:"sr-only"},l))},i=function(){var e={bgImg:"/images/logo-navy.svg",textForScreenReaders:"Visit main page",url:"https://se.fitness24seven.com/"};return r.a.createElement("section",null,r.a.createElement(l,{className:"logo",value:e}))},c=function(e){var t=e.className,a=e.links.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(l,{value:e}))}));return r.a.createElement("ul",{className:t},a)},s=function(){return r.a.createElement("section",null,r.a.createElement(c,{className:"social-media",links:[{id:"001",bgImg:"/images/f24s_icon_twitter.svg",textForScreenReaders:"Visit our Twitter",url:"https://twitter.com/"},{id:"002",bgImg:"/images/f24s_icon_linkedin.svg",textForScreenReaders:"Visit our Linkedin",url:"https://www.linkedin.com/company/fitness24seven"},{id:"003",bgImg:"/images/f24s_icon_instagram.svg",textForScreenReaders:"Visit our Instagram",url:"https://www.instagram.com/fitness24seven/"},{id:"004",bgImg:"/images/f24s_icon_youtube.svg",textForScreenReaders:"Visit our Youtube",url:"https://www.youtube.com/user/Fitness24seven"},{id:"005",bgImg:"/images/f24s_icon_facebook.svg",textForScreenReaders:"Visit our Facebook",url:"https://www.facebook.com/Fitness24SevenSweden/"},{id:"006",bgImg:"/images/f24s_icon_wifi.svg",textForScreenReaders:"Get the RSS-feed",url:"#"}]}))},o=function(){return r.a.createElement("section",null,r.a.createElement(c,{className:"language",links:[{id:"001",bgImg:"/images/flag-sv.svg",textForScreenReaders:"Read our website in Swedish",url:"/"},{id:"002",bgImg:"/images/flag-en.svg",textForScreenReaders:"Read our website in English",url:"/"}]}))},m=function(){return r.a.createElement("footer",null,r.a.createElement(i,null),r.a.createElement(s,null),r.a.createElement(o,null))},g=function(e){var t=e.className,a=e.content;return r.a.createElement("p",{className:t},a)},u=(a(131),a(132),function(e){var t=e.className,a=e.content,n="h1";return t.includes("blog")&&(n="h3"),t.includes("blog--featured")&&(n="h2"),r.a.createElement(n,{className:t},a)}),d=function(e){var t=e.className,a=e.content,n=t+"__title",l=t+"__tagline",i=t+"__section";return r.a.createElement("section",{className:i},r.a.createElement(u,{className:n,content:a.title}),r.a.createElement(g,{className:l,content:a.tagline}))},f=function(e){var t=e.className,a=e.description,n=e.fileName,l=t+"__image";return r.a.createElement("img",{className:l,src:"/images/"+n,alt:a})},p=function(e){var t=e.className,a=e.content,n=e.img,l=n.fileName,i=n.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{className:t,fileName:l,description:i}),r.a.createElement(d,{className:t,content:a}))},N=function(){return r.a.createElement("header",null,r.a.createElement(p,{className:"banner",content:{title:"Min Stora Blogg Titel",tagline:"At Fitness24Seven everything counts, even if you don't want to train everyday. Start your journey from blue to black membership today. Text about new goal!"},img:{fileName:"1.jpg",description:"sample"}}))},E=function(e){var t=e.className,a=e.content,n=e.img,l=t+"__item";return r.a.createElement("article",{className:l},r.a.createElement(p,{className:l,content:a,img:n}))},v=function(e){var t=e.posts,a=t.map((function(e){return r.a.createElement(E,{key:e.id,className:"blog--featured",content:e.content,img:e.img})}));return r.a.createElement("section",{className:"blog--featured__section"},a)},_=a(65),b=a.n(_);a(192),a(7).default.enqueue,r.a.createContext({});var y=function(e){var t=e.className,a=e.content,n=t+"__title";return r.a.createElement("header",{className:"blog__header"},r.a.createElement(u,{className:n,content:a.title}),r.a.createElement("p",{className:"blog__date"},a.created),r.a.createElement("p",{className:"blog__category"},a.category))},w=function(e){var t=e.className,a=e.content,n=t+"__tagline";return r.a.createElement("div",{className:"blog__lead"},r.a.createElement(f,{className:t,fileName:a.img.fileName,description:a.img.description}),r.a.createElement(g,{className:n,content:a.tagline}))},S=function(e){var t=e.className,a=e.post,n=t+"__item",l={title:a.content.title,created:a.meta.created,category:a.meta.category},i={tagline:a.content.tagline,img:a.img};return r.a.createElement("article",{className:n},r.a.createElement(y,{className:t,content:l}),r.a.createElement("p",{className:"blog__length"},"10 min"),r.a.createElement(w,{className:t,content:i}),r.a.createElement(b.a,{className:"blog__link",to:"/"},r.a.createElement("img",{src:"/images/f24s_icon_arrow.svg",alt:"Decorative arrow symbolizing link to a full content"}),r.a.createElement("span",{className:"sr-only"},"Read more")))},h=function(e){var t=e.posts,a=t.map((function(e){return r.a.createElement(S,{key:e.id,className:"blog",post:e})}));return r.a.createElement("section",{className:"blog__section"},a)},F=function(){var e=[{id:"001",content:{title:"Featured blogginlägg",tagline:"At Fitness24Seven everything counts"},img:{fileName:"1.jpg",description:"alt 1"},meta:{featured:!0,created:"2019-01-01 15:45",category:"Some Category"}},{id:"002",content:{title:"Featured blogginlägg",tagline:"Tagline 2"},img:{fileName:"2.jpg",description:"alt 2"},meta:{featured:!0,created:"2019-01-01 15:45",category:"Some Category"}},{id:"003",content:{title:"Featured blogginlägg",tagline:"At Fitness24Seven everything counts"},img:{fileName:"5.jpg",description:"alt 3"},meta:{featured:!0,created:"2019-01-01 15:45",category:"Some Category"}},{id:"004",content:{title:"Title 4",tagline:"Lorem ipsum dolor sit amet."},img:{fileName:"3.jpg",description:"alt 4"},meta:{featured:!1,created:"2019-01-01 14:45",category:"Some Category"}},{id:"005",content:{title:"Title 5",tagline:"Lorem ipsum dolor sit amet."},img:{fileName:"4.jpg",description:"alt 5"},meta:{featured:!1,created:"2019-01-01 13:45",category:"Some Category"}},{id:"006",content:{title:"Title 6",tagline:"Lorem ipsum dolor sit amet."},img:{fileName:"1.jpg",description:"alt 6"},meta:{featured:!1,created:"2019-01-01 12:45",category:"Some Category"}},{id:"007",content:{title:"Title 7",tagline:"Lorem ipsum dolor sit amet."},img:{fileName:"2.jpg",description:"alt 7"},meta:{featured:!1,created:"2019-01-01 11:45",category:"Some Category"}}],t=e.filter((function(e){return e.meta.featured})),a=e.filter((function(e){return!e.meta.featured}));return r.a.createElement("main",null,r.a.createElement(v,{posts:t}),r.a.createElement(h,{posts:a}))};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(F,null),r.a.createElement(m,null))}},192:function(e,t,a){var n;e.exports=(n=a(193))&&n.default||n},193:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),r=a.n(n),l=a(125);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-index-js-b8803dc1133f47c4993f.js.map