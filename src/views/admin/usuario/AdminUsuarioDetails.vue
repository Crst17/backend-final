<template>
  <div class="container-fluid">
    <h2 class="mb-4">Editar usuario id #{{ record.id }}</h2>

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
          :to="{ name: 'adminUsuarioList' }"
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
      record: {}
    };
  },

  methods: {
    async getRecord() {
      try {
        let id = this.$route.params.id;
        let response = await this.$http.get(`/api/usuario/query/${id}`);
        this.record = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    async save() {
      try {
        let response = await this.$http.put("/api/usuario/update", {
          id: this.record.id,
          nombre: this.record.nombre,
          password: this.record.password,
          email: this.record.email,
          rol: this.record.rol,
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
        let response = await this.$http.put(`/api/usuario/${url}`, {
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
          this.$http.delete('/api/usuario/remove', { data: { id: this.record.id} })
          .then(res => {
            swal(
                "El item ha sido actualizado",
                "Este item ha sido actualizdo con éxito.",
                "success"
              );
            this.$router.push({name:'adminUsuarioList'});
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