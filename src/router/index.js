import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: () => import("@/views/Home.vue") },
    {
      path: "/receptes",
      name: "receptes",
      component: () => import("@/views/Recipes.vue"),
      children: [{
        path: ":id",
        name: "RecipeDetail.vue",
        component: () => import("@/views/RecipeDetail.vue")
      }]
    },
    { path: "/provide", name:"provide", component: () => import("@/AppCart.vue") }
  ],
});

export default router;
