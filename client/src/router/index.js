import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Catalog from "../views/Catalog.vue";
import Products from "../views/Products.vue";
import LoginForm from "../views/LoginForm";
import Registration from "../views/RegistrationForm";
import ProductDetails from "../views/ProductDetails.vue";
import ShoppingCart from "../views/ShoppingCart";
import Subcategories from "../views/Subcategories";
import ForgetPassword from '../views/ForgetPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'
import AdminTabl from '../views/AdminTabl.vue'

Vue.use(VueRouter);

const routes = [
  {
    path : '/resetPassword',
    name: 'ResetPassword',
    component : ResetPassword
  },
  {
    path : '/resetPassword/:token',
    name: 'ResetPassword',
    component : ResetPassword
  },
  {
    path : '/forgetPassword',
    name: 'ForgetPassword',
    component : ForgetPassword
  },
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
  },
  {
    path: "/catalog/:category_id",
    name: "Catalog",
    component: Subcategories,
  },
  
  {
    path: "/subcategories/:subcategory_id",
    name: "Subcategories",
    component: Products,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/products/:product_id",
    name: "ProductDetails",
    component: ProductDetails,
  },
  {
    path: "/cart",
    name: "Cart",
    component: ShoppingCart,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginForm,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: '/admin/main',
    name: 'adminmain',
    component: () => {return import ('../views/AdminMain.vue')}
  },
  {
    path: '/admin/categories',
    name: 'Admincategory',
    component: () => { return import ('../views/AdminCategory.vue') }
  },
  {
    path: '/admin/categories/:cat',
    name: 'AdminTableOfSubCategory',
    component: AdminTabl
  },
  {
    path: '/admin/categories/additem/:cat',
    name: 'Adminadditem',
    component: () => { return import ('../views/AdminAddItem.vue') }
  },
  {
    path: '/admin/addcategory',
    name: 'Adminaddcategory',
    component: () => {return import ('../views/AdminAddCategory.vue')}
  },
  {
    path: '/admin/addsubcategory',
    name: 'Adminaddsubcategory',
    component: () => {return import ('../views/AdminAddSubCategory.vue')}
  },
  {
    path: '/admin/addsubcategory',
    name: 'Adminaddsubcategory',
    component: () => {return import ('../views/AdminAddSubCategory.vue')}
  },
  {
    path: '/admin/addsubcategory',            
    name: 'Adminaddsubcategory',
    component: () => {return import ('../views/AdminAddSubCategory.vue')}
  },
  {
  path:'/admin/delete/:product_id',
  name: 'AdminDelProd',
  component: AdminTabl
},
{
path:'/admin/soldItems',
name: 'Adminsolditems',
component: () => {return import ('../views/AdminSoldItems.vue')}
}
]

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
