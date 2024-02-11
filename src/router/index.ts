import { createRouter, createWebHistory } from 'vue-router';
import HomeGallery from '../components/HomeGallery.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeGallery
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import('../views/ContactsView.vue')
    },
    {
      path: '/albums',
      name: 'Albums',
      component: () => import('../views/AlbumsView.vue')
    },
    {
      path: '/gallery/:photosetId',
      name: 'AlbumGallery',
      component: () => import('../views/GalleryView.vue')
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    } else {
      return { top: 0, behavior: 'instant' };
    }
  }
});

export default router;
