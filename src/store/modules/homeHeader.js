// 管理msite功能模块相关数据的vuex模块
import {
  RECEIVE_NAVIGATION
} from '../mutations-type'
import {reqNavigation} from '../../api'
const state = {
  navigation:[]
}
const mutations = {
  [RECEIVE_NAVIGATION](state, {navigation}) {
    state.navigation = navigation
  }
}
const getters = {}
const actions = {
  async getNavigation({commit}, cb) {
    const result = await reqNavigation()
    const navigation = result.data
    commit(RECEIVE_NAVIGATION, {navigation})
    typeof cb === 'function' && cb()
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}