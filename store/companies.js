export const state = () => ({
  items: [],
  item: null,
  list: []
})

export const mutations = {
  SET_ITEMS (state, items) {
    state.items = items
  },

  SET_ITEM (state, item) {
    state.item = item
  },

  SET_LIST (state, item) {
    state.list = item
  }
}

export const actions = {
  async fetchAll ({ commit }) {
    const response = await this.$axios.$get('api/companies');

    commit('SET_ITEMS', response.data);
  },

  async fetch ({ commit }, id) {
    const response = await this.$axios.$get(`api/companies/${id}`);

    commit('SET_ITEM', response.data);
  },

  async list ({ commit }) {
    const response = await this.$axios.$get('api/companies/list');

    commit('SET_LIST', response.data);
  },

  async store (context, vm) {
    try {
      await vm.form.post('/api/companies');

      await vm.$router.push('/api/companies');
    } catch (err) {
      if (err.response.status === 422) {
        console.log(err);
      }
    }
  },

  async update (context, vm) {
    try {
      await vm.form.put(`/api/companies/${vm.id}`);

      await vm.$router.push('/api/companies');
    } catch (err) {
      if (err.response.status !== 422) {
        console.log(err);
      }
    }
  }
}
