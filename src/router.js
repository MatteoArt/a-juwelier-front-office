import { createRouter, createWebHistory } from "vue-router";


import AppHome from './pages/AppHome.vue'
import AppWatches from './pages/AppWatches.vue'
import AppContacts from './pages/AppContacts.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: AppHome
    },
    {
        path: '/watches',
        name: 'watches',
        component: AppWatches
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: AppContacts
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router };