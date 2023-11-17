<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Header from './components/header/Header.vue'
import Show from './components/show/Show.vue'

export default {
  name: 'App',
  components: {
    Header,Show
  },
  mounted() {
    // console.log('!!!',this.$router.currentRoute);
    // this.$store.dispatch('getCurBreadCrumbs', this.$router.currentRoute)
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
}
li {
  list-style: none;
}
#main {
    margin-top: 64px;
    position: relative;
}
#left-aside {
    width: 190px;
    height: 100%;
    background-color: rgb(65, 71, 85);
    box-sizing: border-box;
    padding-top: 10px;
    position: fixed;
    z-index: 10;
}
.minAside {
    width: 50px;
    height: 100%;
    background-color: rgb(65, 71, 85);
    box-sizing: border-box;
    padding-top: 10px;
    position: fixed;
    z-index: 10;
}
#right-contain {
    /* flex: 1; */
    /* width: 100% !important; */
    min-height: calc(100vh - 64px);
    background-color: #eef5f9;
    position: relative;
}
.ml190 {
    margin-left:190px
}
.ml50 {
    margin-left:50px
}
</style>
