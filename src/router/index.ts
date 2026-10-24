import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const SITE = 'Amalia Cicala';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: `${SITE} | Artist Manager & Metal Music Marketer, Milan`,
        description:
          'Amalia Cicala, artist manager and music marketer at BANDS Management, based in Milan and working worldwide. Management, marketing, booking and touring for progressive and heavy bands.'
      }
    },
    {
      path: '/photos',
      name: 'Photos',
      component: () => import('../views/photos/PhotosView.vue'),
      meta: {
        title: `Concert Photographer in Milan | ${SITE}`,
        description:
          'Concert and music photography by Amalia Cicala, a concert photographer based in Milan, Italy, available for shows, festivals and press shoots worldwide.'
      }
    },
    {
      path: '/photos/:slug',
      name: 'Album',
      component: () => import('../views/photos/AlbumView.vue')
    },
    // Old pages from the previous site
    { path: '/artist-management', redirect: { path: '/', hash: '#roster' } },
    { path: '/music-digital-marketing', redirect: { path: '/', hash: '#about' } },
    { path: '/photos/albums', redirect: '/photos' },
    { path: '/photos/contacts', redirect: { path: '/', hash: '#contact' } },
    { path: '/photos/gallery/:id', redirect: '/photos' },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior(to, from, saved) {
    const target = saved || (to.hash ? { el: to.hash, top: 72, behavior: 'smooth' as const } : { top: 0 });
    // When the page changes, wait for the fade between pages to finish
    if (to.path !== from.path) return new Promise((resolve) => setTimeout(() => resolve(target), 340));
    return target;
  }
});

export function setMeta(title?: string, description?: string) {
  if (title) document.title = title;
  if (description) {
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', description);
  }
}

router.afterEach((to) => {
  setMeta(to.meta.title as string | undefined, to.meta.description as string | undefined);
});

export default router;
