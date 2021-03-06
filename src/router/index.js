import { createRouter, createWebHistory } from "vue-router"
//import HomeCmp from "@/views/Home" 

const routes = [
    {
        name: "home",
        path: "/",
        component: () => import("@/views/Home") 
    }, 
    {
        name: "contact",
        path: "/contact", 
        component: () => import("@/views/Contact")
    }
]

const router = createRouter({
    routes,
    // mode: "history", vue v2
    history: createWebHistory() // vue v3
});

export default router