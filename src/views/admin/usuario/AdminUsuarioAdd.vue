<template>
  <div class="container-fluid">
    <h2 class="mb-4">Nuevo Usuario{{ record.id }}</h2>

    <form>
      <div class="mb-4">
        <label for="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          class="form-control shadow-sm"
          v-model="record.nombre"
        />
      </div>

      <div class="mb-4">
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          class="form-control shadow-sm"
          v-model="record.email"
        />
      </div>

      <div class="mb-4">
        <label for="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          id="password"
          class="form-control shadow-sm"
          v-model="record.password"
        />
      </div>

      <div class="mb-4">
        <label for="rol">Rol:</label>
        <input
          type="text"
          name="rol"
          id="rol"
          class="form-control shadow-sm"
          v-model="record.rol"
        />
      </div>

      <div class="mb-4">
        <label for="estado">Estado:</label>
        <input
          type="number"
          name="estado"
          id="estado"
          class="form-control shadow-sm"
          v-model="record.estado"
          disabled
        />
      </div>

      <div class="d-flex">
        <button class="btn btn-primary" @click.prevent="save">Guardar</button>

        <router-link
          class="btn btn-secondary ms-auto"
          :to="{ name: 'adminUsuarioList' }"
        >
          Cancelar
        </router-link>
      </div>

    </form>
  </div>
</template>

<script>
import swal from 'sweetalert';
export default {
  data() {
    return {
      record: {
        estado: 1
      }
    };
  },

  methods: {
    save: async function() {
      try {
        let response = await this.$http.post("/api/usuario/add", {
          nombre: this.record.nombre,
          password: this.record.password,
          email: this.record.email,
          rol: this.record.rol ? this.record.rol : "Vendedor",
        });
        swal(
          "El item ha sido actualizado",
          "Este item ha sido actualizdo con éxito.",
          "success"
        );
        this.record = response.data;
        this.$router.push({name: 'adminUsuarioDetails', params: {id: this.record.id}})
      } catch (error) {
        swal("Algo ha salido mal", error.message , "error");
      }
    }
  }
};
</script>

<style>
</style>