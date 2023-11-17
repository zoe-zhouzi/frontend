<template>
    <div>
      <div class="page-wrapper" style="display: block;">
        <div class="right-part right-content">
          <div class="page-breadcrumb">
            <div class="row">
              <div class="col-lg-5 align-self-center">
                <div class="d-flex align-items-center">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">事件分析</li>
                      <li class="breadcrumb-item">报告详情</li> 
                    </ol>
                  </nav>
                </div>
              </div>
              <div class="col-lg-7 align-self-center">
                <div class="d-flex no-block justify-content-end align-items-center data-number-min">
                  <button class="btn btn-outline-secondary btn-sm bnone" type="button" id="goback">
                    <i class="mdi mdi-redo-variant"></i>返回
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div style="padding:20px;">
            <div class="card">
              <div class="card-body">
                <ul class="eventAnalysisUl">
                  <li>
                    <div class="ev-analysis-detail-title">巴以冲突</div>
                  </li>
                  <li>
                    <!-- 溯源分析 -->
                    <div class="ev-analysis-detail-abstract">
                      <span>溯源分析</span>
                    </div>
                    <div class="ev-analysis-detail-abs-con">
                        本报告围绕关键词“巴以+巴以冲突+巴以战争+以色列+巴勒斯坦”，对2023-10-10 00:00:00~2023-11-05 23:59:59期间，互联网上采集到的
                        <span id="total">20113</span>
                        条信息进行了深入分析。全网声量最高峰出现在
                        <span id="highest">2023-10-16</span>
                        ，共产生
                        <span id="highest_total">1066</span>
                        篇相关讯息；事件源头于
                        <span id="fa_publish_time"></span>
                        分发布在
                        <span id="fa_source_name">北京周报</span>
                        上，题名为『
                        <span id="fa_title">联合国秘书长呼吁打破巴以恶性循环（组图）</span>
                        』。后续报道主要来源于
                        <span id="source_ranking">东方号,手机新浪网,微博,中国新闻网,网易号,搜狐号,华人号,微信公众号</span>
                        等几大站点。总体来说，整个事件的发展趋势较为
                        <span id="trend">平缓</span>
                        ，详细报告如下。
                    </div>
                  </li>
                  <li>
                    <!-- 事件走势 -->
                    <div class="ev-analysis-detail-abstract">
                      <span>事件脉络</span>
                    </div>
                    <div class="ev-ana-timeline" id="timeline">
                      <div class="ev-analysis-detail-trend-con">
                        <div class="ev-trend-start ev-trend-con">
                          <span id="start_date">{{ startTime }}</span>
                        </div>
                      </div>
                      <div v-for="item,index in timeline" :key="index" class="ev-analysis-detail-trend-con">
                        <div class="ev-trend-con">
                          <div class="contenteditable">
                            [
                            <span id="publish_time1">{{ item.pub_time }}</span>
                            ]【
                            <span id="title1">{{ item.title }}</span>
                            】
                            <span id="contenta1">{{ item.content }}</span>
                            影响力：
                            <span id="heat1">c{{ item.heat }}</span>
                          </div>

                        </div>
                      </div>
                      <div class="ev-analysis-detail-trend-con">
                        <div class="ev-trend-start ev-trend-con">
                          <span>结束</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="ev-analysis-detail-abstract">
                      <span>事件追踪</span>
                    </div>
                    <div class="event-card-box m-b-20">
                      <div class="event-card-box-title">数据来源情感占比分析</div>
                      <div class="event-card-box-content">
                        <!-- echart条形图 -->
                        <source-emotion-graph></source-emotion-graph>
                      </div>
                    </div>
                  </li>
                  <li>
                    <!-- 网站统计 -->
                    <div class="ev-analysis-detail-abstract">
                      <span>统计</span>
                    </div>
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="event-card-box">
                          <div class="event-card-box-title">来源网站排名列表</div>
                          <div class="event-top">
                            <ul>
                              <li v-for="item,index in sourceRankTop10" :key="index">
                                <span id="sm_name0">{{ item.name }}</span>
                                <span id="sm_num0">{{ item.num }}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="event-card-box">
                          <div class="event-card-box-title">微博账号排名</div>
                          <div class="event-top">
                            <ul>
                              <li v-for="item,index in wbUserRankTop10" :key="index">
                                <span id="weibo_name0">{{ item.name }}</span>
                                <span id="weibo_num0">{{ item.num }}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="page-footer">
            <span id="currentyear"></span>
          </div>
        </div>
    </div>
    </div>
</template>

<script>
import SourceEmotionGraph from './SourceEmotionGraph.vue';
export default {
    name: 'EventDetail',
    components: {SourceEmotionGraph},
    data() {
        return {
            startTime: "2023年-10月-10日",
            timeline: [
                {
                pub_time: "2023年-10月-10日",
                title: "中国政府中东问题特使翟隽就巴以局势同埃及外交部巴勒斯坦事务部长助理乌萨玛通电话",
                content: "",
                heat: "10"
                },
                {
                pub_time: "2023年-10月-10日",
                title: "中国政府中东问题特使翟隽就巴以局势同埃及外交部巴勒斯坦事务部长助理乌萨玛通电话",
                content: "",
                heat: "10"
                },
                {
                pub_time: "2023年-10月-10日",
                title: "中国政府中东问题特使翟隽就巴以局势同埃及外交部巴勒斯坦事务部长助理乌萨玛通电话",
                content: "",
                heat: "10"
                },
                {
                pub_time: "2023年-10月-10日",
                title: "中国政府中东问题特使翟隽就巴以局势同埃及外交部巴勒斯坦事务部长助理乌萨玛通电话",
                content: "",
                heat: "10"
                },
                {
                pub_time: "2023年-10月-10日",
                title: "中国政府中东问题特使翟隽就巴以局势同埃及外交部巴勒斯坦事务部长助理乌萨玛通电话",
                content: "",
                heat: "10"
                },
                {
                pub_time: "2023年-10月-10日",
                title: "中国政府中东问题特使翟隽就巴以局势同埃及外交部巴勒斯坦事务部长助理乌萨玛通电话",
                content: "",
                heat: "10"
                }
            ],
            sourceRankTop10: [
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
            ],
            wbUserRankTop10: [
            {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
                {
                name: "东方号",
                num: 4242,
                },
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>