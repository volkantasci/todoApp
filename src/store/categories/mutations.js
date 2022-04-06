export default {
  addCategory (state, payload) {
    state.categories.push(payload.category)
  },

  deleteCategory (state, payload) {
    state.categories = state.categories.filter(category => category.id !== payload.category.id)
  }
}
