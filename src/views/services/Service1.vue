<template>
<div class="service1">
    <the-menu2></the-menu2>
    <the-details
    :info="article">
    
    </the-details>
    <h2>¿Qué es ITSM?</h2>
    <p>
        La Gestión de Servicios de TI (ITSM, por sus siglas en inglés, Information Technology Service Management) es un término general que describe un enfoque estratégico para el diseño, la entrega, la gestión y la mejora de la forma en que la tecnología de la información (TI) se utiliza dentro de una organización. El objetivo de cada marco de Gestión de Servicios de TI es asegurar que los procesos adecuados, las personas y la tecnología están en su lugar para que la organización pueda cumplir con sus objetivos de negocio.
    </p>
    <h2>¿Qué funcionalidades tiene el sistema Service Management?</h2>
    <ul>
        <li>Muestra la asistencia a través de un portal sencillo e intuitivo que facilite a los clientes y empleados obtener ayuda rápidamente y que optimice el trabajo entrante a los equipos. </li>
        <li>Junta las solicitudes de correo electrónico, herramientas de chat, tu centro de asistencia y otros canales. Configura las colas para seguir, evaluar y asignar las solicitudes entrantes. </li>
        
        <li>Capacita a los empleados para buscar respuestas a preguntas comunes usando un portal de autoservicio. </li>
        <li>Profundiza en los informes de satisfacción de los clientes para comprenderlos mejor y mejorar el servicio con una sencilla herramienta integrada para recopilar los comentarios.</li>
        <li>Supervisa y optimiza el trabajo del equipo con impecables tableros e informes.</li>
        <li>Consigue un contexto completo de las necesidades del cliente con incidencias vinculadas y activos de Insight asociados.</li>  

        
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
    name: 'Service 1',
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
              let article = await this.$http.get('api/articulo/query/1?articleId');
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