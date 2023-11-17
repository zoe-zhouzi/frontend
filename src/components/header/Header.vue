<template>
    <div id="topbar">
        <div class="left-title" v-if="isUnFoldLeft">网络情报监测平台</div>
        <!-- <div class="left-icon" v-else></div> -->
        <div class="right-menu">
            <ul class="menu-list">
                <li class="menu-item" @click="foldLeftNav"><i class="mdi mdi-menu font-24"></i></li>
                <li class="menu-item" v-for="item,index in menuList" :key="index" @click="goDetailComponent(item.component)">
                    <i :class="item.iClass"></i>{{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Header',
    computed: {
        ...mapState(["isUnFoldLeft"])
    },
    data() {
        return {
            menuList: [
                {
                    name: " 今日热点",
                    component: "todathot",
                    iClass: "fa fa-list-alt"
                },
                {
                    name: " 监测分析",
                    component: "monitoranalyse",
                    iClass: "fa fa-chart-bar"
                },
                {
                    name: " 数据监测",
                    component: "datamonitor",
                    iClass: "fa fa-crosshairs"
                },
                {
                    name: " 监测管理",
                    component: "monitormanage",
                    iClass: "fa fa-list"
                },
                {
                    name: " 全文搜索",
                    component: "fulltextsearch",
                    iClass: "fa fa-search"
                },
                {
                    name: " 监测大屏",
                    component: "monitorlargescreen",
                    iClass: "fa fa-chart-line"
                },
                {
                    name: " 事件分析",
                    component: "eventanalyse",
                    iClass: "fa fa-window-maximize"
                },
                {
                    name: " 人物分析",
                    component: "characteranalyse",
                    iClass: "fa fa-window-maximize"
                },
            ],
        };
    },
    mounted() {
    },

    methods: {
        foldLeftNav() {
            this.$store.dispatch('changeUnfoldState')
        },
        goDetailComponent(name) {
            this.$router.push({name})
        }
    },
};
</script>

<style scoped>
#topbar {
    position: fixed;
    top: 0;
    z-index: 50;
    width: 100%;
    height: 64px;
    /* background-color: pink; */
    display: flex;
    
}
#topbar .left-title {
    width: 190px;
    height: 100%;
    background-color: #36383e;
    color:rgb(255, 255, 255);
    font-size: 18px;
    line-height: 64px;
    text-align: center;
    font-weight: 600;
}
#topbar .left-icon {
    width: 50px;
    height: 64px;
    background: url(../../assets/logo1.png) no-repeat center;
    background-color: #36383e;
    /* background-color: #fff; */
    background-size: 100% auto;
    color:rgb(255, 255, 255);
    line-height: 64px;
    text-align: center;
    box-sizing: border-box;
    padding-top: 20px;
}
#topbar .right-menu {
    flex: 1;
    /* width: calc(100% - 190px); */
    height: 100%;
    background-color: #fff;
}
#topbar .menu-list {
    display: flex;
}
#topbar .menu-item {
    height: 100%;
    line-height: 64px;
    padding: 0 15px;
}
</style>