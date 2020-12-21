<template>
    <div id="carouselExampleControls" class="carousel slide w-75 my-5" data-ride="carousel">
        <div class="carousel-inner h-100 w-75 mt-1 ">
            <div class="carousel-item active">
                <img class="mx-auto d-block w-75 " src="../assets/Clientes1.jpg" alt="First slide" />
                <div class="carousel-caption d-none d-sm-block ">
                    <p>Actualmente, los clientes no buscan apenas un producto, buscan una experiencia completa, ayuda instantánea en el momento exacto y
                         sobre todo, un socio de negocios confiable.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="mx-auto d-block w-75 " src="../assets/Clientes2.jpg" alt="Second slide" />
                <div class="carousel-caption d-none d-sm-block ">
                    <p>El servicio de atención al cliente es todo el soporte ofrecido a tus clientes, sea antes, durante o después de la compra, y que los ayuda a tener una excelente experiencia con tu empresa.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="mx-auto d-block w-75 " src="../assets/Clientes3.jpg" alt="Third slide" />
                <div class="carousel-caption d-none d-sm-block ">
                    <p>Para obtener éxito necesitas entender el concepto de atención al cliente y cómo está cambiando, para que seas capaz de desarrollar tu propia manera de relacionarte con el público.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="mx-auto d-block w-75 " src="../assets/Clientes4.jpg" alt="Fourth slide" />
                <div class="carousel-caption d-none d-sm-block ">
                    <p>Las experiencias digitales y multicanales se consolidan como el medio de satisfacción para los consumidores cada vez más conectados, informados y empoderados.</p>
                </div>
            </div>
        </div>
        <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
        >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
        </a>
        <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
        >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only"></span>
        </a>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.carousel-caption {
    color: black;
    position: relative;
    width: 70%;
    top: 0px;
    left: 0px;
    margin: 0 auto;
    padding: 1em;
}
.carousel-control-next,
.carousel-control-prev {
    filter: invert(100%);
}
.carousel-inner {
    height: 30vw;
    border-top: white;
    margin-top: 2em;
    margin: 0 auto;
}
img {
    height: 25vw;
}
.w-75 {
    margin: 0 auto;
}
</style>