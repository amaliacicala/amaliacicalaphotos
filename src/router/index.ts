import { createRouter, createWebHistory } from 'vue-router';
import HomeGlobalView from '../views/global/HomeGlobalView.vue';
import ArtistManagementView from '../views/management/ArtistManagementView.vue';
import HomeGallery from '../components/photos/HomeGallery.vue';
import MarketingView from '../views/marketing/MarketingView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeGlobal',
      component: HomeGlobalView
    },
    {
      path: '/artist-management',
      name: 'ArtistManagement',
      component: ArtistManagementView
    },
    {
      path: '/photos',
      name: 'HomePhotos',
      component: HomeGallery
    },
    {
      path: '/photos/contacts',
      name: 'Contacts',
      component: () => import('../views/photos/ContactsView.vue')
    },
    {
      path: '/photos/albums',
      name: 'Albums',
      component: () => import('../views/photos/AlbumsView.vue')
    },
    {
      path: '/photos/gallery/:photosetId',
      name: 'AlbumGallery',
      component: () => import('../views/photos/GalleryView.vue')
    },
    {
      path: '/music-digital-marketing',
      name: 'Marketing',
      component: MarketingView
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
