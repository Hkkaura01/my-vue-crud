import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginP from './components/LoginP.vue'
import Header from  './components/AppHeader.vue'
import Add from  './components/AddItem.vue'
import Update from  './components/UpdateItem.vue'
import {createRouter,createWebHistory} from 'vue-router'
const routes = [
    {
       name:'HomePage',
       component: HomePage,
       path: "/",
    },
    {
        name:"SignUp",
        component:SignUp,
        path:"/SignUp",
    },
    {
        name:"Login",
        component: LoginP,
        path:"/login"
    },
    {
        name:"Header",
        component: Header,
        path:"/Header"
    },
    {
        name:"Add",
        component: Add,
        path:"/Add"
    },
    {
        name:"Update",
        component: Update,
        path:"/Update/:id"
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
