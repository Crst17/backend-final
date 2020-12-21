<template>
    <div class="card mx-3 mb-3 " style="width: 20rem">
        
        <div class="card-body pb-5 px-3">
            
            <h2 class="card-title text-center"> {{ name }} </h2>
            <h2 class="alert">¡Últimos días!</h2>
            <h2 class="before">Antes USD {{priceA}}</h2>
            <h2>Ahora USD {{priceB}}</h2>
            <div class="card-text ">
                <p>
                &#x2714 {{ description }}
                </p>
                <p>
                &#x2714 Herramienta personalizable
                </p>
                <p>
                &#x2714 Reembolso garantizado
                </p>
            </div>
            
            <button type="button" 
            class="btn btn-dark d-flex"
            >Comprar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThePricing',
    props: {
        description: String,
        name: String,
        priceA:String,
        priceB:String
    },
   
}
</script>

<style scoped>
    .card{
        background: white;
        border: solid 2px var(--bg-color);
        border-radius:15px;
        box-shadow: 2px 3px 2px 3px #111111;
        
    }
    .btn{
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        margin: 0 auto;
        background: blue;
        border-radius:20px;
    }

    .btn:hover{
        opacity:0.7;
    }
    h2{
        text-align:center;
    }
    .before{
        text-decoration: line-through;
        color:#FF0000
    }
    p{
        text-align:center;
        font-size:14pt;
    }
    .alert{
        color:#008F39;
    }
</style>
