<template>
  <div>
    <div class="card m-3">
      <div class="card-body">
        <div class="mb-5">
          <NuxtLink
            class="btn btn-secondary float-end mb-3"
            to="/companies/create"
          >
            Create
          </NuxtLink>
        </div>

        <table v-if="items && items.length" class="table table-hover">
          <thead>
          <tr>
            <th scope="col">Logo</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in items">
            <td>{{ item.logo }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.website }}</td>
            <td>
              <div class="float-end ">

                <NuxtLink
                  class="btn btn-warning mb-3"
                  :to="`/companies/${item.id}/edit`"
                >
                  Edit
                </NuxtLink>

                <button
                  class="btn btn-danger mb-3"
                  @click="destroy(item.id)"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>

        <div v-else>
          <div class="alert alert-danger">
            No records found
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "CompanyIndex",

  async fetch ({ store }) {
    await store.dispatch('companies/fetchAll')
  },

  computed: {
    ...mapState({
      items: state => state.companies.items
    })
  },

  methods : {
    async destroy(id) {
      try {
        console.log(id);
        if (confirm('Are you sure ?')) {
          await this.$axios.$delete(`api/companies/${id}`)

          await this.$store.dispatch('companies/fetchAll', this);
        }

      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>
