import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import homeHeader from './modules/homeHeader'
import Search from './modules/Search'
import categoryL1List from './modules/categoryL1List'
export default new Vuex.Store({
    mutations,
    actions,
    getters,
    modules: {//vuex多模块编程
        homeHeader,
        Search,
        categoryL1List
    }
})