<template>
  <div>
    <div class="card m-3">
      <div class="card-body">
        <div class="mb-5">
          <NuxtLink
            class="btn btn-secondary float-end mb-3"
            to="/employees/create"
          >
            Create
          </NuxtLink>
        </div>

        <table v-if="items && items.length" class="table table-hover">
          <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Phone</th>
            <th scope="col">Company</th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in items">
            <td>{{ item.first_name }}</td>
            <td>{{ item.last_name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.company_name }}</td>
            <td>
              <div class="float-end ">

              <NuxtLink
                class="btn btn-warning mb-3"
                :to="`/employees/${item.id}/edit`"
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
  name: "EmployeeIndex",

  data: () => ({

  }),

  async fetch ({ store }) {
    await store.dispatch('employees/fetchAll')
  },

  computed: {
    ...mapState({
      items: state => state.employees.items
    })
  },

  methods : {
    async destroy(id) {
        try {
          console.log(id);
          if (confirm('Are you sure ?')) {
            await this.$axios.$delete(`api/employees/${id}`)

            await this.$store.dispatch('employees/fetchAll', this);
          }

        } catch (err) {
          console.log(err);
        }
      }
  }
}
</script>
