<template>
<div class="service2">
    <the-menu2></the-menu2>
   <the-details
    :info="article">
    
    </the-details>
    </the-details>
    <p>
        Una herramienta clave para la evaluación constante de sus procesos y la mejora continua, permite de tener un mayor control sobre las peticiones, quejas, reclamos y solicitudes dado el rastreo y control de tiempos de respuesta que el software permite hacer a cada una de estas, de igual forma permite la integración de todas las peticiones, quejas y reclamos que ingresan por los diferentes medios de recepción, ya sea por medio del sitio web, las redes sociales, correo electrónico o las que son entregadas físicamente.
    </p>
    <h2>¿Qué etapas del proceso realiza el aplicativo?</h2>
    <p>
    El ciclo de vida de las PQRS empieza con su recepción y radicación hasta su cierre con el envío de una respuesta que resuelve la solicitud. Todos los casos, resueltos y en gestión, se encuentra dispuestos para su consulta o generación de reportes.

    </p>
    <ul>
        <li>Recepción y Radicación.</li>
        <li>Asignación.</li>
        <li>Gestión y trámite.</li>
        <li>Resolución y cierre.</li>
        <li>Reportes.</li>
    </ul>
    <h2>¿Qué beneficios trae el Aplicativo de peticiones, quejas, reclamos y solicitudes PQRS?</h2>
      <ul>
        <li>Administración de parámetros y usuarios.</li>
        <li>Múltiples canales de recepción integrados.</li>
        <li>Trazabilidad en cada etapa del proceso.</li>
        <li>Optimización de tiempos de gestión.</li>
        <li>Información oportuna sobre el estado de cada PQRS registrada.</li>
        <li>Fidelidad y buen trato a sus clientes con una plataforma intuitiva.</li>
    </ul>
     <br/>
    <span>¡COMPRA AHORA, ESTAMOS EN OFERTA!</span>
    <!--listados de precios-->
     <div class="d-flex flex-row justify-content-around flex-wrap mx-3 mt-3 mb-0">
      <the-pricing
      name="Service Management" 
      description="Soporte 24/7"  
      priceA="129.99"
      priceB="79.99">
      </the-pricing>

      <the-pricing 
      name="Aplicativo PQRS" 
      description="Soporte 24/7"  
      priceA="99.99"
      priceB="59.99">
      </the-pricing> 

      <the-pricing
      name="ChatBot" 
      description="Soporte 24/7" 
     priceA="109.99"
     priceB="69.99">
      </the-pricing>
    </div>
    <br/><br/>
    <the-footer></the-footer>
</div>
</template>
<script>
import TheMenu2 from '../../components/TheMenu2.vue'
import TheDetails from '../../components/TheDetails.vue'
import ThePricing from '../../components/ThePricing.vue'
import TheFooter from '../../components/TheFooter.vue'
export default{
     name: 'Service 2',
    components:{
        TheMenu2,
        TheDetails,
        ThePricing,
        TheFooter
    },
    data(){
        return{
            article:{}
        }
    },
    methods:{
        async getArticle() {
          try {
              let article = await this.$http.get('api/articulo/query/2?articleId');
              this.article=article.data;
               console.log(this.article.nombre)
               
               
          } catch (err) {
               swal("Error", "No se pudo conectar con servicios", "error");
              console.log(err.res)
          }
      }
    },
    created(){
        this.getArticle();
    }
}
</script>
<style scoped>
p{
        font-size:16pt;
        padding:20px;
        margin-right:70px;
       text-align:justify;
        text-indent:20px;
    }
    li{
        font-size:16pt;
        padding:10px;
        margin-right:70px;
       text-align:justify;
    }
    h2{
        margin:30px;
        font-size:30pt;
    }
    h2:hover{
        color:#FFFFFF;
    }
    span{
        display:block;
        font-size:30pt;
        text-align:center;

    }
     span:hover{
        color:#FFFFFF;
    }
</style>