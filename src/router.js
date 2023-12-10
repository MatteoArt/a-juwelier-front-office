import { createRouter, createWebHistory } from "vue-router";


import AppHome from './pages/AppHome.vue'
import AppWatches from './pages/AppWatches.vue'
import AppContacts from './pages/AppContacts.vue'
import SingleWatch from './pages/SingleWatch.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

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
        path: '/watch/:slug',
        name: 'single-watch',
        component: SingleWatch
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: AppContacts
    },
    { //assicurati che il not found sia sempre alla fine dell'array routes perchè se nessuna rotta è stata catturata in quelle definite allora qualsiasi eccezione carica not found
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFoundPage
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router };