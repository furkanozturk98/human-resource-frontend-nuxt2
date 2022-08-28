export const state = () => ({
  items: [],
  item: null,
})

export const getters = {
  typeOptions: state => state.typeOptions,
  getType: state => type => state.typeOptions.find(item => item.value === type).text
}

export const mutations = {
  SET_ITEMS (state, items) {
    state.items = items
  },

  SET_ITEM (state, item) {
    state.item = item
  }
}

export const actions = {
  async fetchAll ({ commit }) {
    const response = await this.$axios.$get('employees');

    commit('SET_ITEMS', response.data);
  },

  async fetch ({ commit }, id) {
    const response = await this.$axios.$get(`employees/${id}`);

    commit('SET_ITEM', response.data);
  },

  async store (context, vm) {
    try {
      await vm.form.post('/employees');

      await vm.$router.push('/employees');
    } catch (err) {
      if (err.response.status === 422) {
        console.log(err);
      }
    }
  },

  async update (context, vm) {
    try {
      await vm.form.put(`/employees/${vm.id}`);

      await vm.$router.push('/employees');
    } catch (err) {
      if (err.response.status !== 422) {
        console.log(err);
      }
    }
  }
}
