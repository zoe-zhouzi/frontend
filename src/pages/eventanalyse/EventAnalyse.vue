<template>
    <div id="main">
        <Aside v-show="isUnFoldLeft" :buttonName="addButtonName" :funcList="funcList" @componentName="receiveComName" @dialogState="receiveDialogState"></Aside>
        <!-- <div class="minAside" v-show="!isUnFoldLeft"></div> -->
        <!-- <div id="right-contain" :class="{ml190:isUnFoldLeft, ml50:!isUnFoldLeft}"> -->
        <div id="right-contain" :class="{ml190:isUnFoldLeft}">
            <router-view></router-view>
        </div>
        <div class="shadebox" id="confirmsure" v-show="isShowDialog">
            <div class="showCreateEvent">
                <div class="event-box">
                    <div class="event-box-header">
                        <h5>创建事件分析任务</h5>
                        <i class="mdi mdi-close-circle-outline font-18 cursor-po" id="closethis" @click="isShowDialog=false"></i>
                    </div>
                    <div class="event-box-body">
                        <div class="event-line">
                            <div><span>*</span>时间分析任务名称</div>
                            <div class="input-group">
                                <input type="text" class="form-control" id="publicoption_eventname" placeholder="请设置导出任务名称" maxlength="15">
                            </div>
                        </div>
                        <div class="event-line">
                            <div><span>*</span>任务时间段</div>
                            <div class="input-group">
                                <input type="date" id="publicoption_eventstarttime" class="form-control">
                                <input type="date" id="publicoption_eventendtime" class="form-control">
                            </div>
                        </div>
                        <div class="event-line">
                            <div><span>*</span>事件涉及词</div>
                            <div class="input-group">
                                <textarea class="form-control"  id="publicoption_eventkeywords" name="keywords" rows="5" cols="33" placeholder="关键词之间请用以下“+”、“|”、“（”、“）” 隔开“=”"></textarea>
                            </div>
                        </div>
                        <div class="event-line">
                            <div><span>*</span>事件屏蔽词</div>
                            <div class="input-group">
                                <textarea class="form-control" name="keywords" id="publicoption_eventstopwords" cols="" rows="4" placeholder="屏蔽词之间请用以下“+”、“|”、“（”、“）” 隔开“=”"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer no-border">
                        <button type="button" class="btn btn-info" id="confirm" @click="addEventAnalyse"> 确定</button>
                        <button type="button" class="btn btn-secondary" id="cancel" @click="isShowDialog=false">取消</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import { RouterView } from 'vue-router';
import Aside from '../../components/Aside'
import TaskList from './components/TaskList.vue';
export default {
    name: 'EventAnalyse',
    components: { Aside, TaskList, RouterView },
    computed: {
        ...mapState(["isUnFoldLeft"])
    },
    data() {
        return {
            addButtonName: "创建事件分析",
            funcList: [
                {
                    name: "任务列表",
                    component: "tasklist",
                    isActive: "true"
                },
            ],
            componentName: '',
            isShowDialog:false
        };
    },
    mounted() {
        this.$router.push({name:"tasklist"})
    },

    methods: {
        receiveComName(name) {
            this.$router.push({name})
            console.log('接收到参数', name);
        },
        receiveDialogState(state) {
            this.isShowDialog = state
        },
        // 添加事件分析
        addEventAnalyse() {
            this.isShowDialog=false
        }
    },
};
</script>

<style lang="scss" scoped>

</style>