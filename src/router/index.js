import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;

// //重写push｜replace
// //第一个参数：告诉原来push方法，你往哪里跳转（传递哪些参数）
VueRouter.prototype.push = function (location, resolve, reject){
    if (resolve && reject){
        //call|apply区别
        //相同点：都可以调用函数一次，都可以篡改函数的上下文一次
        //不同点：call与apply传递参数： call传递参数用逗号隔开，apply方法执行，传递数组
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, ()=>{}, ()=>{});
    }
}

export default new VueRouter({
    mode: "history",
    routes: [
        {
            name: "eventanalyse",
            path: "/eventanalyse",
            component: ()=>import("@/pages/eventanalyse/EventAnalyse.vue"),
            meta: {
                arr:['事件分析']
            },
            children: [
                {   
                    name: "tasklist",
                    path:"taskList",
                    component: ()=> import("@/pages/eventanalyse/components/TaskList.vue"),
                    meta: {
                        arr: ['事件分析', '任务列表']
                    }
                },
                {
                    name: "eventdetail",
                    path:"eventdetail/:eventid?",
                    component: ()=> import("@/pages/eventanalyse/components/EventDetail.vue"),
                    meta: {
                        arr: ['事件分析', '事件详情']
                    }
                }
            ]
        },

        {
            name: "todathot",
            path: "/todayhot",
            component: ()=>import("@/pages/TodayHot.vue")
        },
        {
            name: "monitoranalyse",
            path: "/monitoranalyse",
            component: ()=>import("@/pages/MonitorAnalyse.vue")
        },
        {
            name: "datamonitor",
            path: "/datamonitor",
            component: ()=>import("@/pages/DataMonitor.vue")
        },
        {
            name: "monitormanage",
            path: "/monitormanage",
            component: ()=>import("@/pages/MonitorManage.vue")
        },
        {
            name: "fulltextsearch",
            path: "/fulltextsearch",
            component: ()=>import("@/pages/FullTextSearch.vue")
        },
        {
            name: "monitorlargescreen",
            path: "/monitorlargescreen",
            component: ()=>import("@/pages/MonitorLargeScreen.vue")
        },
        {
            
            name: "characteranalyse",
            path: "/characteranalyse",
            component: ()=>import("@/pages/charactoranalyse/CharactorAnalyse.vue"),
            meta: {
                arr:['人物分析', '词云图']
            }
        },
        {
            path: '/',
            redirect: {
                name: 'tasklist'
            }
        },
    ],//设置跳转到新页面滚动条的位置在最上面
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})