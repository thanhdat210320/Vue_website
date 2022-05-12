import { createWebHistory, createRouter } from "vue-router";
import HomeAdmin from "../components/HomeAdmin";
import Category from "../components/Category";
import Product from "../components/Product";
const routes = [{
        path: 
        "/",
        name: "HomeAdmin",
        component: HomeAdmin,
    },
    {
        path:
        "/Category",
        name: "Category",
        component:Category,
    },
    {
        path:
        "/Product",
        name : "Product",
        component:Product,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;