<template>
    <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark container-fluid d-flex align-items-center">
        <div class="navbar-brand">
        <!--Para llevar al home-->
        <button class="btn btn-outline-light" 
            type="button"
            @click="mainPage"
            >Principal</button>
        </div>
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
           <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
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
        },
        mainPage(){
            this.$router.push('/');
        }
    }
};
</script>

<style scoped>
    nav {
        width: var(--width);
    }
</style>
