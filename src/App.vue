<template>
    <v-app id="app">
        <nav-bar />
        <v-main>
            <v-container class="main-container">
                <router-view />
            </v-container>
        </v-main>
        <v-footer class="footer" color="grey darken-2"> © Azis Food </v-footer>
    </v-app>
</template>

<script>
import NavBar from '@/modules/layout/components/NavBar.vue';
export default {
    components: {
        'nav-bar': NavBar,
    },
};
</script>

<style lang="scss">
.main-container {
    max-width: 1000px;
}

.footer {
    color: white !important;
}
</style>
