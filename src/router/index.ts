import { createRouter,createWebHistory } from "vue-router"


const router = createRouter({
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
  {
    path: "/",
    name: "lading",
    component: () => import('../modules/pages/MenuMain.vue'),
    children: [
      {
        path: "introduction",
        name: "Introduction",
        component: () => import("../modules/pages/LanguageIntroduction.vue")
      },

    ]
  },
  ]
})

export default router
