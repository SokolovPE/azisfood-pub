<template>
    <v-app id="app">
        <nav-bar />
        <v-main>
            <v-container  class="main-container">
                <router-view />
            </v-container>
        </v-main>
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
</style>
