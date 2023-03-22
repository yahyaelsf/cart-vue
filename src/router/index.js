import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AddCartView from '../views/AddCartView.vue'
import { useUserStore } from "../stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title:"Home Page"
      }
      
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta:{
        title:"Login"
      }
      
    },
    {
      path: '/addcart',
      name: 'AddCartView',
      component: AddCartView,
      meta:{
        Auth : true,
        title:"Add Cart"
      }
      
    },
  ]
})
let defaultTitle = "Market";
router.afterEach((to) => {
  document.title = to.meta.title || defaultTitle;
});
router.beforeEach((to, from, next) => {
  const user = useUserStore();
  if (!user.user && to.meta.Auth) {
    router.push('/login');
  }
  next()
});
export default router
