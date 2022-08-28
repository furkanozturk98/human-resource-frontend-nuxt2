<template>
  <div>
    <div class="card m-3">
      <div class="card-body">
        <div>
          <a
            type="button"
            class="btn btn-secondary float-end mb-3"
            href="/employees/create"
          >
            Create
          </a>
        </div>

        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Phone</th>
            <th scope="col">Company</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "EmployeeIndex",

  // middleware: 'admin',

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
}
</script>
