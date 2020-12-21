<template>
  <div class="landing">
    <!-- Nav -->
    <the-menu></the-menu>

    <!-- Nosotros -->

    <h2 id="us" class="my-3">Nosotros</h2>
    <the-carousel></the-carousel>
    <div class="col-10 d-flex mx-auto mb-3">
      <div class="col-3 mx-auto">
        <p>Somos una compañía desarrolladora de software y herramientas digitales enfocadas a promover la comunicación asertiva entre las empresas y sus clientes, optimizando el proceso de atención a usuarios por medio de soluciones tecnológicas completas o parciales para cada empresa.</p>
      </div>
      <div class="col-3 mx-auto">
        <p>
          Nuestra misión es apoyar la consolidación de una relación cercana entre las compañías y sus clientes a través de diferentes canales de comunicación y una atención oportuna a sus quejas, reclamos y necesidades.
        </p>
      </div>
      <div class="col-3 mx-auto">
        <p>
          Nuestras soluciones se caracterizan por su alta calidad y efectividad en el cumplimiento de su propósito, gracias a las excelentes capacidades de nuestro equipo de desarrollo quienes se enfocan en comprender las necesidades y requisitos particulares de cada situación.
        </p>
      </div>
    </div>

    <!-- Servicios -->
    <h2 id="services">Servicios</h2>
    <div class="d-flex flex-row justify-content-around flex-wrap mx-3 mt-3 mb-0">
      <the-article
      v-for="articulo in articulos" :key="articulo.id"
      :articulo="articulo">
      </the-article>
    </div>
    <button type="button" class="btn a btn-dark d-flex mx-auto mt-2 mb-4"
    @click="pushArticles">
    <p>CONSULTA AQUI<br>NUESTROS SERVICIOS</p>
    </button>
    <h2 id="stories">Casos de éxito !</h2>

    <!-- Testimonios -->
    <div>
      <div>
        <the-story
        name="Julio Nel"
        imagen="Articulo3.jpg"
        story="Proin aliquam turpis nec mi ultricies, eget gravida diam elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur bibendum lectus sit amet ornare aliquam. Donec pharetra augue tellus, eu varius mi tincidunt quis. In hac habitasse platea dictumst. Nullam eget ipsum ligula. Nunc at gravida mi. Praesent maximus ultricies lacus vitae tristique.">
        </the-story>
      </div>
      <div>
        <the-story
        name="Oscar"
        imagen="Articulo3.jpg"
        story="Proin aliquam turpis nec mi ultricies, eget gravida diam elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur bibendum lectus sit amet ornare aliquam. Donec pharetra augue tellus, eu varius mi tincidunt quis. In hac habitasse platea dictumst. Nullam eget ipsum ligula. Nunc at gravida mi. Praesent maximus ultricies lacus vitae tristique.">
        </the-story>
      </div>
      <div>
        <the-story
        name="William"
        imagen="Articulo3.jpg"
        story="Proin aliquam turpis nec mi ultricies, eget gravida diam elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur bibendum lectus sit amet ornare aliquam. Donec pharetra augue tellus, eu varius mi tincidunt quis. In hac habitasse platea dictumst. Nullam eget ipsum ligula. Nunc at gravida mi. Praesent maximus ultricies lacus vitae tristique.">
        </the-story>
      </div>
    </div>

    <!-- Footer -->
    <the-footer></the-footer>
  </div>
</template>

<script>

import TheCarousel from '../components/TheCarousel.vue'
import TheMenu from '../components/TheMenu.vue'
import TheArticle from '../components/TheArticle.vue'
import TheStory from '../components/TheStory.vue'
import TheFooter from '../components/TheFooter.vue'

// @ is an alias to /src

export default {
  name: 'Landing',
  components: {
    TheMenu,
    TheCarousel,
    TheArticle,
    TheStory,
    TheFooter
  },
  data(){
    return {
      articulos: null,
    }
  },
  methods: {
    async getArticles(){
      try {
        let res = await this.$http.get('/api/articulo/list');
        console.log(res.data);
        this.articulos = res.data.slice(0,3)
      } catch (error) {
        console.log(error.res)
      }
    },
    pushArticles(){
      this.$router.push('/Articles');
    }

  },
  created(){
  this.getArticles();
  },
}
</script>

<style>
body {
  --bg-color: #212529;
  background: lightgray;
  margin: 0 auto;
  padding-top: 70px;
}
p {
  margin: 0px;
  margin: 0 auto;
}
h2{
  text-align: center;
}
.a{
  height: 80px;
  width: 300px;
}


</style>
