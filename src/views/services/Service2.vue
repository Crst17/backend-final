<template>
<div>
    <the-menu></the-menu>
    <the-details
     name="Aplicativo PQRS" 
      description="Aplicativo para la gestión inteligente de Peticiones, Quejas, Reclamos y Solicitudes PQRS; diseñado para lograr atender con oportunidad y calidad las solicitudes ingresadas por diferentes canales, mantener trazabilidad e identificar puntos débiles para una toma de decisiones asertiva."  
      image="Articulo2.jpg"
     >
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