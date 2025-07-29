import { h } from '../core/dom.js';
import { CREATURES as creatures } from '../data.js';
import { card } from '../components/card.js';
import { router } from '../core/router.js';
import { filterState } from '../core/filterState.js';

function getFeatured() {
  const shuffled = [...creatures].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

export function showHome() {
  const grid = h('div', { id: 'all-creatures', className: 'grid' });

  function renderGrid() {
    const activeFilters = filterState.get();
    const filteredCreatures = creatures.filter(c => {
      const elementMatch = !activeFilters.elements.size || activeFilters.elements.has(c.element);
      const habitatMatch = !activeFilters.habitats.size || activeFilters.habitats.has(c.habitat);
      return elementMatch && habitatMatch;
    }).sort((a, b) => a.id - b.id);

    const frag = document.createDocumentFragment();
    filteredCreatures.forEach(c => frag.appendChild(card(c, router)));
    grid.replaceChildren(frag);
  }

  renderGrid();
  const unsubscribe = filterState.subscribe(renderGrid);

  const section = h('section', { id: 'home-view' },
    h('div', { className: 'view-header' },
      h('h1', { id: 'home-title' }, 'PawsVdeX'),
      h('p', {}, 'Explore the magical wilds of Pawsville.')
    ),
    h('div', { className: 'content-panel featured-panel' },
      h('h2', { className: 'subhead' }, 'Featured Creatures'),
      h('div', { id: 'featured', className: 'flex-row' },
        ...getFeatured().map(c => card(c, router))
      )
    ),
    h('div', { className: 'content-panel dex-panel' },
      h('h2', { className: 'subhead' }, 'All Creatures'),
      grid
    )
  );

  return { el: section, destroy: unsubscribe };
}

