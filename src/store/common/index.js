export default {
  namespaced: true,
  state: {
    parentCategory: {
      id: 0,
      name: 'Parent',
      commission_rate: 0,
    },
  },
  getters: {},
  mutations: {
    UPDATE_PARENT_CATEGORY(state, payload) {
      state.parentCategory.id = payload.id
      state.parentCategory.name = payload.name
      state.parentCategory.commission_rate = payload.commission_rate
    },
  },
  actions: {},
}
