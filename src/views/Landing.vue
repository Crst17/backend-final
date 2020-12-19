<template>
  <div class="landing">

    <the-menu></the-menu>

    <h2 id="us" class="my-3">Nosotros</h2>
    <the-carousel></the-carousel>

    <h2 id="services">Servicios</h2>
    <div class="d-flex flex-row justify-content-around flex-wrap mx-3 mt-3 mb-0">
      <the-article
      name="Service Management" 
      description="El sistema Service Management es un robusto software que incorpora las funcionalidades de un ITSM y surge como el siguiente paso evolutivo de un Service Desk."  
      image="Articulo1.jpg"
      option="1">
      </the-article>

      <the-article 
      name="Aplicativo PQRS" 
      description="Aplicativo para la gestión inteligente de Peticiones, Quejas, Reclamos y Solicitudes PQRS; diseñado para lograr atender con oportunidad y calidad las solicitudes ingresadas por diferentes canales, mantener trazabilidad e identificar puntos débiles para una toma de decisiones asertiva."  
      image="Articulo2.jpg"
      option="2">
      </the-article> 

      <the-article
      name="ChatBot" 
      description="Robots desarrollados dentro de una aplicación de mensajes con el principio de automatizar la comunicación."  
      image="Articulo3.jpg"
      option="3">
      </the-article>
    </div>

    <h2 id="stories">Casos de éxito !</h2>
    
    <div>
      <the-story
      name="Julio Nel"
      imagen="Articulo3.jpg"
      date="Marzo 2020"
      story="Proin aliquam turpis nec mi ultricies, eget gravida diam elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur bibendum lectus sit amet ornare aliquam. Donec pharetra augue tellus, eu varius mi tincidunt quis. In hac habitasse platea dictumst. Nullam eget ipsum ligula. Nunc at gravida mi. Praesent maximus ultricies lacus vitae tristique.">
      </the-story>
    </div>
    <div>
      <the-story
      name="Oscar"
      imagen="Articulo3.jpg"
      date="Marzo 2020"
      story="Proin aliquam turpis nec mi ultricies, eget gravida diam elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur bibendum lectus sit amet ornare aliquam. Donec pharetra augue tellus, eu varius mi tincidunt quis. In hac habitasse platea dictumst. Nullam eget ipsum ligula. Nunc at gravida mi. Praesent maximus ultricies lacus vitae tristique.">
      </the-story>
    </div>
    <div>
      <the-story
      name="William"
      imagen="Articulo3.jpg"
      date="Marzo 2020"
      story="Proin aliquam turpis nec mi ultricies, eget gravida diam elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur bibendum lectus sit amet ornare aliquam. Donec pharetra augue tellus, eu varius mi tincidunt quis. In hac habitasse platea dictumst. Nullam eget ipsum ligula. Nunc at gravida mi. Praesent maximus ultricies lacus vitae tristique.">
      </the-story>
    </div>
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
  }
}
</script>

<style>

body {
  --width: 90%;
  --bg-color: #212529;
  background: lightgray;
  border-right: solid var(--bg-color) 2px;
  border-left: solid var(--bg-color) 2px;
  margin: 0 auto;
  width: var(--width);
  padding-top: 70px;
}
p {
  margin: 0px;
}
h2{
  text-align: center;
}

</style>
