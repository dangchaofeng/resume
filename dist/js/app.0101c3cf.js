(function(t){function s(s){for(var i,o,c=s[0],l=s[1],r=s[2],v=0,u=[];v<c.length;v++)o=c[v],a[o]&&u.push(a[o][0]),a[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(s);while(u.length)u.shift()();return n.push.apply(n,r||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],i=!0,c=1;c<e.length;c++){var l=e[c];0!==a[l]&&(i=!1)}i&&(n.splice(s--,1),t=o(o.s=e[0]))}return t}var i={},a={app:0},n=[];function o(s){if(i[s])return i[s].exports;var e=i[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,s,e){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)o.d(e,i,function(s){return t[s]}.bind(null,i));return e},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=s,c=c.slice();for(var r=0;r<c.length;r++)s(c[r]);var d=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("cd49")},6562:function(t,s,e){},cd49:function(t,s,e){"use strict";e.r(s);var i=e("2b0e"),a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],o=e("2877"),c={},l=Object(o["a"])(c,a,n,!1,null,null,null);l.options.__file="App.vue";var r=l.exports,d=e("8c4f"),v=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"main-container",staticStyle:{display:"none"}},[e("section",{staticClass:"section section-header"},[e("div",{staticClass:"section-bg section-header-bg"}),e("div",{staticClass:"section-bg section-content-bg"}),e("div",{staticClass:"container"},[e("header",{staticClass:"header"},[e("div",{staticClass:"header-box"},[t._m(0),e("h1",{staticClass:"name text-center wow inShow no-print"},[t._v(t._s(t.userInfo.nickname))]),e("h1",{staticClass:"name text-center hide show-print-block"},[t._v(t._s(t.userInfo.name))])])]),e("div",{staticClass:"section-content"},[e("div",{staticClass:"content-box"},[e("div",{staticClass:"name-slogan"},[e("h2",{staticClass:"wow inShow no-print",attrs:{"data-wow-delay":"0.1s"}},[e("span",{staticClass:"text-light"},[t._v(t._s(t.userInfo.lastName))]),t._v(" "+t._s(t.userInfo.firstName)+"\n          ")]),e("div",{staticClass:"description wow inShow",attrs:{"data-wow-delay":"0.15s"}},[t._v(t._s(t.userInfo.slogan))])]),e("div",{staticClass:"contact-info"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-lg-3"},[e("div",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.3s"}},[e("h4",[t._v("性别")]),e("div",{staticClass:"info"},[t._v(t._s(t.userInfo.sex))])])]),e("div",{staticClass:"col-md-6 col-lg-3"},[e("div",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.45s"}},[e("h4",[t._v("年龄")]),e("div",{staticClass:"info"},[t._v(t._s(t.calcDate(t.userInfo.birthday)))])])]),e("div",{staticClass:"col-md-6 col-lg-3"},[e("div",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.5s",href:"mailto:"+t.userInfo.email}},[e("h4",[t._v("学历")]),e("div",{staticClass:"info"},[t._v(t._s(t.userInfo.education))])])]),e("div",{staticClass:"col-md-6 col-lg-3"},[e("a",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.55s",href:t.userInfo.website,target:"_blank"}},[e("h4",[t._v("经验")]),e("div",{staticClass:"info"},[t._v(t._s(t.userInfo.exp[0]+t.calcDate(t.userInfo.workSince)+t.userInfo.exp[1]))])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-lg-3"},[e("div",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.6s"}},[e("h4",[t._v("Phone")]),e("address",{staticClass:"info"},[t._v(t._s(t.userInfo.phone))])])]),e("div",{staticClass:"col-md-6 col-lg-3"},[e("div",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.65s"}},[e("h4",[t._v("QQ")]),e("div",{staticClass:"info"},[t._v(t._s(t.userInfo.qq.number))])])]),e("div",{staticClass:"col-md-6 col-lg-3"},[e("a",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.7s",href:t.userInfo.website,target:"_blank"}},[e("h4",[t._v("Website")]),e("div",{staticClass:"info"},[t._v(t._s(t.userInfo.website))])])]),e("div",{staticClass:"col-md-6 col-lg-3"},[e("a",{staticClass:"item wow inShow",attrs:{"data-wow-delay":"0.75s",href:t.userInfo.github,target:"_blank"}},[e("h4",[t._v("Github")]),e("div",{staticClass:"info",attrs:{title:t.userInfo.github}},[t._v(t._s(t.userInfo.github))])])])])])])])])]),e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section-bg section-header-bg"}),e("div",{staticClass:"section-bg section-content-bg"}),t._m(1),e("div",{staticClass:"section-content"},[e("div",{staticClass:"intro"},t._l(t.userInfo.intro.content,function(s,i){return e("p",{key:i,domProps:{innerHTML:t._s(s)}})})),t.userInfo.intro.technology?e("div",{staticClass:"technology"},[e("ul",{staticClass:"inline"},[e("li",[e("b",[t._v(t._s(t.userInfo.intro.technology.title))])]),t._l(t.userInfo.intro.technology.content,function(s){return e("li",{key:s},[t._v(t._s(s))])})],2)]):t._e()])])]),e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section-bg section-header-bg"}),e("div",{staticClass:"section-bg section-content-bg"}),t._m(2),e("div",{staticClass:"section-content"},[e("div",{staticClass:"experience"},t._l(t.userInfo.experience,function(s){return e("div",{key:s.title,staticClass:"item"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"time"},[t._v(t._s(s.time))]),e("div",{staticClass:"title"},[t._v(t._s(s.title))]),e("div",{staticClass:"description"},[t._v(t._s(s.intro))])]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"content"},[t._v(t._s(s.description))]),t._l(s.tips,function(s){return e("div",{key:s.title,staticClass:"tips"},[e("b",[t._v(t._s(s.title))]),e("ul",t._l(s.content,function(s){return e("li",{key:s},[t._v(t._s(s))])}))])}),t._l(s.technology,function(s){return e("div",{key:s.title,staticClass:"technology"},[e("b",[t._v(t._s(s.title))]),e("ul",{staticClass:"inline"},t._l(s.content,function(s){return e("li",{key:s},[t._v(t._s(s))])}))])})],2)])])}))])])]),e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section-bg section-header-bg"}),e("div",{staticClass:"section-bg section-content-bg"}),t._m(3),e("div",{staticClass:"section-content"},[e("div",{staticClass:"row skill"},t._l(t.userInfo.skill,function(s){return e("div",{key:s.name,staticClass:"col-md-6"},[e("div",{staticClass:"item"},[e("div",{staticClass:"text-info"},[e("span",{staticClass:"num text-light"},[t._v(t._s(s.percent))]),t._v(t._s(s.name)+"\n                            ")]),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar wow progressShow",style:"width:"+s.percent})])])])}))])])]),e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section-bg section-header-bg"}),e("div",{staticClass:"section-bg section-content-bg"}),t._m(4),e("div",{staticClass:"section-content"},[e("div",{staticClass:"experience"},t._l(t.userInfo.project,function(s){return e("div",{key:s.title,staticClass:"item"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"time"},[t._v(t._s(s.time))]),e("div",{staticClass:"title"},[t._v(t._s(s.title))]),e("div",{staticClass:"description"},[t._v(t._s(s.intro))])]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"content"},[t._v(t._s(s.description))]),t._l(s.tips,function(s){return e("div",{key:s.title,staticClass:"tips"},[e("b",[t._v(t._s(s.title))]),e("ul",t._l(s.content,function(s){return e("li",{key:s},[t._v(t._s(s))])}))])})],2)])])}))])])]),e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section-bg section-header-bg"}),e("div",{staticClass:"section-bg section-content-bg"}),t._m(5),e("div",{staticClass:"section-content"},[e("div",{staticClass:"row usually"},t._l(t.userInfo.usually,function(s,i){return e("div",{key:i,staticClass:"col-lg-4 col-md-6"},[s.link?e("a",{staticClass:"item",attrs:{href:s.link,target:"_blank",title:s.link}},[e("i",{staticClass:"fa fa-github"}),e("h3",{staticClass:"text-light"},[t._v(t._s(s.name))]),e("p",[t._v(t._s(s.description))])]):t._e(),s.link?t._e():e("div",{staticClass:"item",attrs:{title:s.link}},[e("i",{staticClass:"fa fa-github"}),e("h3",{staticClass:"text-light"},[t._v(t._s(s.name))]),e("p",[t._v(t._s(s.description))])])])}))])])]),e("section",{staticClass:"section no-print"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section-bg section-header-bg"}),e("div",{staticClass:"section-bg section-content-bg"}),t._m(6),e("div",{staticClass:"section-content"},[e("div",{staticClass:"contact"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-lg-3"},[e("div",{staticClass:"item"},[e("h4",[t._v("Phone")]),e("div",{staticClass:"info"},[t._v(t._s(t.userInfo.phone))])])]),e("div",{staticClass:"col-md-6 col-lg-3"},[e("div",{staticClass:"item"},[e("h4",[t._v("QQ")]),e("div",{staticClass:"info"},[t._v(t._s(t.userInfo.qq.number))])])]),e("div",{staticClass:"col-md-6 col-lg-3"},[e("div",{staticClass:"item"},[e("h4",[t._v("Location")]),e("div",{staticClass:"info"},[t._v(t._s(t.userInfo.location))])])]),e("div",{staticClass:"col-md-6 col-lg-3"},[e("a",{staticClass:"item",attrs:{href:"mailto:"+t.userInfo.email}},[e("h4",[t._v("Email")]),e("div",{staticClass:"info"},[t._v(t._s(t.userInfo.email))])])])])]),e("div",{staticClass:"name-slogan"},[e("h2",{staticClass:"wow inShow"},[e("span",{staticClass:"text-light"},[t._v(t._s(t.userInfo.lastName))]),t._v(" "+t._s(t.userInfo.firstName)+"\n        ")]),e("div",{staticClass:"description wow inShow",attrs:{"data-wow-delay":"0.05s"}},[t._v(t._s(t.userInfo.slogan)+"（"+t._s(t.userInfo.tips)+"）")])])])])])])},u=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"avatar wow inShow no-print"},[i("img",{staticClass:"img-responsive",attrs:{src:e("cfe5"),alt:"logo"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"header"},[e("div",{staticClass:"content-box"},[e("h2",{staticClass:"title"},[t._v("介绍 / \n          "),e("small",[e("i",[t._v("Intro")])])]),e("div",{staticClass:"description"},[t._v("介绍一些个人基本情况")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"header"},[e("div",{staticClass:"content-box"},[e("h2",{staticClass:"title"},[t._v("工作经验 / \n          "),e("small",[e("i",[t._v("Experience")])])]),e("div",{staticClass:"description"},[t._v("简短的从业经历介绍")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"header"},[e("div",{staticClass:"content-box"},[e("h2",{staticClass:"title"},[t._v("技能 / \n          "),e("small",[e("i",[t._v("Skills")])])]),e("div",{staticClass:"description"},[t._v("我所掌握的工具和技术栈")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"header"},[e("div",{staticClass:"content-box"},[e("h2",{staticClass:"title"},[t._v("项目经验 / \n          "),e("small",[e("i",[t._v("Experience")])])]),e("div",{staticClass:"description"},[t._v("近期主要做过的一些项目")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"header"},[e("div",{staticClass:"content-box"},[e("h2",{staticClass:"title"},[t._v("常逛 / \n          "),e("small",[e("i",[t._v("Usually")])])]),e("div",{staticClass:"description"},[t._v("经常逛的技术相关网站")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"header"},[e("div",{staticClass:"content-box"},[e("h2",{staticClass:"title"},[t._v("联系 / \n          "),e("small",[e("i",[t._v("Contact")])])]),e("div",{staticClass:"description"},[t._v("通过这些信息可以联系到我")])])])}];const h={name:"党超峰",sex:"男",birthday:"1993-02-17",workSince:"2015-7-10",exp:["工作","年"],nickname:"煦千",firstName:"Dang",lastName:"Chaofeng",slogan:"龟速爬行的前端开发者",tips:"Ctrl+p可以印本简历，打印时显示真名",education:"本科",phone:"15208235210",location:"ChengDu·China",qq:{number:"1752555825"},website:"暂无",github:"https://github.com/dangchaofeng",email:"chaofengdang@gmail.com",intro:{content:["1. 注重团队沟通与协作并有较强的学习能力和解决问题能力，能在团队中认清自己的地位和职责，充分发挥自己的能力。","2. 喜欢思考，热爱实践，将自己从理论中引发的思想验证，总是相信能从最基础的东西解释现象。善于用实践去证明自己的猜测想法，自学中更改过些许书本或网站代码的错误之处（或个人感觉不合理之处）。","3. 工作积极主动，认真负责，考虑细致，承受能力强。"]},experience:[{time:"2017.6-today",title:"四方伟业（成都）",intro:"web前端",description:"转战成都，进入四方伟业，做一些政府军工的管理系统。",tips:[{title:"主要业绩：",content:["参与产品重点模块的开发，负责定制化项目的开发","规范代码，使之更优雅、可维护、便于阅读，和团队其他同事一起分享和成长。"]}],technology:[{title:"技术栈：",content:["node","vue","element-ui","less","webpack","jquery","echarts"]}]},{time:"2015.10-2017.5",title:"中软国际（西安）",intro:"javascript工程师",description:"追求自身发展，进入中软，做一些华为外包项目。",tips:[{title:"主要业绩：",content:["参与产品（金关二期）重点模块的开发","负责产品（大数据Fusioninsight Manager）问题单管理","负责内部项目（质量看护平台、VOC全球维护系统）的整体开发","规范代码，使之更优雅、可维护、便于阅读，和团队其他同事一起分享和成长。"]}],technology:[{title:"技术栈：",content:["angualr-1.x","tiny-ui","python","bootstrap","jquery","mysql","echarts","highcharts"]}]},{time:"2015.7-2015.9",title:"溢诚金融（西安）",intro:"页面工程师",description:"初入行业，静态页面的制作",tips:[{title:"主要业绩：",content:["重构产品的注册、登录页面，","负责替换公司网站的banner活动模块。"]}],technology:[{title:"技术栈：",content:["bootstrap","jquery"]}]}],project:[{time:"2018.09-today",title:"57所、大数据金融",intro:"大数据管理系统",description:"",tips:[{title:"",content:["技术栈：node, vue, less, webpack, element-ui","负责两个管理系统项目的页面搭建。","对echarts的基本组件进行封装，开箱即用。"]}],technology:[{title:"技术栈：",content:["node","vue","less","webpack","element-ui"]}]},{time:"2018.03-2018.08",title:"渝中区管理系统及门户",intro:"",description:"",tips:[{title:"",content:["技术栈：node, vue, less, webpack, element-ui, jquery, echarts","独自一个人全权负责重庆市渝中区管理系统定制化需求和门户的项目开发","负责整个项目门户的设计和开发，根据需求提出对应的公共组件进行复用，界面风格根据UI人员给出的高保真进行设计，并针对elementui的样式进行复写。整个项目代码使用webpack统一进行编译打包管理。","学习研究webpack的打包配置，和后端人员约定规则，对请求拦截并统一处理成功和失败的提示信息。按照保真实现定制化组件。","了解了webpack中dev/build的配置和多页面配置。提升了前端布局、模块划分能力和框架配置能力，提升了和人员沟通的技巧及对项目进度的把控。"]}],technology:[{title:"技术栈：",content:["node","vue","less","webpack","element-ui","jquery","echarts"]}]},{time:"2017.09-2017.12",title:"负责ETL的vue重构开发",intro:"",description:"",tips:[{title:"",content:["技术栈：node, vue, less, webpack, element-ui, jquery, echarts","将EXT版本的重构为vue框架，对其组件重写和新增组件，保证原有的功能点，改善用户交互体验。","负责和需求、后台人员对接，在理解组件功能的同时，改善组件的使用体验，提出自己的修改意见，最终实现更易用的功能。","熟悉了VUE的动态组件，并在自己的组件中可以使用v-model；熟悉了递归组件的写法，加强了自己的问题解决能力。理解了vue的双向绑定原理(数据劫持+发布订阅模式)，并实现了简易版的VUE双向绑定。"]}],technology:[{title:"技术栈：",content:["node","vue","less","webpack","element-ui","jquery","echarts"]}]},{time:"2017.06-2017.09",title:"公司产品重构",intro:"",description:"",tips:[{title:"",content:["技术栈：node, vue, less, webpack, element-ui, jquery, echarts","根据产品需求，用vue + element-ui开发模块功能","翻阅原型设计和需求文档，了解业务需求并对不合理的需求进行评估并及时反馈。与后台规定标准实现，约定接口文档，保持并行开发进度。","学会了如何在工作中更好的沟通，学会了前后分离时保持高效的开发，节约开发成本。"]}],technology:[{title:"技术栈：",content:["node","vue","less","webpack","element-ui","jquery","echarts"]}]},{time:"2017.02-2017.05",title:"大数据Fusioninsight Manager",intro:"",description:"",tips:[{title:"",content:["技术栈：angular1.x, tiny-ui, jquery, echarts","产品转架构中，处理分支版本的JS问题，负责C70RC1、C70RC2两个版本的问题单规划及处理。","在正式负责版本问题单之前，配置git、生成密钥并学习git相关命令； 研究核心文件class.js，培训讲解js原型甘露，在从基类无限构造新类的过程中，如何去访问父级类中定义的函数； 对产品进行基本功能的VT，了解产品； 学习浏览器chrome的单步调试，自己制定模拟问题去定位练习；","学会了git的基本操作命令，熟悉了如何使用chrome进行单步调试，对代码的安全性保护措施更完善。"]}],technology:[{title:"技术栈：",content:["angular1.x","tiny-ui","jquery","echarts"]}]},{time:"2016.02-2017.01",title:"质量看护平台、VOC全球维护系统",intro:"",description:"",tips:[{title:"",content:["技术栈：bootstrap, jquery, python, mysql","使用python已搭建好的django框架，进行开发web应用。实现一个解放QA人力的度量工具； 单人独立负责整个工具的所有前端展示、行为及多处后端数据处理。","对echarts、highcharts进行封装，利用传参适用于柱状图、条形图、饼图等的生成；在没有API的情况下，规避并编写highcharts的X轴坐标风险标红；多处后端独立完成开发。","自行琢磨研究出python定时器的实现；","页面多处动态智能优化；利用bootstrap和jq编写自己的表格插件；","用户修改过程中可以选择下拉框中的内容，也可以切换为输入框自行输入；前端页面跨工程获取传参，进行权限匹配；","实现跨平台配置，搜索资料完成python中多级数据库切换；实现自动化度量。","了解学会了echarts和highcharts的使用，了解python后端语言，扎实了前台JavaScript的基础，在没有使用jquery的委托事件API时使用原生达到预期目标。"]}],technology:[{title:"技术栈：",content:["bootstrap","jquery","python","mysql"]}]},{time:"2015.10-2016.01",title:"金关二期",intro:"华为云计算平台",description:"",tips:[{title:"",content:["技术栈：angular1.x, tiny-ui, jquery, echarts","使用angular开发新特性，负责新特性模块中前端页面及业务逻辑的编写。与同事讨论划分自己所负责的模块，并与自己对接的后端人员沟通连调时间，及时与客户沟通需求，将不明确的、规划方案与实际开发设想的有分歧的主动上报，在规定时间内无风险的完成新特性的开发并使其投入生产使用。","学习原生javascript，晚上回去自己加班加点的练习；并把握项目整体的业务逻辑，尝试本地添加新特性模块。规划每天的任务量，确保与后端连调的时间充足，避免无所谓的风险。","学会了基本JavaScript语法，学会使用angular + tinyUI进行开发。"]}],technology:[{title:"技术栈：",content:["angular1.x","tiny-ui","jquery","echarts"]}]}],skill:[{name:"Vue",percent:"85%"},{name:"JavaScript",percent:"80%"},{name:"Css",percent:"70%"},{name:"Svn、Git",percent:"70%"},{name:"Webpack",percent:"60%"}],usually:[{name:"GitHub",link:"https://github.com/dangchaofeng",description:"搜索开源插件 记录、分享自己的东西"},{name:"知乎",link:"https://www.zhihu.com/people/xu-qian-76-85",description:"搜索解决一些疑问 探索新奇"},{name:"stackoverflow",link:"https://stackoverflow.com/",description:"查阅一些技术文档"}]};var p={name:"Reprendre",data(){return{loading:!0,userInfo:{exp:[],qq:{},intro:{content:[],technology:{title:"",content:[]}},experience:[{tips:{title:"",content:[]},technology:[]}],skill:[],project:[{tips:{title:"",content:[]},technology:[]}],usually:[]}}},created(){this.userInfo=h,this.loading=!1},methods:{calcDate(t){let s=new Date(t),e=new Date,i=e.getYear()-s.getYear();return i}}},_=p,C=Object(o["a"])(_,v,u,!1,null,null,null);C.options.__file="index.vue";var m=C.exports;i["a"].use(d["a"]);var f=new d["a"]({routes:[{path:"/",name:"Reprendre",component:m}]}),g=e("2f62");i["a"].use(g["a"]);var w=new g["a"].Store({state:{},mutations:{},actions:{}});e("6562");i["a"].config.productionTip=!1,new i["a"]({router:f,store:w,render:function(t){return t(r)}}).$mount("#app")},cfe5:function(t,s,e){t.exports=e.p+"img/logo.14044540.png"}});
//# sourceMappingURL=app.0101c3cf.js.map