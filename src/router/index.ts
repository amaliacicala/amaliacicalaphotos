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
      component: ArtistManagementView,
      meta: { title: 'Artist Management Services' }
    },
    {
      path: '/photos',
      name: 'HomePhotos',
      component: HomeGallery,
      meta: { title: 'Concert and Music Photography' }
    },
    {
      path: '/photos/contacts',
      name: 'Contacts',
      component: () => import('../views/photos/ContactsView.vue'),
      meta: { title: 'Concert and Music Photography | Contacts' }
    },
    {
      path: '/photos/albums',
      name: 'Albums',
      component: () => import('../views/photos/AlbumsView.vue'),
      meta: { title: 'Concert and Music Photography | Photo Albums' }
    },
    {
      path: '/photos/gallery/:photosetId',
      name: 'AlbumGallery',
      component: () => import('../views/photos/GalleryView.vue'),
      meta: { title: 'Concert and Music Photography | Album Gallery' }
    },
    {
      path: '/music-digital-marketing',
      name: 'Marketing',
      component: MarketingView,
      meta: { title: 'Music Digital Marketing Services' }
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

router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = `Amalia Cicala | ${to.meta.title}`;
  } else {
    document.title = 'Amalia Cicala | Artist Manager, Music Photographer, Music Digital Marketer';
  }
});

export default router;
