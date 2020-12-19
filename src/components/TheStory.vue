<template>
    <div class="card mb-3 mx-auto" style="width: 90%">
        <div class="row no-gutters">
        <div class="col-md-4">
            <img :src="require(`@/assets/${imagen}`)" class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title"> {{ name }}</h5>
            <p class="card-text"> {{ story }}</p>
            <p class="card-text">
                <small class="text-muted"> {{ date }}</small>
            </p>
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