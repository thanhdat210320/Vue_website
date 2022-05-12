import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home"
import ProductDetail from "../components/ProductDetail"
import ViewCart from "../components/ViewCart"
import CheckOut from "../components/CheckOut"
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import ProductCategory from "../components/ProductCategory"
const routes = [{
        path: 
        "/",
        name: "Home",
        component: Home,
    },
    {
        path: 
        "/productDetail/:id",
        name: "ProductDetail",
        component: ProductDetail,
    },
    {
        path: 
        "/ViewCart",
        name: "ViewCart",
        component: ViewCart,
    },
    {
        path: 
        "/CheckOut",
        name: "CheckOut",
        component: CheckOut,
    },
    {
        path:
        "/Login",
        name:"Login",
        component: Login,
    },
    {
        path:
        "/SignUp",
        name:"SignUp",
        component: SignUp,
    },
    {
        path:
        "/ProductCategory/:id",
        name:"ProductCategory",
        component: ProductCategory,
    },
   

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;