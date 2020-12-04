const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/', component: () => import('pages/Index.vue')
      },
      {
        path: '/login', component: () => import('pages/user/Login')
      },
      {
        path: '/registry', component: () => import('pages/user/Register')
      },
      {
        path: '/add-product', component: () => import('pages/product/AddProduct')
      },
      {
        path: '/add-category', component: () => import('pages/product/AddProduct')
      },
      {
        path: '/view-product/:id', component: () => import('pages/product/ViewProduct')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
