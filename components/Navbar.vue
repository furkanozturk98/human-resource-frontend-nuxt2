<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Human Resource Managament System</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Employees</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Companies</a>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a class="float-end nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <button class="dropdown-item" @click="logout">
                  Log Out
                </button>
              </div>
            </li>
          </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>
