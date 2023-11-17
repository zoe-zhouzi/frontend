<template>
    <div id="left-aside" >
        <ul id="sidebarnav">
            <li style="height:70px;width:100%;display: flex;justify-content: center;align-items: center;font-size:14px;">
                <button @click="showCreateDialog" style="width:160px;height:40px;border:none;background-color:#6184e6;">
                    <i class="fa fa-plus-square"></i><span style="color:#fff;">&nbsp;&nbsp;&nbsp;{{ buttonName }}</span>
                </button>
            </li>
            <li class="leftmenu-item" :class="{'active':item.isActive}" v-for="item,index in funcList" :key="index" @click="selectContent(item.component)">
                <i class="mdi mdi-adjust"></i><span>&nbsp;&nbsp;&nbsp;{{ item.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Aside',
    props: ["buttonName", "funcList"],
    data() {
        return {
            createName: "新建事件",
            
        };
    },

    mounted() {
        this.$emit('componentName', 'TaskList')
    },

    methods: {
        showContent(name) {
            this.$router.push({name})
        },
        showCreateDialog() {
            this.$emit('dialogState', true)
        },
        selectContent(componentName) {
            console.log('任务列表传参触发了');
            this.$emit('componentName', componentName)
        }
    },
};
</script>

<style scoped>
#sidebarnav {
    font-size: 16px;
    color: #FFF;
}
.fa-plus-square {
    color:#FFF;
}
.leftmenu-item {
    height: 49px;
    line-height: 49px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 20px;
    font-size: 14px;
    color: #c0baba;
}
.leftmenu-item:hover {
    color: #fff;
}
.active {
    color: #fff;
}
</style>