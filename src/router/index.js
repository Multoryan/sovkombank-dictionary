import Vue from 'vue';
import VueRouter from 'vue-router';
import TheSidebar from '@/components/TheSidebar.vue';
import TheSidebarFavorite from '@/components/TheSidebarFavorite.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        components: {
            default: () => import('@/pages/Home.vue'),
            sidebar: TheSidebar,
        },
    },
    {
        path: '/favorites',
        name: 'Favorites',
        meta: {
            title: 'Starred Words',
        },
        components: {
            default: () => import('@/pages/Favorites.vue'),
            sidebar: TheSidebarFavorite,
        },
    },
    {
        path: '/word/:id',
        name: 'Word',
        meta: {
            title: 'Word',
        },
        components: {
            default: () => import('@/pages/Word.vue'),
            sidebar: TheSidebar,
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
