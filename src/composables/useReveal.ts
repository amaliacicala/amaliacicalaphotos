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

// Rules that draw themselves across when they come into view
const LINES = ['.hero-body', '.services', '.roster', '.cases', '.timeline', '.vol-list', '.edu-grid', '.albums', '.masonry', '.albums-empty'].join(',');

// Big headings whose words slide up from behind a mask
const HEADINGS = ['.hero h1', '.sec-head h2', '.page-h', '.contact h2'].join(',');

/** Wrap every word in a masked span, keeping inner tags like <em> and <i>. */
function splitWords(root: HTMLElement) {
  if (root.dataset.split) return;
  root.dataset.split = '1';
  let n = 0;
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = (child.textContent || '').split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part));
            return;
          }
          const w = document.createElement('span');
          w.className = 'w';
          const inner = document.createElement('span');
          inner.className = 'wi';
          inner.style.setProperty('--w', String(n++));
          inner.textContent = part;
          w.appendChild(inner);
          frag.appendChild(w);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walk(child);
      }
    });
  };
  walk(root);
  root.setAttribute('aria-label', root.textContent || '');
}

export function useReveal() {
  const router = useRouter();
  let io: IntersectionObserver | null = null;
  let stopHook: (() => void) | null = null;

  const scan = () => {
    if (!io) return;
    document.querySelectorAll<HTMLElement>(HEADINGS).forEach(splitWords);
    document.querySelectorAll<HTMLElement>(LINES).forEach((el) => {
      if (el.classList.contains('ln')) return;
      el.classList.add('ln');
      io!.observe(el);
    });
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
