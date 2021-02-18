/* eslint-disable */
/*
 * @Author: D.chaofeng
 * @Date:   2018-11-22 16:28:18
 * @Last Modified by:   D.chaofeng
 * @Last Modified time: 2019-03-02 15:38:21
 */
const info = {
    // 基础信息
    name: '党超峰',
    sex: '男',
    birthday: '1993-02-17',
    workSince: '2015-07-10',
    exp: ['工作', '年'],
    nickname: '煦千',
    firstName: 'Dang',
    lastName: 'Adam',
    slogan: '',
    tips: 'Ctrl+p可以印本简历，打印时显示真名',
    school: '西安理工大学',
    profession: '网络工程',
    city: '成都',
    education: '本科',
    phone: '15208235210',
    location: 'ChengDu·China',
    qq: {
        number: '1752555825'
    },
    website: '暂无',
    github: 'https://github.com/dangchaofeng',
    email: 'chaofengdang@gmail.com',
    // 自我评价
    intro: {
        content: [
            '1. 注重团队沟通与协作并有很强的学习能力和解决问题能力，能在团队中认清自己的地位和职责，充分发挥自己的能力。',
            '2. 熟练掌握原生js、vue、promise，喜欢思考，热爱实践，将自己从理论中引发的思想验证，总是相信能从最基础的东西解释现象。实现过自己的迷你vue、promise、class继承、vue虚拟列表，react虚拟列表。',
            '3. 工作积极主动，认真负责，考虑细致，承受能力强。'
        ]
        // technology: {
        //     title: '用过的技术栈：',
        //     content: ['webpack', 'vue', 'element-ui', 'node', 'angular', 'tiny-ui', 'mocha + chai', 'less', 'svn', 'git', 'bootstrap', 'jquery']
        // }
    },
    // 工作经验
    experience: [
        {
            time: '2019.6-today',
            title: '纬创软件有限公司（大连）外包到成都思爱普（SAP）项目',
            intro: 'web前端',
            description:
                '负责改造升级现有框架;负责freestyel的项目架构设计及搭建；负责疑难需求的research以及代码的refactor。',
            tips: [
                {
                    title: '主要收获：',
                    content: [
                        '学习并熟练git 常用命令，熟练使用sourceTree来管理本地git仓库',
                        '熟练使用了CAP构建标准项目的使用，熟悉了grunt的打包配置，例如：uglify，watch，browserify等插件配合',
                        '基于项目需求，调整目录结构：划分静态资源和打包资源，划分公共方法、常量、model数据层文件；封装工具方法：使用es6+的proxy代理功能实现转换图标，转换颜色的公共方法等',
                        '在e2e中，设计vyper的构造和test case，区分本地和线上环境，并实现闭环容错逻辑，使代码的健壮性，可读性，维护性更高',
                        '理解了项目的工程化打包原理，其实@babel/core负责语法转义，@babel/preset-env是做转义预设，指定转义规则的。polyfill负责新的API垫片填充：当babel转义后，其实还有一些东西无法转义，比如es6+中的全局变量中的Promise, Object.assign()方法等，这就需要我们对当前环境进行一个polyfill，填充他们缺少的功能。（如果不填充，浏览器如果不认识Promise，那肯定运行的时候报错）',
                        '熟练了karma + qunit 的单元测试',
                        '熟练了Vyper(protractor+selenium)的e2e测试',
                        '熟练了webdriverIO的e2e测试',
                        '引入axios进行http请求， 封装axios拦截器，统一处理get请求的loading现象以及请求失败后的error弹窗效果',
                        '了解学习了虚拟列表的概念，并通过vue和react实现自己的虚拟列表',
                        '个人小项目练习使用：koa + mongodb 来实现自己的后台系统， 前端使用 vue + elementUI',
                        '发现async/await语法函数中，形参中涉及当前上下文的，在await之后，会被洗刷掉',
                        '深刻体会到：团队内部代码规范的重要性'
                    ]
                }
            ],
            technology: [
                {
                    title: '技术栈：',
                    content: [
                        'node',
                        'ui5',
                        'less',
                        'grunt',
                        'protractor+selenium',
                        'webdriverIO',
                        'CAP',
                        'karma'
                    ]
                }
            ]
        },
        {
            time: '2017.6-2019.6',
            title: '四方伟业（成都）',
            intro: 'web前端',
            description:
                '转战成都，进入四方伟业，做一些政府军工的管理系统。规范代码，使之更优雅、可维护、便于阅读，和团队其他同事一起分享和成长。',
            tips: [
                {
                    title: '主要收获：',
                    content: [
                        '学习并熟练了svn的使用，精通了vue的使用，了解了node作为中间件的基本使用，webpack打包配置',
                        '基于项目需求，封装工具方法：深度克隆、表格整行校验方法、表格指定刷新页码、表单提交下载文件等',
                        '基于vue封装适合产品的组件，例如：状态筛选组件、基础echarts图表组件、在vue原型上增加factory方法，利用promise封装处理请求，根据restful API设计配置不同的提示、弹框消息。方便使用async新特性，达到异步请求同步写法',
                        '理解了vue的双向绑定原理，通过observe、dep发布订阅模式，将model层和view层同步起来，model层使用object.defineProperty进行数据拦截，如果拦截到改动，便会触发dep中的更新函数，回调其中的watcher',
                        '理解了promsie的实现原理，函数式编程思想+回调，实际使用resolve触发then中的方法调用',
                        '了解学习了mocha + chai单元测试'
                    ]
                }
            ],
            technology: [
                {
                    title: '技术栈：',
                    content: ['node', 'vue', 'element-ui', 'less', 'webpack', 'jquery', 'echarts']
                }
            ]
        },
        {
            time: '2015.10-2017.5',
            title: '中软国际（西安）',
            intro: 'javascript工程师',
            description:
                '追求自身发展，进入中软，做一些华为外包项目：参与产品（金关二期）重点模块的开发，负责产品（大数据Fusioninsight Manager）问题单管理，负责内部项目（质量看护平台、VOC全球维护系统）的整体开发。',
            tips: [
                {
                    title: '主要收获：',
                    content: [
                        '学习熟练了angualr-1.x + tiny-ui + git的开发，熟练了chrome的断点调试，能快速定位问题解决问题',
                        '学习熟练了使用jquery封装组件，比如：dialog弹窗、table表格组件，供项目使用',
                        '理解并掌握了javascript原型、原型链等，es5中实现自己的Class类封装',
                        '了解并熟练了使用echarts和highcharts做图表报告页面',
                        '了解数据结构：链表、队列、动态规划等算法相关基础内容',
                        '了解了python的基础使用，一个人前后端进行数据的逻辑交互'
                    ]
                }
            ],
            technology: [
                {
                    title: '技术栈：',
                    content: [
                        'angualr-1.x',
                        'tiny-ui',
                        'python',
                        'bootstrap',
                        'jquery',
                        'mysql',
                        'echarts',
                        'highcharts'
                    ]
                }
            ]
        },
        {
            time: '2015.7-2015.9',
            title: '溢诚金融（西安）',
            intro: '页面工程师',
            description: '初入行业，静态页面的制作，重构产品的注册、登录页面',
            tips: [
                {
                    title: '主要收获：',
                    content: ['了解学习了html+css+js相关知识、bootstrap的相关使用']
                }
            ],
            technology: [
                {
                    title: '技术栈：',
                    content: ['html', 'css', 'js', 'bootstrap', 'jquery']
                }
            ]
        }
    ],
    // 项目经验
    project: [
        {
            time: '2019.06-today',
            title:
                '【CAP】customizing, 【freestyle】monitor, 【freestyle】general】, 【freestyle】report】',
            intro: '大数据管理系统',
            description: '',
            tips: [
                {
                    title:
                        '负责【freestyle】项目中的架构的升级改造，技术调研选型，框架模块搭建；负责【CAP】中的cds配置；负责端到端测试的技术调研及实现',
                    content: [
                        '对【freestyle】模式下，了解运行原理，并对其框架进行改造升级，分别对eslint校验的配置，karma运行单元测试获取代码覆盖率，基于grunt打包增加less编译css，浏览器自动刷新（watch + livereload），增加babel转义打包，使其适配es6+的新技术，并前端内部进行了技术分享',
                        '在【freestyle】模式中，调研并实现了基于UI5的单元格编辑，自定义的列筛选、数据排序、数据过滤功能，充分结合ui5中的model进行数据绑定，构造清晰的MVC模式完成功能',
                        '对【freestyle】模式中，通过字段配置实现定制化的动态校验，自动转换大小写；在组件不支持自定义class的情况下，通过固有前缀+动态id，配合css中属性选择器实现样式的改变；需要使用currency自动格式化货币展示，又需要objectStatus颜色的加粗的提示，使用两个组件结合，new Currency 得到格式化后的值，再丢入objectStatus组件中去渲染',
                        '【CAP】项目中，由后台的函数钩子处理的last change on字段，在页面上修改其他data之后，last change on字段并没有得到刷新。判断请求，手动刷新objectpage页面的数据请求',
                        '针对protractor和selenium自动化测试进行调研研究，封装测试框架，划分po/spec两大文件夹，po中存放common基础类（主要封装方法，例如：公共元素定位，设置值，获取属性值，检测值，TAB,ENTER键等公共方法），以及扩展类listpage/objectpage/portalpage，扩展类中主要使用browser.wait异步等待，避免直接sleep，在非angular程序中，使用browser.waitForAngularEnabled(false);在逻辑层面，做出闭环操作，并对可能意外出现的脏数据进行了清理的保护措施',
                        '使用webdriverIO进行自动化测试，封装个性化的操作命令和键盘操作事件，调整目录结构以达层次分明的效果',
                        '在general中根据配置使不同searchHelpDialog动态生成，匹配不同的数据源'
                    ]
                }
            ]
        },
        {
            time: '2018.09-2019.06',
            title: '57所、大数据金融',
            intro: '大数据管理系统',
            description: '',
            tips: [
                {
                    title:
                        '负责项目中的定制化模块-生命周期、指标体系、问题数据的开发，并对产品的分层分域、质量报告模块进行重构',
                    content: [
                        '现状：质量报告中，有很多echarts图标，每个地方用都需要写很多DOM、options、v-if/v-esle等判定展示图表还是展示统一的暂无数据，并且左侧菜单是有无影响到的echarts的展示问题；',
                        '优化方案：对echarts的基本组件进行封装，使用vuex记录左侧菜单的状态，在每次改变的时候，让echart进行重绘，达到已数据驱动图表的所有动作。',
                        '现状：产品中左侧树结构交互参差不齐，主动提出统一交互',
                        '解决方案：1、将入口分为当前选中节点和默认第一个树节点；2、使功能职责单一化，树的筛选只是筛选，不进行特殊的默认选中（某个节点下的某个叶子节点，右侧又跟随新的默认值刷新等）',
                        '了解并熟练使用provide/inject，在封装组件中，使用注入特性，可以跨父子传递数据'
                    ]
                }
            ]
        },
        {
            time: '2018.03-2018.08',
            title: '渝中区管理系统及门户',
            intro: '',
            description: '',
            tips: [
                {
                    title: '独自一个人全权负责重庆市渝中区管理系统定制化需求和门户的项目开发',
                    content: [
                        '学习研究webpack的打包配置，和后端人员约定规则，封装$factory工厂方法挂载与vue的原型上，利用promise封装处理请求，对请求拦截并统一处理成功和失败的提示信息，减少了冗余的代码结构（message和dialog提示）',
                        '对高度复用的状态DOM进行组件封装，使单页面功能更一目了然',
                        '了解了webpack中dev/build的配置和多页面配置。提升了前端布局、模块划分能力和框架配置能力，提升了和人员沟通的技巧及对项目进度的把控',
                        '理解了vue的双向绑定原理(数据劫持+发布订阅模式)，并实现了简易版的VUE双向绑定'
                    ]
                }
            ]
        },
        {
            time: '2017.09-2017.12',
            title: '负责ETL的vue重构开发',
            intro: '',
            description: '',
            tips: [
                {
                    title: '协助同事进行部分模块的重构',
                    content: [
                        '将EXT版本的重构为vue框架，在保证原有的功能点的同时对其组件重写',
                        '负责和需求、后台人员对接，在理解组件功能的同时，改善组件的使用体验，提出自己的修改意见，最终实现更易用的功能',
                        "理解了vue中自己组件v-model的用法，原来使用了v-model后，组件是会接受一个value的获取到v-model值，内部可以使用$emit('input')进行修改v-model的值，从而达到双向绑定的效果",
                        '了解学习并应用了递归组件解决了一个复杂组件，更加深入理解数据驱动的概念'
                    ]
                }
            ]
        },
        {
            time: '2017.06-2017.09',
            title: '公司产品重构',
            intro: '',
            description: '',
            tips: [
                {
                    title: '根据产品需求，用vue + element-ui开发模块功能',
                    content: [
                        '翻阅原型设计和需求文档，了解业务需求并对不合理的需求进行评估并及时反馈。与后台规定标准实现，约定接口文档，保持并行开发进度。',
                        '学习并熟练了vue + element-ui的开发，并合理的对模块进行拆分'
                    ]
                }
            ]
        },
        {
            time: '2017.02-2017.05',
            title: '大数据Fusioninsight Manager',
            intro: '',
            description: '',
            tips: [
                {
                    title:
                        '产品转架构中，处理分支版本的JS问题，负责C70RC1、C70RC2两个版本的问题单规划及处理',
                    content: [
                        '学习git相关操作，配置git、生成密钥并了解命令',
                        '对产品进行基本功能的VT，了解产品，根据问题单的描述快速定位到相关模块的代码片段，进行解决',
                        '研究核心文件class.js，培训讲解js原型甘露，从理解原生的继承缺陷开始（不必要的初始化构造函数，constructor的错误指向，自身覆盖父级方法，无法调用等），对代码进行修复封装最终实现自己的Class类',
                        '学会了git的基本操作命令，熟悉了如何使用chrome进行单步调试，对代码的安全性保护措施更完善。'
                    ]
                }
            ]
        },
        {
            time: '2016.02-2017.01',
            title: '质量看护平台、VOC全球维护系统',
            intro: '',
            description: '',
            tips: [
                {
                    title: '使用python已搭建好的django框架，进行开发web应用',
                    content: [
                        '实现一个解放QA人力的度量工具： 单人独立负责整个工具的所有前端展示、行为及多处后端数据处理',
                        '使用jq对echarts、highcharts进行封装，利用传参适用于柱状图、条形图、饼图等的生成；在没有API的情况下，规避并编写highcharts的X轴坐标风险标红；多处后端独立完成开发。',
                        '自行琢磨研究出python定时器的实现，在每天0晨时候爬取数据',
                        '页面多处动态智能优化；利用bootstrap和jq编写自己的表格插件；',
                        '用户修改过程中可以选择下拉框中的内容，也可以切换为输入框自行输入；前端页面跨工程获取传参，进行权限匹配；',
                        '实现跨平台配置，搜索资料完成python中多级数据库切换；实现自动化度量。',
                        '了解学会了echarts和highcharts的使用，了解python后端语言，扎实了前台JavaScript的基础，在没有使用jquery的委托事件API时使用原生的target达到预期目标。'
                    ]
                }
            ]
        },
        {
            time: '2015.10-2016.01',
            title: '金关二期',
            intro: '华为云计算平台',
            description: '使用angular开发新特性，负责新特性模块中前端页面及业务逻辑的编写',
            tips: [
                {
                    title: '',
                    content: [
                        '与同事讨论划分自己所负责的模块，并与自己对接的后端人员沟通连调时间，及时与客户沟通需求，将不明确的、规划方案与实际开发设想的有分歧的主动上报，在规定时间内无风险的完成新特性的开发并使其投入生产使用。',
                        '学习原生javascript，晚上回去自己加班加点的练习；并把握项目整体的业务逻辑，尝试本地添加新特性模块。规划每天的任务量，确保与后端连调的时间充足，避免无所谓的风险。',
                        '学会了基本JavaScript语法，学会使用angular + tinyUI进行开发。'
                    ]
                }
            ]
        }
    ]
    // 技能
    // skill: [{
    //     name: 'Vue',
    //     percent: '85%'
    // }, {
    //     name: 'JavaScript',
    //     percent: '80%'
    // }, {
    //     name: 'Css',
    //     percent: '70%'
    // }, {
    //     name: 'Svn、Git',
    //     percent: '70%'
    // }, {
    //     name: 'Webpack',
    //     percent: '60%'
    // }],
    // 长逛的网站
    // usually: [{
    //     name: 'GitHub',
    //     link: 'https://github.com/dangchaofeng',
    //     description: '搜索开源插件 记录、分享自己的东西'
    // }, {
    //     name: '知乎',
    //     link: 'https://www.zhihu.com/people/xu-qian-76-85',
    //     description: '搜索解决一些疑问 探索新奇'
    // }, {
    //     name: 'Hankill',
    //     link: 'http://www.hankill.com/',
    //     description: '查阅学习一些技术文档'
    // }, {
    //     name: 'StackOverflow',
    //     link: 'https://stackoverflow.com/',
    //     description: '查阅一些技术文档'
    // }]
};

export { info };

export default {
    info
};
