import { createRouter, createWebHistory } from 'vue-router';
import CheckBoxView from '../views/CheckBoxView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CheckBoxView,
    },
  ],
});

export default router;
