<template>
<div>
    <the-menu></the-menu>

    <the-details
    name="Service Management"
    description="El sistema Service Management es un robusto software que incorpora las funcionalidades de un ITSM y surge como el siguiente paso evolutivo de un Service Desk."  
    image="Articulo1.jpg">
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