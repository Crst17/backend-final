<template>
    <div >
        <h2 align=center>{{name}}</h2>
        <img :src="require(`@/assets/${image}`)" height=400px width=700px alt="Card image cap" />
        <div>
            
            <p >
                {{ description }}
            </p>
         
           
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheDetails',
    props: {
        description: String,
        image: String,
        name: String,
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
   img:hover{
       border-radius: 70px;
       opacity:0.9;
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
   }
   h2:hover{
        color:#FFFFFF;
    }
   
    
</style>