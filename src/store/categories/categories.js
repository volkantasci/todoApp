import getters from '@/store/categories/getters'
import mutations from '@/store/categories/mutations'
import actions from '@/store/categories/actions'

export default {
  namespaced: true,
  state: {
    categories: []
  },
  getters,
  mutations,
  actions
}
