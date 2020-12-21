<template>
    <div class="card mb-3 mx-auto col-9">
        <div class="row no-gutters">
        <div class="col-md-3">
            <img :src="require(`@/assets/${imagen}`)" class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title"> {{ name }}</h5>
            <p class="card-text"> {{ story }}</p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "TheStory",
  props: {
    imagen: String,
    story: String,
    name: String,
    date: String
  },
};
</script>