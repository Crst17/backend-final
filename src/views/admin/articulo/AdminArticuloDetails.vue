<template>
  <div class="container-fluid">
    <h2 class="mb-4">Editar articulo id #{{ record.id }}</h2>

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

        <button
          v-if="!record.estado"
          class="btn btn-outline-primary ms-3"
          @click.prevent="toggleActivate"
        >
          Activar
        </button>

        <button
          v-else
          class="btn btn-outline-primary ms-3"
          @click.prevent="toggleActivate"
        >
          Desactivar
        </button>

        <button
          class="btn btn-outline-danger ms-3"
          @click.prevent="remove(record.id, record.nombre)"
        >
          Eliminar
        </button>

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
        categoriaId: '',
        descripcion: '',
        estado: '',
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
    async getRecord() {
      try {
        let id = this.$route.params.id;
        let response = await this.$http.get(`/api/articulo/query/${id}`);
        this.record = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    save: async function() {
      try {
        let response = await this.$http.put("/api/articulo/update", {
          id: this.record.id,
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
        this.record = response.data;
      } catch (error) {
        swal("Algo ha salido mal", error, "error");
      }
    },

    async toggleActivate() {
      try {
        let url = !this.record.estado ? "activate" : "deactivate";
        let response = await this.$http.put(`/api/articulo/${url}`, {
          id: this.record.id,
        });
        swal(
          "El item ha sido actualizado",
          "Este item ha sido actualizdo con éxito.",
          "success"
        );
        this.record = response.data;
      } catch (error) {
        swal("Algo ha salido mal", error, "error");
      }
    },

    remove() {
      swal({
        title: `¿Desea eliminar ${this.record.nombre}?`,
        text: "Esta acción no prodrá ser revertida.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDetele) => {
          if (willDetele) {
            this.$http
              .delete("/api/articulo/remove", { data: { id: this.record.id } })
              .then((res) => {
                swal(
                  "El item ha sido actualizado",
                  "Este item ha sido actualizdo con éxito.",
                  "success"
                );
                this.$router.push({ name: "adminArticuloList" });
              });
          }
        })
        .catch((e) => {
          swal("Algo ha salido mal", error, "error");
        });
    },
  },

  mounted: function() {
    this.getRecord();
  },
};
</script>

<style>
</style>