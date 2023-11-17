<template>
    <div>
        <!-- 面包屑 -->
        <div style="box-sizing:border-box;padding:50px 20px;">
            <div class="card">
                <div class="card-body p-0">
                    <div class="b-b" style="padding: 15px;">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="project-group">
                                <strong>共有</strong>
                                <span class="label label-info" id="totalnum">2</span>
                                <span>个分析任务</span>
                            </div>
                            <div class="input-group " style="width: 500px;">
                                <input type="text" class="form-control" placeholder="输入方案名称..." aria-label="" aria-describedby="basic-addon1" id="namesearch">
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive" id="eventAnalysislist">
                        <div class="event-analysisList-title publicoption-list-box">
                            <div class="publicoption-cnb">
                                <div class="custom-control custom-checkbox pro-selectall" style="display: inline-block;">
                                    <input type="checkbox" class="custom-control-input sl-all" id="cstall"> 
                                    <label class="custom-control-label" for="cstall"></label>
                                </div>
                            </div>
                            <div>事件名称</div>
                            <div>事件关键词</div>
                            <div>任务时间段</div>
                            <div>创建时间</div>
                            <div>状态</div>
                            <div>操作</div>
                        </div>
                        <div v-for="event,index in eventList" :key="event.eventId" class="table-hover event-analysisList-content publicoption-list-box"> 
                            <div class="publicoption-chb">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" value="140" class="custom-control-input" id="cst1">
                                    <label class="custom-control-label" for="cst1"></label>
                                </div></div>
                                <div class="text-over" title="核废水">{{ event.eventName }}</div>
                                <div>核废水｜核污染水</div> 
                                <div class="text-over">{{ event.period && event.period.start }} - {{ event.period && event.period.end }}</div>
                                <div class="text-over">{{ event.createTime }}</div>
                                <div><i class="mdi mdi-check-circle-outline zx"></i>{{ event.state }}</div>
                                <div><i class="mdi mdi-eye-outline" title="查看" @click="goEventDtail(event.eventId)" id="exportthis">
                                </i> <i class="fas fa-pencil-alt" title="修改" @click="editEvent(event.eventId)" id="editpublicoption">
                                </i><i class="fas fa-trash-alt" title="删除" @click="deletedata(event.eventId)" id="deletepublicoption"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TaskList',

    data() {
        return {
            eventList: [
                {
                    eventId: "1001",
                    eventName: "核废水",
                    keywords: "核废水｜核污染水",
                    period: {
                        start: "2023-07-09 00:00",
                        end: "2023-11-02 23:59"
                    },
                    createTime: "2023-11-09 19:58",
                    state: "生成成功"
                },
                {
                    eventId: "1002",
                    eventName: "核废水",
                    keywords: "核废水｜核污染水",
                    period: {
                        start: "2023-07-09 00:00",
                        end: "2023-11-02 23:59"
                    },
                    createTime: "2023-11-09 19:58",
                    state: "生成成功"
                },
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        goEventDtail(eventId) {
            console.log("!!!!",eventId);
            this.$router.push({
                name: "eventdetail", 
                params:{
                    eventid:eventId
                }
            })
        },
        editEvent(eventId) {},
        deletedata(eventId) {},
    },
};
</script>

<style lang="scss" scoped>

</style>