<template>
    <div class="card mx-3 mb-3 " style="width: 19rem">
        <img class="card-img-top" :src="require(`@/assets/${image}`)" alt="Card image cap" />
        <div class="card-body pb-5 px-3">
            <h5 class="card-title text-center"> {{ name }} </h5>
            <p class="card-text ">
                {{ description }}
            </p>
            <button type="button" 
            class="btn btn-dark d-flex"
            @click="ViewMore">Ver más!</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheArticle',
    props: {
        description: String,
        image: String,
        name: String,
        option: String
    },
    methods:{
        ViewMore(){
            switch(this.option){
                case '1':
                this.$router.push('/services/service1')
                break;
                case '2':
                this.$router.push('/services/service2')
                break;
                case '3':
                this.$router.push('/services/service3')
                break;
            }
            
        }
    }
}
</script>

<style scoped>
    .card{
        background: lightgray;
        border: solid 2px var(--bg-color)
    }
    .btn{
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
    
</style>

