<template>

<div class="service3">
    <the-menu2></the-menu2>
    <the-details
    :info="article">
    </the-details>
    <p>
        Los chatbots, como su propio nombre nos dice (chat + bot), son robots desarrollados dentro de alguna aplicación de mensajes con el principio de automatizar la comunicación. Esta funcionalidad puede ser basada en reglas, como preguntas predefinidas, palabras-clave o comandos cerrados, o en inteligencia artificial (IA), en los casos más avanzados, donde el robot entiende el lenguaje natural y sigue aprendiendo con cada charla y evolucionando para interaccionar cada vez mejor con las personas.
    </p>
    <p>
        En el caso de los chatbots impulsados por IA, todo esto es posible por medio de algoritmos de machine learning, deep learning y PLN (Procesamiento de Lenguaje Natural). Así, si su cliente hace una pregunta para la cual el robot no está programado, recibirá una respuesta correcta.
    </p>
    <h2>¿Cómo mejorar la atención al cliente con chatbots?</h2>
    <p>
        Los chatbots pueden saludar a sus clientes, responder preguntas y hasta sumergirse en el sistema de atención al cliente de su empresa para recuperar el status del pedido de cada cliente.
        Además, cuando el cliente necesite de la atención de un agente real, el robot puede transferir al cliente sin problemas a un miembro de su equipo que esté disponible.

    </p>
    <h2>¿Qué beneficios trae el uso de Chatbot?</h2>
    <p>
        Cuando preguntamos sobre los principales beneficios de los chatbots, la cuestión más representativa, es el servicio 24h durante 7 días por semana. Eso refleja aún más la necesidad de ofrecer una atención al cliente rápida a todo momento. Otras ventajas ofrecidas son:
    </p>
    <ul>
        <li>Recibir un retorno en el mismo instante.</li>
        <li>Obtener respuestas para preguntas simples.</li>
        <li>Facilitar la comunicación.</li>
        <li>Tener una buena experiencia del cliente.</li>
        <li>Recibir información detallada.</li>
        <li>Conseguir respuestas para preguntas complejas.</li>
        <li>Accesibilidad y atención al cliente amigable.</li>
        
    </ul>
    <p>
        En este sitio web se puede encontrar un chatbot en la parte inferior derecha como un ejemplo de cómo se vería implementada este tipo de tecnología dentro de su  sitio web.
    </p>
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
    name: 'Service 3',
    components:{
        TheMenu2,
        TheDetails,
         ThePricing,
        TheFooter
    },data(){
        return{
            article:{}
        }
    },
    methods:{
        async getArticle() {
          try {
              let article = await this.$http.get('api/articulo/query/3?articleId');
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
        (function(w, d) {
            var h = d.head || d.getElementsByTagName("head")[0];
            var s = d.createElement("script");
            s.setAttribute("type", "text/javascript");
            s.setAttribute("src", "https://app.bluecaribu.com/conversion/integration/2f7e82e572fb9735de4f7db78c416558");
            h.appendChild(s);
        })(window, document);
    
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