<template>
    <v-app-bar color="indigo" app>
        <div>
            <v-img
                id="brand-logo"
                src="/brand/logo.png"
                max-width="100"
                contain
            ></v-img>
        </div>
        <v-spacer></v-spacer>
        <v-btn id="cart-btn" color="white">
            <v-icon color="error darken-1">mdi-cart</v-icon>
        </v-btn>
        <!-- <router-link to="/profile">
            <v-badge
                bordered
                bottom
                color="success"
                dot
                offset-x="10"
                offset-y="10"
                class="pl-2"
            >
                <v-avatar color="primary" size="40"
                    ><v-img
                        v-if="true"
                        alt="Avatar"
                        lazy-src="@/assets/defaultProfile.png"
                        src="@/assets/defaultProfile.png" /><v-icon
                        v-else
                        color="secondary"
                        v-text="`ZZ`"
                    ></v-icon
                ></v-avatar>
            </v-badge>
        </router-link> -->
    </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#cart-btn {
    width: 90px;
}
</style>
