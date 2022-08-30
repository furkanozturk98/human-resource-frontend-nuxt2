<template>
  <div class="card m-3">
    <div class="card-body">
      <div class="float-end mb-3">
        <NuxtLink
          class="btn btn-secondary"
          to="/companies"
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
            <label class="col-form-label col-md-3">Logo</label>
            <div class="col-md-9">
              <input
                type="file"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('logo')}"
                v-on:change="uploadFile"
                accept="image/png,jpg,jpeg"
              >
              <div class="invalid-feedback">
                {{ form.errors.first('logo') }}
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-form-label col-md-3 required">Name</label>
            <div class="col-md-9">
              <input
                v-model="form.name"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('name')}"
              >
              <div class="invalid-feedback">
                {{ form.errors.first('name') }}
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-form-label col-md-3">Address</label>
            <div class="col-md-9">
              <input
                v-model="form.address"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('address')}"
              >
              <div class="invalid-feedback">
                {{ form.errors.first('address') }}
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
            <label class="col-form-label col-md-3">Email</label>
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
            <label class="col-form-label col-md-3">Website</label>
            <div class="col-md-9">
              <input
                v-model="form.website"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('website')}"
              >
              <div class="invalid-feedback">
                {{ form.errors.first('website') }}
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
  name: "CompanyCreate",

  data: ({$axios}) => ({
    form: new Form({
      logo: '',
      name: '',
      address: '',
      phone: '',
      email: '',
      website: ''
    }, {
      resetOnSuccess: false,
      http: $axios
    })
  }),

  methods: {
    async submit () {
      await this.$store.dispatch('companies/store', this)
    },

    async uploadFile (event) {
      this.form.logo = event.target.files[0];
    }
  }
}
</script>
