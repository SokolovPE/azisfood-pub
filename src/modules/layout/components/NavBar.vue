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
        <v-btn class="nav-btn" text to="/" color="white">Menu</v-btn>
        <v-btn class="nav-btn" text to="/coupons" exact color="white"
            >Coupons</v-btn
        >
        <v-btn class="nav-btn" text to="/actions" color="white">Actions</v-btn>
        <v-btn class="nav-btn" text to="/royals" color="white"
            >Azis Royals</v-btn
        >
        <v-btn class="nav-btn" text to="/restaurants" color="white"
            >We on map</v-btn
        >
        <v-btn class="nav-btn" text to="/about" color="white">About</v-btn>
        <v-spacer></v-spacer>
        <v-btn id="cart-btn" color="white">
            <v-icon color="error darken-1">mdi-cart</v-icon>
            <v-badge
                v-if="getItemCnt > 0"
                :content="getItemCnt"
                color="error darken-1"
                overlap
                style="margin-left: 10px"
            >
            </v-badge>
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
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('cart', ['getItemCnt']),
    },
};
</script>

<style lang="scss" scoped>
#cart-btn {
    width: 90px;
}

.nav-btn {
    height: 100% !important;
}
</style>
