export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/landingpage',
    name: 'about',
    component: () => import('@/views/LandingPage.vue'),
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('@/views/AddPosts.vue'),
  },
  {
    path: '/posts',
    name: 'postlist',
    component: () => import('@/views/ListPost.vue'),
  },
  {
    path: '/posts/:id',
    name: 'postdetail',
    component: () => import('@/views/DetailPost.vue'),
  },
  { path: '*', redirect: '/' },
];
