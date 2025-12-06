import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue"
import ShoppingCart from "@/views/ShoppingCart.vue";
import Registration from "@/views/Registration.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Index },
        { path: '/shoppingCart', component: ShoppingCart },
        { path: '/registration', component: Registration }
    ]
})
export default router