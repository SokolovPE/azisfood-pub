import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
];

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        //* If position on page was saved by browser then scroll user back to that position.
        if (savedPosition) {
            return savedPosition;
        }
        //* If we have hash in url with element id, then navigate to that element.
        if (to.hash) {
            return {
                selector: to.hash //,
                // behavior: 'smooth' //* For a smooth scrolling.
            };
        }
        //* In all other cases scroll to top.
        return { x: 0, y: 0 };
    }
});

export default router;
