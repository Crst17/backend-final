<template>
    <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark container-fluid d-flex align-items-center">
        <div class="navbar-brand">Logo Empresa</div>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="#us">Nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#services">Servicios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#stories">Casos de éxito</a>
                </li>
            </ul>
            <button class="btn btn-outline-light" 
            type="button"
            @click="logIn"
            >Log In</button>
        </div>
    </nav>
</template>

<script>
export default {
    name: "TheMenu",
    methods:{
        logIn() {
            this.$router.push('/Login');
        }
    }
};
</script>

<style scoped>
    nav {
        width: var(--width);
    }
</style>

