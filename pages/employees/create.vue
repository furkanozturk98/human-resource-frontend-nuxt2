<template>
  <div class="card m-3">
    <div class="card-body">
      <div class="float-end mb-3">
        <NuxtLink
          class="btn btn-secondary"
          to="/employees"
        >
          Back
        </NuxtLink>

        <button class="btn btn-primary" @click="submit">
          Save
        </button>

      </div>

      <div class="row">
        <div class="col-8 mx-auto">
          <div class="mb-3 row">
            <label class="col-form-label col-md-3 required">First name</label>
            <div class="col-md-9">
              <input
                v-model="form.first_name"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('first_name')}"
              >
              <div class="invalid-feedback">
                {{ form.errors.first('first_name') }}
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-form-label col-md-3 required">Last name</label>
            <div class="col-md-9">
              <input
                v-model="form.last_name"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('last_name')}"
              >
              <div class="invalid-feedback">
                {{ form.errors.first('last_name') }}
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-form-label col-md-3 required">Email</label>
            <div class="col-md-9">
              <input
                v-model="form.email"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('email')}"
              >
              <div class="invalid-feedback">
                {{ form.errors.first('email') }}
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-form-label col-md-3">Phone</label>
            <div class="col-md-9">
              <input
                v-model="form.phone"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('phone')}"
              >
              <div class="invalid-feedback">
                {{ form.errors.first('phone') }}
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-form-label col-md-3 required">Company</label>
            <div class="col-md-9">
              <v-select
                v-model="form.company"
                label="text"
                :class="{'is-invalid': form.errors.has('company')}"
                :options="companyList"
                placeholder="(Select Company)"
                :searchable="false"
                :reduce="option => option.value"
                :style="[form.errors.has('company') ? { '--vs-border-color': '#e3342f'} : { '--vs-border-color': '#cdcdcd'}]"
              />

              <div class="invalid-feedback">
                {{ form.errors.first('company') }}
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import {Form} from 'form-backend-validation'
import {mapState} from "vuex";

export default {
  name: "EmployeeCreate",

  data: ({$axios}) => ({
    form: new Form({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      company: ''
    }, {
      resetOnSuccess: false,
      http: $axios
    })
  }),

  async fetch ({ store }) {
    await store.dispatch('companies/list')
  },

  computed: {
    ...mapState({
      companyList: state => state.companies.list
    }),
  },

  methods: {
    async submit () {
      await this.$store.dispatch('employees/store', this)
    }
  }
}
</script>
