<template>
  <div class="container-fluid">
    <h2 class="mb-4">
      <span>Categorias</span>
      <router-link
        class="btn btn-primary ms-5"
        :to="{ name: 'adminCategoriaAdd' }"
        >Nueva</router-link
      >
    </h2>

    <table class="table table-striped">
      <thead>
        <tr class="d-flex">
          <th class="col">Id</th>
          <th class="col-2">Nombre</th>
          <th class="col-6">Descripción</th>
          <th class="col">Estado</th>
          <th class="col">Modificado</th>
          <th class="col">Acciones</th>
        </tr>
      </thead>

      <tbody>
        <!-- Loop -->
        <tr v-for="record in list" :key="record.id" :id="'cat-'+record.id" class="d-flex">
          <th class="col">{{ record.id }}</th>
          <td class="col-2">{{ record.nombre }}</td>
          <td class="col-6">{{ record.descripcion }}</td>
          <td class="col text-success" v-if="record.estado === 1">Activo</td>
          <td class="col text-danger" v-else>Inactivo</td>
          <td class="col">{{ record.updatedAt | formatDate }}</td>
          <td class="col">
            <router-link
              :to="{
                name: 'adminCategoriaDetails',
                params: { id: record.id },
              }"
              class="btn btn-sm btn-primary"
            >
              Editar
            </router-link>
          </td>
        </tr>
        <!-- End Loop -->
      </tbody>
    </table>
  </div>
</template>

<script>
import swal from 'sweetalert';
export default {
  data() {
    return {
      list: Object,
    };
  },

  methods: {
    async getList() {
      try {
        let response = await this.$http.get("/api/categoria/list");
        this.list = response.data;
      } catch (e) {
        console.error(e);
      }
    }
  },

  mounted() {
    this.getList();
  },
}
</script>

<style scoped>
</style>