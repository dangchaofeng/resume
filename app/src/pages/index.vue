<!--
 * @moduleName: 个人简历主页
 * @Author: D·Chaofeng
 * @LastModifiedBy: D·Chaofeng
 * @Date: 2018-11-22 15:05:52
 * @LastEditTime: 2021-02-18 15:22:47
 -->

<template>
    <div class="main-container" v-show="!loading">
        <section class="section section-header">
            <div class="section-bg section-header-bg"></div>
            <div class="section-bg section-content-bg"></div>
            <div class="container">
                <header class="header">
                    <div class="header-box">
                        <div class="avatar wow inShow no-print">
                            <img src="../../public/images/logo.png" alt="logo" class="img-responsive" />
                        </div>
                        <h1 class="name text-center wow inShow no-print">{{userInfo.nickname}}</h1>
                        <h1 class="name text-center hide show-print-block">{{userInfo.name}}</h1>
                    </div>
                </header>
                <div class="section-content">
                    <div class="content-box">
                        <div class="name-slogan">
                            <h2 class="wow inShow no-print">
                                <span class="text-light">{{userInfo.lastName}}</span>&nbsp;{{userInfo.firstName}}
                            </h2>
                            <div class="description wow inShow">{{userInfo.slogan}}</div>
                        </div>
                        <div class="contact-info">
                            <div class="row">
                                <div class="col-md-6 col-lg-3">
                                    <div class="item wow inShow">
                                        <h4>性别</h4>
                                        <div class="info">{{userInfo.sex}}</div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="item wow inShow">
                                        <h4>年龄</h4>
                                        <div class="info">{{calcDate(userInfo.birthday)}}</div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-md-6 col-lg-3">
                                    <div class="item wow inShow">
                                        <h4>现处城市</h4>
                                        <div class="info">{{userInfo.city}}</div>
                                    </div>
                                </div> -->
                            <div class="row">
                                <div class="col-md-6 col-lg-3">
                                    <div class="item wow inShow">
                                        <h4>毕业院校</h4>
                                        <div class="info">{{userInfo.school}}</div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="item wow inShow">
                                        <h4>专业</h4>
                                        <div class="info">{{userInfo.profession}}</div>
                                    </div>
                                </div>

                                <div class="col-md-6 col-lg-3">
                                    <div class="item wow inShow" :href="'mailto:'+userInfo.email">
                                        <h4>学历</h4>
                                        <div class="info">{{userInfo.education}}</div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <a class="item wow inShow" :href="userInfo.website" target="_blank">
                                        <h4>经验</h4>
                                        <div class="info">{{userInfo.exp[0]+calcDate(userInfo.workSince)+userInfo.exp[1]}}</div>
                                    </a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-lg-3">
                                    <div class="item wow inShow">
                                        <h4>Phone</h4>
                                        <address class="info">{{userInfo.phone}}</address>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="item wow inShow">
                                        <h4>QQ</h4>
                                        <div class="info">{{userInfo.qq.number}}</div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <a class="item wow inShow" :href="userInfo.website" target="_blank">
                                        <h4>Website</h4>
                                        <div class="info">{{userInfo.website}}</div>
                                    </a>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <a class="item wow inShow" :href="userInfo.github" target="_blank">
                                        <h4>Github</h4>
                                        <div class="info" :title="userInfo.github">{{userInfo.github}}</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="section-bg section-header-bg"></div>
                <div class="section-bg section-content-bg"></div>
                <header class="header">
                    <div class="content-box">
                        <h2 class="title">介绍&nbsp;/&nbsp;
                            <small><i>Intro</i></small>
                        </h2>
                        <div class="description">介绍一些个人基本情况</div>
                    </div>
                </header>
                <div class="section-content">
                    <div class="intro">
                        <p v-for="(intro,idx) in userInfo.intro.content" :key="idx" v-html="intro"></p>
                    </div>
                    <div v-if="userInfo.intro.technology" class="technology">
                        <ul class="inline">
                            <li><b>{{userInfo.intro.technology.title}}</b></li>
                            <li v-for="item in userInfo.intro.technology.content" :key="item">{{item}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="section-bg section-header-bg"></div>
                <div class="section-bg section-content-bg"></div>
                <header class="header">
                    <div class="content-box">
                        <h2 class="title">工作经验&nbsp;/&nbsp;
                            <small><i>Experience</i></small>
                        </h2>
                        <div class="description">简短的从业经历介绍</div>
                    </div>
                </header>
                <div class="section-content">
                    <div class="experience">
                        <div class="item" v-for="item in userInfo.experience" :key="item.title">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="time">{{item.time}}</div>
                                    <div class="title">{{item.title}}</div>
                                    <div class="description">{{item.intro}}</div>
                                </div>
                                <div class="col-md-8">
                                    <div class="content">{{item.description}}</div>
                                    <div class="tips" v-for="tip in item.tips" :key="tip.title">
                                        <b>{{tip.title}}</b>
                                        <ul>
                                            <li v-for="list in tip.content" :key="list">{{list}}</li>
                                        </ul>
                                    </div>
                                    <div class="technology" v-for="tech in item.technology" :key="tech.title">
                                        <b>{{tech.title}}</b>
                                        <ul class="inline">
                                            <li v-for="techItem in tech.content" :key="techItem">{{techItem}}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="section">
            <div class="container">
                <div class="section-bg section-header-bg"></div>
                <div class="section-bg section-content-bg"></div>
                <header class="header">
                    <div class="content-box">
                        <h2 class="title">技能&nbsp;/&nbsp;
                            <small><i>Skills</i></small>
                        </h2>
                        <div class="description">我所掌握的工具和技术栈</div>
                    </div>
                </header>
                <div class="section-content">
                    <div class="row skill">
                        <div class="col-md-6" v-for="skill in userInfo.skill" :key="skill.name">
                            <div class="item">
                                <div class="text-info">
                                    <span class="num text-light">{{skill.percent}}</span>{{skill.name}}
                                </div>
                                <div class="progress">
                                    <div class="progress-bar wow progressShow" :style="'width:'+skill.percent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        <section class="section">
            <div class="container">
                <div class="section-bg section-header-bg"></div>
                <div class="section-bg section-content-bg"></div>
                <header class="header">
                    <div class="content-box">
                        <h2 class="title">项目经验&nbsp;/&nbsp;
                            <small><i>Experience</i></small>
                        </h2>
                        <div class="description">近期主要做过的一些项目</div>
                    </div>
                </header>
                <div class="section-content">
                    <div class="experience">
                        <div class="item" v-for="item in userInfo.project" :key="item.title">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="time">{{item.time}}</div>
                                    <div class="title">{{item.title}}</div>
                                    <div class="description">{{item.intro}}</div>
                                </div>
                                <div class="col-md-8">
                                    <div class="content">{{item.description}}</div>
                                    <div class="tips" v-for="tip in item.tips" :key="tip.title">
                                        <b>{{tip.title}}</b>
                                        <ul>
                                            <li v-for="list in tip.content" :key="list">{{list}}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="section">
            <div class="container">
                <div class="section-bg section-header-bg"></div>
                <div class="section-bg section-content-bg"></div>
                <header class="header">
                    <div class="content-box">
                        <h2 class="title">常逛&nbsp;/&nbsp;
                            <small><i>Usually</i></small>
                        </h2>
                        <div class="description">经常逛的技术相关网站</div>
                    </div>
                </header>
                <div class="section-content">
                    <div class="row usually">
                        <div class="col-lg-4 col-md-6" v-for="(usually,usuallyIndex) in userInfo.usually" :key="usuallyIndex">
                            <a v-if="usually.link" :href="usually.link" target="_blank" class="item" :title="usually.link">
                                <i class="fa fa-github"></i>
                                <h3 class="text-light">{{usually.name}}</h3>
                                <p>{{usually.description}}</p>
                            </a>
                            <div v-if="!usually.link" class="item" :title="usually.link">
                                <i class="fa fa-github"></i>
                                <h3 class="text-light">{{usually.name}}</h3>
                                <p>{{usually.description}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        <section class="section no-print">
            <div class="container">
                <div class="section-bg section-header-bg"></div>
                <div class="section-bg section-content-bg"></div>
                <header class="header">
                    <div class="content-box">
                        <h2 class="title">联系&nbsp;/&nbsp;
                            <small><i>Contact</i></small>
                        </h2>
                        <div class="description">通过这些信息可以联系到我</div>
                    </div>
                </header>
                <div class="section-content">
                    <div class="contact">
                        <div class="row">
                            <div class="col-md-6 col-lg-3">
                                <div class="item">
                                    <h4>Phone</h4>
                                    <div class="info">{{userInfo.phone}}</div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="item">
                                    <h4>QQ</h4>
                                    <div class="info">{{userInfo.qq.number}}</div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="item">
                                    <h4>Location</h4>
                                    <div class="info">{{userInfo.location}}</div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <a class="item" :href="'mailto:'+userInfo.email">
                                    <h4>Email</h4>
                                    <div class="info">{{userInfo.email}}</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="name-slogan">
                        <h2 class="wow inShow">
                            <span class="text-light">{{userInfo.lastName}}</span>&nbsp;{{userInfo.firstName}}
                        </h2>
                        <div class="description wow inShow">{{userInfo.slogan}}（{{userInfo.tips}}）</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { info } from './resume';
export default {
    name: 'Reprendre',
    data() {
        return {
            loading: true,
            userInfo: {
                exp: [],
                qq: {},
                intro: {
                    content: [],
                    technology: {
                        title: '',
                        content: []
                    }
                },
                experience: [{
                    tips: {
                        title: '',
                        content: [],
                    },
                    technology: []
                }],
                skill: [],
                project: [{
                    tips: {
                        title: '',
                        content: []
                    },
                    technology: []
                }],
                usually: []
            },
        }
    },
    created() {
        this.userInfo = info;
        this.loading = false;
    },
    methods: {
        /**
         * @Author      D.chaofeng
         * @DateTime    2018-12-19
         * @lastTime    2018-12-19
         * @description 计算出生日期
         * @param       {[type]}      birthday [description]
         * @return      {[type]}               [description]
         */
        calcDate(birthday) {
            let birthdayDate = new Date(birthday);
            let todayDate = new Date();
            let date = todayDate.getYear() - birthdayDate.getYear();
            return date;
        }
    }
};
</script>