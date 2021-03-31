<template>
    <div>
        <div v-for="entry in catalog" :key="entry.category.id" class="mt-5">
            <v-row>
                <h2>{{ entry.category.title }}</h2>
            </v-row>
            <v-row>
                <v-col
                    v-for="good in entry.goods"
                    :key="good.id"
                    :cols="goodCols"
                >
                    <v-card height="320">
                        <v-img
                            :src="good.imgUrl"
                            lazy-src="/brand/default-good.png"
                            height="200"
                            contain
                        />
                        <v-card-title>{{ good.title }}</v-card-title>
                        <v-card-text>
                            <v-btn
                                outlined
                                color="error darken-1"
                                @click="addToCart(good)"
                                >{{ good.price }}$
                                <v-icon right>mdi-plus</v-icon>
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import CatalogService from '@/modules/common/services/catalog.service';
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            catalog: {},
        };
    },
    computed: {
        goodCols() {
            return this.$vuetify.breakpoint.mobile ? 12 : 4;
        },
    },
    methods: {
        ...mapActions('cart', ['addItem']),
        addToCart(item) {
            this.addItem(item);
        }
    },
    created() {
        CatalogService.getCatalog().then((response) => {
            this.catalog = response.data;
        });
    },
};
</script>

<style lang="scss" scoped></style>
