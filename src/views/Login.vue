<template>
    <div class="login">
        <the-menu></the-menu>
        <div class="fluid-container d-flex justify-content-center align-items-center">
            <div class="p-5 shadow ">
                <h1 class="text-center mb-3">Usuarios</h1>
                <p class="mb-5">
                    Para continuar, por favor ingrese su correo electrónico y contraseña.
                </p>
                <login-form></login-form>
            </div>
        </div>
    </div>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm'
import TheMenu from '../components/TheMenu.vue'
import TheFooter from '../components/TheFooter.vue'
export default {
    components: {
        LoginForm,
        TheMenu,
        TheFooter
    }
}
</script>

<style scoped>
.fluid-container {
    height: 100vh;
}
.fluid-container > div {
    min-width: 350px;
    width: 25vw;
}
</style>