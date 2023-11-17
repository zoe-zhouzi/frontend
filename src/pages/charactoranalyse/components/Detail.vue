<template>
    <div id="detail">
        <div class="wordgraph">
            <h1>词云图</h1>
            <WordGraph></WordGraph>
        </div>
    </div>
</template>

<script>
import WordGraph from './WordGraph'
export default {
    name: 'Detail',
    components: {WordGraph},
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
#detail {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid balck;
    padding: 50px 20px;
    /* background-color: yellowgreen; */
}
.wordgraph {
    box-sizing: border-box;
    background-color: #fff;
    padding: 20px;
}
</style>