<template>
  <div class="container-fluid">
    <h2 class="mb-4">Editar categoria id #{{ record.id }}</h2>

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
          :to="{ name: 'adminCategoriaList' }"
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
  data() {
    return {
      record: {
        id: Number,
        nombre: String,
        descripcion: String,
        estado: Number,
      },
    };
  },

  methods: {
    async getRecord() {
      try {
        let id = this.$route.params.id;
        let response = await this.$http.get(`/api/categoria/query/${id}`);
        this.record = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    async save() {
      try {
        let response = await this.$http.put("/api/categoria/update", {
          id: this.record.id,
          nombre: this.record.nombre,
          descripcion: this.record.descripcion,
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
        let response = await this.$http.put(`/api/categoria/${url}`, {
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
        text: 'Esta acción no prodrá ser revertida.',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
      .then(willDetele => {
        if (willDetele) {
          this.$http.delete('/api/categoria/remove', { data: { id: this.record.id} })
          .then(res => {
            swal(
                "El item ha sido actualizado",
                "Este item ha sido actualizdo con éxito.",
                "success"
              );
            this.$router.push({name:'adminCategoriaList'});
          })
        }
      })
      .catch(e => {
        swal("Algo ha salido mal", error, "error");
      })
    },
  },

  mounted() {
    this.getRecord();
  },
};
</script>

<style>
</style>