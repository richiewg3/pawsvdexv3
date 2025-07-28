import { h } from '../core/dom.js';

export function initSidebar(router) {
  const nav = document.getElementById('sidebar');
  const buttons = [
    { page: 'home',     label: 'Home',          path: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' },
    { page: 'dex',      label: 'Browse Dex',    path: 'M4 4h16v16H4z' },
    { page: 'type',     label: 'Type Index',    path: 'M12 2l9 16H3z' },
    { page: 'snapshot', label: 'Royal Snapshot',path: 'M5 3h14v14H5z M3 19l4-4' },
    { page: 'ai',       label: 'AI Chat',       path: 'M12 2a4 4 0 0 1 4 4v12a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z'}
  ];

  nav.append(
    ...buttons.map(b =>
      h('div',
        {
          className: 'sidebar-btn',
          dataset: { page: b.page },
          title: b.label,
          onClick: () => router.go(b.page)
        },
        h('svg', { viewBox: '0 0 24 24', 'aria-hidden': true },
          h('path', { d: b.path, fill: 'none', strokeWidth: 2, stroke: 'currentColor' })
        )
      )
    )
  );
}