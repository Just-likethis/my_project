// 管理msite功能模块相关数据的vuex模块
import {
  RECEIVE_KEYWORD,
  RECEIVE_HOTKEYWORD
} from '../mutations-type'
import { reqKeyword,reqhotkeyword } from '../../api'
const state = {
  value:'',
  rotkey:''
}
const mutations = {
  [RECEIVE_KEYWORD](state, {value}) {
    state.value = value
  },
  [RECEIVE_HOTKEYWORD](state,{rotkey}) {
    state.rotkey=rotkey
  }
}
const getters = {}
const actions = {
  async getKeyword({commit}, val,cb) {
    const result = await reqKeyword(val)
    const value = result.data
    commit(RECEIVE_KEYWORD, {value})
    typeof cb === 'function' && cb()
  },


  async gethotkeyword({commit},cb){
    const result = await reqhotkeyword()
    const rotkey = result.data
    commit(RECEIVE_HOTKEYWORD, {rotkey})
    typeof cb === 'function' && cb()

  }
}

export default {
  state,
  mutations,
  getters,
  actions
}