<template>
    <div >
        <h2 align=center>{{info.nombre}}</h2>
        <img :src="info.imagen" height=400px width=700px alt="Imagen del servicio" />
        
        <p >
            {{ info.descripcion }}
            
        </p>
        
    </div>
</template>

<script>
export default {
    name: 'TheDetails',
    props: {
        info: Object
    }
    }
    

</script>

<style scoped>
   
   img{
       display:block;
       margin:auto;
       
       margin-top:30px;
       box-shadow: 10px 10px 10px #111111;
       border-radius: 25px;
   }
   p{
       font-size:16pt;
       margin-top:35px;
       padding:20px;
       margin-right:70px;
       text-align:justify;
       text-indent:20px;
   }
   h2{
       padding:20px;
       font-size:40pt;
       margin-top: 70px;
   }  
</style>