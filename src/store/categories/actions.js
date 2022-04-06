export default {
  addCategory (context, payload) {
    context.commit('addCategory', payload)
  },

  delCategory (context, payload) {
    context.commit('deleteCategory', payload)
  }
}
