import { h } from '../core/dom.js';
import { createFilterPanel } from './filterPanel.js';

export function initSidebar(router) {
  const filterPanel = createFilterPanel();
  document.body.appendChild(filterPanel.el);

  const nav = document.getElementById('sidebar');
  const buttons = [
    { page: 'home', label: 'Home', path: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
    { page: 'dex', label: 'Browse Dex', path: 'M4 4h16v16H4z' },
    { page: 'filter', label: 'Filter', path: 'M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z'},
    { page: 'type', label: 'Type Index', path: 'M12 2l9 16H3z' },
    { page: 'snapshot', label: 'Royal Snapshot', path: 'M5 3h14v14H5z M3 19l4-4' },
    { page: 'ai', label: 'AI Chat', path: 'M12 2a4 4 0 0 1 4 4v12a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z'}
  ];

  nav.append(
    ...buttons.map(b => {
      const btn = h('div', { className: 'sidebar-btn', dataset: { page: b.page }, title: b.label });
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('aria-hidden', 'true');
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', b.path);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('stroke', 'currentColor');
      svg.appendChild(path);
      btn.appendChild(svg);
      if (b.page === 'filter') {
        btn.addEventListener('click', () => filterPanel.el.classList.toggle('visible'));
      } else {
        btn.addEventListener('click', () => {
          filterPanel.el.classList.remove('visible');
          router.go(b.page);
        });
      }
      return btn;
    })
  );
}

