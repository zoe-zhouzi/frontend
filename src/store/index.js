import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    isUnFoldLeft: true, 
    curBreadCrumbs: []
}
const getters = {}
const actions = {
    changeUnfoldState({commit}) {
        commit("CHANGE_UNFOLD_STATE")
    },
    // getCurBreadCrumbs({commit}, curBreadCrumbs) {
    //     commit("GET_CUR_BREAD_CRUMBS", curBreadCrumbs)
    // }
}
const mutations = {
    CHANGE_UNFOLD_STATE(state) {
        state.isUnFoldLeft = !state.isUnFoldLeft
    },
    // GET_CUR_BREAD_CRUMBS(state, curBreadCrumbs) {
    //     state.curBreadCrumbs = curBreadCrumbs
    // }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
