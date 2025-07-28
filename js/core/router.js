import { h } from './dom.js';
import { initSidebar } from '../components/sidebar.js';
import { showHome } from '../views/home.js';
import { showDetail } from '../views/detail.js';
import { showSnapshot } from '../views/snapshot.js';
import { showAI } from '../views/ai.js';

const routes = {
  home: showHome,
  dex: showHome,
  detail: showDetail,
  snapshot: showSnapshot,
  ai: showAI,
  type: () => ({ el: h('section', {}, h('h1', {className: 'page-title'}, 'Type Index Coming Soon!')), destroy: null })
};

const app = document.getElementById('app');
let current = { el: null, destroy: null };

function render() {
  const [page, id] = (location.hash.slice(1) || 'home').split(':');
  const viewFn = routes[page] || showHome;
  const view = viewFn({ id });

  // view object must be { el: HTMLElement, destroy: Function | null }
  if (current.destroy) {
    current.destroy(); // Graceful unmount of the previous view
  }
  
  app.replaceChildren(view.el); // Replace the old view with the new one
  current = view;

  document.querySelectorAll('.sidebar-btn')
    .forEach(b => b.classList.toggle('active', b.dataset.page === page));
}

export const router = {
  go: (p, params = {}) => {
    location.hash = p + (params.id ? `:${params.id}` : '');
  }
};

initSidebar(router);
window.addEventListener('hashchange', render);
render(); // Initial page load