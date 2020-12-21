<template>
  <div id="admin">
    <!-- Header -->
    <header class="sticky-top">
      <div class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/admin">
            Dashboard
          </router-link>

          <button class="btn btn-outline-light" @click.prevent="logOut">Cerrar Sesión</button>
        </div>
      </div>
    </header>

    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar -->
        <aside class="col bg-light pt-3">
          <ul class="nav flex-column">
            <!-- Link 1 -->
            <li class="nav-item">
              <router-link
                class="nav-link d-flex align-items-center"
                to="/admin"
              >
                <img class="me-2" src="https://img.icons8.com/material-outlined/16/0d6efd/home--v2.png"/>
                Inicio
              </router-link>
            </li>

            <!-- Link 2 -->
            <li class="nav-item">
              <router-link
                class="nav-link d-flex align-items-center"
                :to="{ name: 'adminCategoriaList' }"
              >
                <img class="me-2" src="https://img.icons8.com/material-outlined/16/0d6efd/tags.png"/>
                Categorias
              </router-link>
            </li>

            <!-- Link 3 -->
            <li class="nav-item">
              <router-link
                class="nav-link d-flex align-items-center"
                :to="{ name: 'adminArticuloList' }"
              >
                <img class="me-2" src="https://img.icons8.com/material-outlined/16/0d6efd/news.png"/>
                Artículos
              </router-link>
            </li>

            <!-- Link 4 -->
            <li class="nav-item">
              <router-link
                class="nav-link d-flex align-items-center"
                :to="{ name: 'adminUsuarioList' }"
              >
                <img class="me-2" src="https://img.icons8.com/material-outlined/16/0d6efd/user--v1.png"/>
                Usuarios
              </router-link>
            </li>
          </ul>
        </aside>

        <div id="main" class="col pt-3 pb-5">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logOut: function() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
aside {
  height: calc(100vh - 55.6px);
  max-width: 200px;
  position: fixed;
}
#main {
  margin-left: 200px;
}
</style>