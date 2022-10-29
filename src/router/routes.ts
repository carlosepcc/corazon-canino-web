import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ActivityPage.vue') },
      {
        path: '/activity',
        component: () => import('src/pages/ActivityPage.vue'),
      },
      {
        path: '/about',
        component: () => import('src/pages/AboutPage.vue'),
      },
      {
        path: '/contact',
        component: () => import('src/pages/ContactPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
