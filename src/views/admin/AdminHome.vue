<template>
  <div class="container-fluid">
    <h2>Hola {{ user.nombre }}</h2>
    <h4 class="text-secondary">Su rol es {{user.rol}}</h4>
    <p>
      Bienvenido al área de administración. Desde aquí podra modificar las
      diferentes secciones de la página púbica.
    </p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      user: {},
    };
  },

  methods: {
    getUser() {
      let user = localStorage.getItem("user");
      let token = localStorage.getItem("jwt");
      if (token) {
        this.user = JSON.parse(user);
      }
    },
  },

  created() {
    this.getUser();
  },
};
</script>

<style scoped>
h2 {
  text-transform: capitalize;
}
</style>