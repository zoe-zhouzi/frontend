<template>
    <div id="graph1" ref="graph1" style="width: 100%;height: 400px;"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    name: 'SourceEmotionGraph',
    components: {},
    data() {
        return {
            
        };
    },

    mounted() {
        this.$nextTick(()=>{
            this.initEcharts();
        })
    },

    methods: {
        initEcharts() {
            var chartDom = document.getElementById('graph1');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                legend: {},
                tooltip: {},
                dataset: {
                    dimensions: ['product', '2015', '2016', '2017'],
                    source: [
                    { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
                    { product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
                    { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
                    { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 }
                    ]
                },
                xAxis: { type: 'category' },
                yAxis: {},
                series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
            };

            option && myChart.setOption(option);

            //随着屏幕大小调节图表
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        }
    },
};
</script>

<style lang="scss" scoped>

</style>