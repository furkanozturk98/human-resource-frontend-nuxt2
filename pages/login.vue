<template>
  <form action="" class="col-md-5 mx-auto mt-5" @submit.prevent="submit">

  <div class="card">
     <div class="card-body">

       <div v-if="error" class="alert alert-danger">
         {{ error }}
       </div>

       <div class="mb-3">
         <label for="email" class="form-label">Email address</label>

         <input
           v-model="form.email"
           type="email"
           class="form-control"
           id="email"
           :class="{ 'is-invalid': form.errors.has('email')}"
         >

         <div class="invalid-feedback">
           {{ form.errors.first('email') }}
         </div>
       </div>
       <div class="mb-3">
         <label for="password" class="form-label">Password</label>

         <input
           v-model="form.password"
           type="password"
           class="form-control"
           id="password"
           :class="{ 'is-invalid': form.errors.has('password')}"
         >

         <div class="invalid-feedback">
           {{ form.errors.first('password') }}
         </div>
       </div>

       <button type="submit" class="btn btn-primary">Login</button>
     </div>
  </div>
  </form>

</template>

<script>
import {Form} from 'form-backend-validation'

export default {
  name: "login",

  layout: 'guest',

  auth: 'guest',

  data: ({$axios}) => ({
    form: new Form({
      email: '',
      password: ''
    }, {
      resetOnSuccess: false,
      http: $axios
    }),

    error: '',
  }),

  methods: {
    async submit () {
      try {
        this.error = '';
        this.form.errors.clear();

        await this.$auth.loginWith('local', {data: this.form})
      } catch (error) {

        if (error.response) {
          if (error.response.status === 401) {
            this.error = 'These credentials do not match our records.';

            return;
          }

          if (error.response.data.errors) {
            this.form.errors.record(error.response.data.errors)
          }
        }
      }
    }
  }
}
</script>
