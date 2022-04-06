import getters from '@/store/categories/getters'
import mutations from '@/store/categories/mutations'
import actions from '@/store/categories/actions'

export default {
  namespaced: true,
  state: {
    categories: [
      {
        id: 1,
        name: 'Okul'
      },
      {
        id: 2,
        name: 'Mutfak'
      },
      {
        id: 3,
        name: 'Film'
      },
      {
        id: 4,
        name: 'Sağlık'
      }
    ]
  },
  getters,
  mutations,
  actions
}
