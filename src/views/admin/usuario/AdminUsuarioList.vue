<template>
  <div class="container-fluid">
    <h2 class="mb-4">
      <span>Usuario</span>
      <router-link
        class="btn btn-primary ms-5"
        :to="{ name: 'adminUsuarioAdd' }"
        >Nuevo</router-link
      >
    </h2>

    <table class="table table-striped">
      <thead>
        <tr class="d-flex">
          <th class="col">Id</th>
          <th class="col">Nombre</th>
          <th class="col-3">Email</th>
          <th class="col">Rol</th>
          <th class="col">Estado</th>
          <th class="col-2">Modificado</th>
          <th class="col">Acciones</th>
        </tr>
      </thead>

      <tbody>
        <!-- Loop -->
        <tr v-for="record in list" :key="record.id" :id="'cat-'+record.id" class="d-flex">
          <th class="col">{{ record.id }}</th>
          <td class="col">{{ record.nombre }}</td>
          <td class="col-3">{{ record.email }}</td>
          <td class="col">{{ record.rol }}</td>
          <td class="col text-success" v-if="record.estado === 1">Activo</td>
          <td class="col text-danger" v-else>Inactivo</td>
          <td class="col-2">{{ record.updatedAt | formatDate }}</td>
          <td class="col">
            <router-link
              :to="{
                name: 'adminUsuarioDetails',
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
export default {
  data: function() {
    return {
      list: Object,
    };
  },

  methods: {
    getList: async function() {
      try {
        let response = await this.$http.get("/api/usuario/list");
        this.list = response.data;
      } catch (e) {
        console.error(e);
      }
    }
  },

  mounted: function() {
    this.getList();
  },
}
</script>

<style scoped>
</style>