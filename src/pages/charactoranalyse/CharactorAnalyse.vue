<template>
    <div id="main">
        <Aside v-show="isUnFoldLeft" :buttonName="addButtonName" :funcList="funcList"></Aside>
        <div id="right-contain" :class="{ml190:isUnFoldLeft}">
            <Detail></Detail>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Aside from '../../components/Aside'
import Detail from './components/Detail'
export default {
    name: 'CharactorAnalyse',
    components: { Aside, Detail},
    computed: {
        ...mapState(["isUnFoldLeft"])
    },
    data() {
        return {
            addButtonName: "创建人物分析",
            funcList: [
                {
                    name: "词云图",
                    component: "wordgraph",
                    isActive: "true"
                },
            ],
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