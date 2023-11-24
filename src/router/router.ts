import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home/Home.vue";

let firstLoad = true;

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // Prevent 404 route
        { 
            path: '/:pathMatch(.*)*',
            component: Home,
            beforeEnter: () => {
                return '/';
            },
        },

        {
            path: "/",
            component: Home,
            name: "",
        },
    ],

    scrollBehavior: (to) => {
        if(firstLoad) {
            firstLoad = false;
            router.push({ path: '/' });
        } else if(to.hash) return { el: to.hash };
        else return { top: 0 };
    },
});

export default router;