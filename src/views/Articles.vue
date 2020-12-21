<template>
    <div class="list">
        <the-menu></the-menu>
        <div class="d-flex flex-wrap">
            <articles-list
            v-for="articulo in articulos" :key="articulo.id"
            :articulo="articulo">
            </articles-list>
        </div>
    </div>
</template>

<script>
    import TheMenu from '../components/TheMenu.vue'
    import ArticlesList from '../components/ArticlesList.vue'
export default {
  components: { 
      TheMenu, 
      ArticlesList
      },
    data() {
    return {
      articulos: []
    }
  },
  methods: {
    async getActiveArticles(){
      try {
        let res = await this.$http.get('/api/articulo/list');
        console.log(res.data);

        for (let i=0 ; i < res.data.length ; i++){   
            if (res.data[i].estado == 1) {
                console.log(res.data[i])
                this.articulos.push(res.data[i])
            }
        }
        
      } catch (error) {
        console.log(error.res)
      }
    },
  },
  created(){
  this.getActiveArticles();
  },
}
</script>