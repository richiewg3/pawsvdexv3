import { h } from '../core/dom.js';
import { CREATURES } from '../data.js';

function photoCard(c) {
  const unlocked = Math.random() < 0.35; // Demo logic
  if (!unlocked) {
    return h('div', { className: 'snap-card' },
      h('div', { className: 'missing' }, 'PHOTO', h('br'), 'MISSING')
    );
  }
  return h('div', { className: 'snap-card' },
    h('img', { src: c.img, alt: c.name }),
    h('span', { className: 'tag' }, c.name)
  );
}

export function showSnapshot() {
  const section = h('section', {},
    h('h1', { className: 'page-title' }, 'Royal Snapshot'),
    h('p', { className: 'subtitle' }, 'A collection of memorable photos'),
    h('div', { id: 'snap-grid', className: 'grid snapshot' },
      ...CREATURES.map(c => photoCard(c))
    )
  );
  return { el: section, destroy: null };
}