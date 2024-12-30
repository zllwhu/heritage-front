import {createRouter, createWebHistory} from 'vue-router'
import {ElMessage} from "element-plus";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', redirect: '/login'},
        {
            path: '/manager', component: () => import('../views/manager/Manager.vue'), children: [
                {
                    path: 'home',
                    name: 'home',
                    meta: {title: '主页', needLogin: true},
                    component: () => import('../views/manager/Home.vue')
                },
                {
                    path: 'test',
                    name: 'test',
                    meta: {title: '测试数据页面', needLogin: true},
                    component: () => import('../views/manager/Test.vue')
                },
                {
                    path: 'data',
                    name: 'data',
                    meta: {title: '数据展示页面', needLogin: true},
                    component: () => import('../views/manager/Data.vue')
                },
                {
                    path: 'employee',
                    name: 'employee',
                    meta: {title: '员工信息页面', needLogin: true},
                    component: () => import('../views/manager/Employee.vue')
                },
                {
                    path: 'admin',
                    name: 'admin',
                    meta: {title: '管理员信息页面', needLogin: true},
                    component: () => import('../views/manager/Admin.vue')
                },
                {
                    path: 'person',
                    name: 'person',
                    meta: {title: '个人信息页面', needLogin: true},
                    component: () => import('../views/manager/Person.vue')
                },
                {
                    path: 'password',
                    name: 'password',
                    meta: {title: '修改密码页面', needLogin: true},
                    component: () => import('../views/manager/Password.vue')
                },
                {
                    path: 'others',
                    name: 'others',
                    meta: {title: '其他建筑管理页面', needLogin: true},
                    component: () => import('../views/manager/Others.vue')
                },
                {
                    path: 'whu',
                    name: 'whu',
                    meta: {title: '武大建筑管理页面', needLogin: true},
                    component: () => import('../views/manager/Whu.vue')
                },
                {
                    path: 'comment',
                    name: 'comment',
                    meta: {title: '留言管理页面', needLogin: true},
                    component: () => import('../views/manager/Comment.vue')
                },
            ]
        },
        {
            path: '/front', component: () => import('../views/front/Front.vue'), children: [
                {
                    path: 'home',
                    name: 'front-home',
                    meta: {title: '平台主页', needLogin: true},
                    component: () => import('../views/front/home/Home.vue')
                },
                {
                    path: 'about',
                    name: 'front-about',
                    meta: {title: '关于平台', needLogin: true},
                    component: () => import('../views/front/about/About.vue'), children: [
                        {
                            path: 'introduction',
                            name: 'front-about-introduction',
                            meta: {title: '基本介绍', needLogin: true},
                            component: () => import('../views/front/about/About1.vue'),
                        },
                        {
                            path: 'institute',
                            name: 'front-about-institute',
                            meta: {title: '研究机构', needLogin: true},
                            component: () => import('../views/front/about/About2.vue'),
                        },
                        {
                            path: 'members',
                            name: 'front-about-members',
                            meta: {title: '成员简介', needLogin: true},
                            component: () => import('../views/front/about/About3.vue'),
                        },
                    ]
                },
                {
                    path: 'heritage',
                    name: 'front-heritage',
                    meta: {title: '遗产名录', needLogin: true},
                    component: () => import('../views/front/heritage/Heritage.vue'), children: [
                        {
                            path: '1',
                            name: 'front-heritage-1',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage1.vue'),
                        },
                        {
                            path: '2',
                            name: 'front-heritage-2',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage2.vue'),
                        },
                        {
                            path: '3',
                            name: 'front-heritage-3',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage3.vue'),
                        },
                        {
                            path: '4',
                            name: 'front-heritage-4',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage4.vue'),
                        },
                        {
                            path: '5',
                            name: 'front-heritage-5',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage5.vue'),
                        },
                        {
                            path: '6',
                            name: 'front-heritage-6',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage6.vue'),
                        },
                        {
                            path: '7',
                            name: 'front-heritage-7',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage7.vue'),
                        },
                        {
                            path: '8',
                            name: 'front-heritage-8',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage8.vue'),
                        },
                        {
                            path: '9',
                            name: 'front-heritage-9',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage9.vue'),
                        },
                        {
                            path: '10',
                            name: 'front-heritage-10',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage10.vue'),
                        },
                        {
                            path: '11',
                            name: 'front-heritage-11',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage11.vue'),
                        },
                        {
                            path: '12',
                            name: 'front-heritage-12',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage12.vue'),
                        },
                        {
                            path: '13',
                            name: 'front-heritage-13',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage13.vue'),
                        },
                        {
                            path: '14',
                            name: 'front-heritage-14',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage14.vue'),
                        },
                        {
                            path: '15',
                            name: 'front-heritage-15',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage15.vue'),
                        },
                        {
                            path: '16',
                            name: 'front-heritage-16',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage16.vue'),
                        },
                        {
                            path: '17',
                            name: 'front-heritage-17',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage17.vue'),
                        },
                        {
                            path: '18',
                            name: 'front-heritage-18',
                            meta: { title: '遗产名录', needLogin: true },
                            component: () => import('../views/front/heritage/Heritage18.vue'),
                        },
                    ]
                },
                {
                    path: 'redmap',
                    name: 'front-redmap',
                    meta: {title: '红色图谱', needLogin: true},
                    component: () => import('../views/front/redmap/Redmap.vue'), children: [
                        {
                            path: 'spirit-1',
                            name: 'front-redmap-spirit-1',
                            meta: {title: '建党精神基因', needLogin: true},
                            component: () => import('../views/front/redmap/Redmap1.vue'),
                        },
                        {
                            path: 'spirit-2',
                            name: 'front-redmap-spirit-2',
                            meta: {title: '抗战精神基因', needLogin: true},
                            component: () => import('../views/front/redmap/Redmap2.vue'),
                        },
                        {
                            path: 'spirit-3',
                            name: 'front-redmap-spirit-3',
                            meta: {title: '三牛精神基因', needLogin: true},
                            component: () => import('../views/front/redmap/Redmap3.vue'),
                        },
                        {
                            path: 'spirit-4',
                            name: 'front-redmap-spirit-4',
                            meta: {title: '科学家精神基因', needLogin: true},
                            component: () => import('../views/front/redmap/Redmap4.vue'),
                        },
                        {
                            path: 'spirit-5',
                            name: 'front-redmap-spirit-5',
                            meta: {title: '革命精神基因', needLogin: true},
                            component: () => import('../views/front/redmap/Redmap5.vue'),
                        },
                        {
                            path: 'spirit-6',
                            name: 'front-redmap-spirit-6',
                            meta: {title: '艰苦创业精神基因', needLogin: true},
                            component: () => import('../views/front/redmap/Redmap6.vue'),
                        },
                        {
                            path: 'spirit-7',
                            name: 'front-redmap-spirit-7',
                            meta: {title: '改革开放精神基因', needLogin: true},
                            component: () => import('../views/front/redmap/Redmap7.vue'),
                        },
                        {
                            path: 'spirit-8',
                            name: 'front-redmap-spirit-8',
                            meta: {title: '新时代伟大奋斗精神基因', needLogin: true},
                            component: () => import('../views/front/redmap/Redmap8.vue'),
                        },
                    ]
                },
                {
                    path: 'archive',
                    name: 'front-archive',
                    meta: {title: '遗产档案', needLogin: true},
                    component: () => import('../views/front/archive/Archive.vue'), children: [
                        {
                            path: 'whu',
                            name: 'front-archive-whu',
                            meta: {title: '武大建筑档案', needLogin: true},
                            component: () => import('../views/front/archive/Archive1.vue'), children: [
                                {
                                    path: 'nowadays',
                                    name: 'front-archive-whu-nowadays',
                                    meta: {title: '现状分析', needLogin: true},
                                    component: () => import('../views/front/archive/Archive2.vue'),
                                },
                                {
                                    path: 'items',
                                    name: 'front-archive-whu-items',
                                    meta: {title: '建筑单体', needLogin: true},
                                    component: () => import('../views/front/archive/Archive3.vue'),
                                },
                            ]
                        },
                    ]
                },
                {
                    path: 'digital',
                    name: 'front-digital',
                    meta: {title: '数字展示', needLogin: true},
                    component: () => import('../views/front/digital/Digital.vue'), children: [
                        {
                            path: 'album',
                            name: 'front-digital-album',
                            meta: {title: '遗产图库', needLogin: true},
                            component: () => import('../views/front/digital/Digital1.vue'),
                        },
                        {
                            path: 'photo',
                            name: 'front-digital-photo',
                            meta: {title: '影像资料', needLogin: true},
                            component: () => import('../views/front/digital/Digital2.vue'),
                        },
                        {
                            path: 'story',
                            name: 'front-digital-story',
                            meta: {title: '红色故事', needLogin: true},
                            component: () => import('../views/front/digital/Digital3.vue'),
                        },
                        {
                            path: '3d',
                            name: 'front-digital-3d',
                            meta: {title: '三维模型', needLogin: true},
                            component: () => import('../views/front/digital/Digital4.vue'),
                        },
                        {
                            path: 'tourist',
                            name: 'front-digital-tourist',
                            meta: {title: '数字漫游', needLogin: true},
                            component: () => import('../views/front/digital/Digital5.vue'),
                        },
                    ]
                },
                {
                    path: 'smartmanage',
                    name: 'front-smartmanage',
                    meta: {title: '智慧管理', needLogin: true},
                    component: () => import('../views/front/smartmanage/SmartManage.vue'), children: [
                        {
                            path: 'health',
                            name: 'front-smartmanage-health',
                            meta: {title: '健康检测', needLogin: true},
                            component: () => import('../views/front/smartmanage/SmartManage1.vue'),
                        },
                        {
                            path: 'monitoring',
                            name: 'front-smartmanage-monitoring',
                            meta: {title: '监测巡查', needLogin: true},
                            component: () => import('../views/front/smartmanage/SmartManage2.vue'),
                        },
                        {
                            path: 'twin',
                            name: 'front-smartmanage-twin',
                            meta: {title: '数字孪生', needLogin: true},
                            component: () => import('../views/front/smartmanage/SmartManage3.vue'),
                        },
                    ]
                },
                {
                    path: 'expert',
                    name: 'front-expert',
                    meta: {title: '专家观点', needLogin: true},
                    component: () => import('../views/front/expert/Expert.vue'), children: [
                        {
                            path: 'experts',
                            name: 'front-expert-experts',
                            meta: {title: '专家库', needLogin: true},
                            component: () => import('../views/front/expert/Expert1.vue'),
                        },
                        {
                            path: 'books',
                            name: 'front-expert-books',
                            meta: {title: '佳作推荐', needLogin: true},
                            component: () => import('../views/front/expert/Expert2.vue'),
                        },
                        {
                            path: 'opinions',
                            name: 'front-expert-opinions',
                            meta: {title: '观点资讯', needLogin: true},
                            component: () => import('../views/front/expert/Expert3.vue'),
                        },
                        {
                            path: 'videos',
                            name: 'front-expert-videos',
                            meta: {title: '专家讲坛', needLogin: true},
                            component: () => import('../views/front/expert/Expert4.vue'),
                        },
                    ]
                },
                {
                    path: 'tourism',
                    name: 'front-tourism',
                    meta: {title: '文旅信息', needLogin: true},
                    component: () => import('../views/front/tourism/Tourism.vue'), children: [
                        {
                            path: 'policy',
                            name: 'front-tourism-policy',
                            meta: {title: '政策解读', needLogin: true},
                            component: () => import('../views/front/tourism/Tourism1.vue'),
                        },
                        {
                            path: 'information',
                            name: 'front-tourism-information',
                            meta: {title: '文旅信息', needLogin: true},
                            component: () => import('../views/front/tourism/Tourism2.vue'),
                        },
                        {
                            path: 'shop',
                            name: 'front-tourism-shop',
                            meta: {title: '文创展示', needLogin: true},
                            component: () => import('../views/front/tourism/Tourism3.vue'),
                        },
                        {
                            path: 'activities',
                            name: 'front-tourism-activities',
                            meta: {title: '活动推介', needLogin: true},
                            component: () => import('../views/front/tourism/Tourism4.vue'),
                        },
                    ]
                },
                {
                    path: 'feedback',
                    name: 'front-feedback',
                    meta: {title: '交互反馈', needLogin: true},
                    component: () => import('../views/front/feedback/Feedback.vue'), children: [
                        {
                            path: 'message',
                            name: 'front-feedback-message',
                            meta: {title: '留言板', needLogin: true},
                            component: () => import('../views/front/feedback/Feedback1.vue'),
                        },
                        {
                            path: 'share',
                            name: 'front-feedback-share',
                            meta: {title: '资料分享', needLogin: true},
                            component: () => import('../views/front/feedback/Feedback2.vue'),
                        },
                    ]
                },
                {
                    path: 'information',
                    name: 'front-information',
                    meta: {title: '个人信息', needLogin: true},
                    component: () => import('../views/front/information/Information.vue'), children: [
                        {
                            path: 'user',
                            name: 'front-information-user',
                            meta: {title: '个人信息', needLogin: true},
                            component: () => import('../views/front/information/Information1.vue'),
                        },
                        {
                            path: 'password',
                            name: 'front-information-password',
                            meta: {title: '修改密码', needLogin: true},
                            component: () => import('../views/front/information/Information2.vue'),
                        },
                    ]
                },
            ]
        },
        {path: '/login', name: 'login', meta: {title: '登录系统'}, component: () => import('../views/utils/Login.vue')},
        {
            path: '/register',
            name: 'register',
            meta: {title: '注册系统'},
            component: () => import('../views/utils/Register.vue')
        },
        {path: '/404', name: '404', meta: {title: '404找不到页面'}, component: () => import('../views/utils/404.vue')},
        {path: '/:pathMatch(.*)', redirect: '/404'},
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.needLogin) {
        if (localStorage.getItem('token')) {
            document.title = to.meta.title
            next()
        } else {
            ElMessage.error('请先登录')
            setTimeout(() => {
                next('/login')
            }, 200)
        }
    } else {
        document.title = to.meta.title
        next()
    }
})

export default router
