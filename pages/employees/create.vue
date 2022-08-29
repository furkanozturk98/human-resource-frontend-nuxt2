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
            <label class="col-form-label col-md-3">Company</label>
            <div class="col-md-9">
<!--              <v-select-->
<!--                v-model="form.company_id"-->
<!--                label="text"-->
<!--                :class="{'is-invalid': form.errors.has('company_id')}"-->
<!--                :options="statusOptions"-->
<!--                placeholder="(Select Company)"-->
<!--                :searchable="false"-->
<!--                :reduce="option => option.value"-->
<!--                :style="[form.errors.has('company_id') ? { '&#45;&#45;vs-border-color': '#e3342f'} : { '&#45;&#45;vs-border-color': '#cdcdcd'}]"-->
<!--              />-->

              <div class="invalid-feedback">
                {{ form.errors.first('company_id') }}
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

export default {
  name: "EmployeeCreate",

  // middleware: 'admin',

  data: ({$axios}) => ({
    form: new Form({
      fist_name: '',
      last_name: '',
      email: '',
      phone: '',
      company_id: ''
    }, {
      resetOnSuccess: false,
      http: $axios
    })
  }),

  methods: {
    async submit () {
      await this.$store.dispatch('employees/store', this)
    }
  }
}
</script>
