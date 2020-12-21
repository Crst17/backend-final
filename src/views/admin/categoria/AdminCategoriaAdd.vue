<template>
  <div class="container-fluid">
    <h2 class="mb-4">Nueva Categoria</h2>

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
        <label for="descripcion">Descripción:</label>
        <input
          type="text"
          name="descripcion"
          id="descripcion"
          class="form-control shadow-sm"
          v-model="record.descripcion"
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
        />
      </div>

      <div class="d-flex">
        <button class="btn btn-primary" @click.prevent="save">Guardar</button>
        <router-link
          class="btn btn-secondary ms-3"
          :to="{ name: 'adminCategoria' }"
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
        nombre: '',
        descripcion: '',
        estado: '',
      },
    };
  },

  methods: {
    async save() {
      this.$http.post("/api/categoria/add", {
          nombre: this.record.nombre,
          descripcion: this.record.descripcion,
          estado: this.record.estado,
      })
      .then( reg => {
        swal("Guardado!", "Este item ha sido guardado con éxito.", "success");
        this.$router.push({name: 'adminCategoriaDetails', params: {id: reg.data.id}});
      })
      .catch(e => {
        console.error(e)
      })
    }
  }
};
</script>

<style>
</style>