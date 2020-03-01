const state = {
  hideTags: false
}
const mutations = {
  SWITCH_TAGS_VIEW: state => {
    state.hideTags = flag
  }
}
const actions = {
  addCachedView({ commit }, view) {
    commit('ADD_CACHED_VIEW', view)
  },
  switchTagsview({ commit }, flag) {
    commit('SWITCH_TAGS_VIEW', flag)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
