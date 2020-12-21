<template>
    <div class="card mt-4 mx-auto col-9">
        <div class="row no-gutters">
        <div class="col-md-3">
            <img :src="articulo.imagen" class="card-img" alt="ADASDAS" />
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title"> {{articulo.nombre}} </h5>
            <p class="card-text"> {{articulo.descripcion}} </p>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ArticlesList",
    props: {
        articulo: Object
    }
}
</script>