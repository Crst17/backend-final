<template>
  <div class="container-fluid">
    <h2 class="mb-4">Nuevo Artículo{{ record.id }}</h2>

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
        <label for="categoriaId">Categoría:</label>
        <input
          type="number"
          name="categoriaId"
          id="categoriaId"
          class="form-control shadow-sm"
          v-model="record.categoriaId"
        />
      </div>

      <div class="mb-4">
        <label for="descripcion">Descripción:</label>
        <textarea
          name="descripcion"
          id="descripcion"
          rows="5"
          class="form-control shadow-sm"
          v-model="record.descripcion"
        ></textarea>
      </div>

      <div class="mb-4 d-flex">
        <div class="col-10">
          <label for="imagen">Imagen:</label>
          <input
            type="text"
            name="imagen"
            id="imagen"
            class="form-control shadow-sm"
            v-model="record.imagen"
          />
        </div>

        <div class="col-2">
          <img v-bind:src="imagen" alt="Imagen" class="img-fluid p-3 m-3 shadow-sm">
        </div>
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
          :to="{ name: 'adminArticuloList' }"
        >
          Cancelar
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  data: function() {
    return {
      record: {
        id: '',
        nombre: '',
        categoriaId: 1,
        descripcion: '',
        estado: 0,
        imagen: ''
      },
    };
  },

  computed: {
    imagen: function() {
      if (this.record.imagen) {
        return this.record.imagen
      }
      else {
        return 'https://via.placeholder.com/800'
      }
    }
  },

  methods: {
    save: async function() {
      try {
        let res = await this.$http.post("/api/articulo/add", {
          nombre: this.record.nombre,
          categoriaId: this.record.categoriaId,
          descripcion: this.record.descripcion,
          imagen: this.record.imagen
        });
        swal(
          "El item ha sido actualizado",
          "Este item ha sido actualizdo con éxito.",
          "success"
        );
        this.record = res.data
        this.$router.push({name: 'adminArticuloDetails', params:{id:this.record.id}});
      } catch (error) {
        swal("Algo ha salido mal", error.message, "error");
      }
    }
  }
};
</script>

<style>
</style>