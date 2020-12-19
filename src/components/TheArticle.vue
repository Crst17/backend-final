<template>
    <div class="card mx-3 mb-3 " style="width: 19rem">
        <img class="card-img-top" :src="require(`@/assets/${image}`)" alt="Card image cap" />
        <div class="card-body pb-5 px-3">
            <h5 class="card-title text-center"> {{ name }} </h5>
            <p class="card-text ">
                {{ description }}
            </p>
            <button type="button" class="btn btn-dark d-flex">Ver más!</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheArticle',
    props: {
        description: String,
        image: String,
        name: String
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

