<template>
  <div class="home">
    <div class="navbar navbar-expand bg-light navbar light">
      <div class="container">

        <button type="submit" class="btn btn-secondary ml-auto" @click.prevent="logOut">
          Salir
        </button>

      </div>
    </div>

    <div class="container mt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ user.name | capitalize }}</h5>
              <p class="card-text">Email: {{user.email}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    }
  },
  methods: {
    logOut() {
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      this.$router.push('/login');
    },
    getUserDetails() {
      let user = localStorage.getItem('user');
      let token = localStorage.getItem('jwt');
      if (token) {
        this.user = JSON.parse(user);
      }
    }
  },
  created() {
    this.getUserDetails();
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>