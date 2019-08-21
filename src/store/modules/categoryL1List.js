// 管理msite功能模块相关数据的vuex模块
import {
  RECEIVE_CATEGORYL1LIST
} from '../mutations-type'
import {reqcategoryL1List} from '../../api'
const state = {
  categoryL1List:[]
}
const mutations = {
  [RECEIVE_CATEGORYL1LIST](state, {categoryL1List}) {
    state.categoryL1List = categoryL1List
  }
}
const getters = {}
const actions = {
  async getcategoryL1List({commit}, cb) {
    const result = await reqcategoryL1List()
    const categoryL1List = result.categoryL1List
    console.log(categoryL1List)
    commit(RECEIVE_CATEGORYL1LIST, {categoryL1List})
    typeof cb === 'function' && cb()
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}