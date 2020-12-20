<template>

<div>
    <the-menu></the-menu>
    <the-details
     name="ChatBot" 
      description="Robots desarrollados dentro de una aplicación de mensajes con el principio de automatizar la comunicación."  
      image="Articulo3.jpg"
    >
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
</div>
</template>
<script>
import TheMenu from '../../components/TheMenu.vue'
import TheDetails from '../../components/TheDetails.vue'
export default{
    components:{
        TheMenu,
        TheDetails
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
</style>