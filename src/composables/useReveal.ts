import { onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

// Elements that fade and rise into place as they scroll into view.
const SELECTOR = [
  '.sec-head',
  '.svc',
  '.photo-row figure',
  '.legend',
  '.roster li',
  '.case',
  '.timeline > li',
  '.kit-group',
  '.vol-list li',
  '.edu .sub',
  '.edu-cards > *',
  '.cert-list li',
  '.photo-band',
  '.contact-grid',
  '.albums li',
  '.masonry li'
].join(',');

export function useReveal() {
  const router = useRouter();
  let io: IntersectionObserver | null = null;
  let stopHook: (() => void) | null = null;

  const scan = () => {
    if (!io) return;
    document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
      if (el.classList.contains('rv')) return;
      // Stagger siblings of the same kind a little
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
      el.style.setProperty('--i', String(Math.min(siblings.indexOf(el), 8)));
      el.classList.add('rv');
      io!.observe(el);
    });
  };

  onMounted(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('js-reveal');
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io?.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    scan();
    // New page content arrives after the route transition
    stopHook = router.afterEach(() => setTimeout(scan, 360));
  });

  onBeforeUnmount(() => {
    io?.disconnect();
    stopHook?.();
  });
}
