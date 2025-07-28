import { h } from '../core/dom.js';
import { CREATURES as creatures } from '../data.js';
import { card } from '../components/card.js';
import { router } from '../core/router.js';
import { filterBar } from '../components/filterBar.js';

// Helper to get featured creatures
function getFeatured() {
    const shuffled = [...creatures].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

export function showHome() {
  const elements = [...new Set(creatures.map(c => c.element))].sort();
  const habitats = [...new Set(creatures.map(c => c.habitat))].sort();

  const activeFilters = {
    elements: new Set(),
    habitats: new Set()
  };

  const grid = h('div', { id: 'all-creatures', className: 'grid' });

  function renderGrid() {
    const filteredCreatures = creatures.filter(c => {
      const elementMatch = !activeFilters.elements.size || activeFilters.elements.has(c.element);
      const habitatMatch = !activeFilters.habitats.size || activeFilters.habitats.has(c.habitat);
      return elementMatch && habitatMatch;
    }).sort((a, b) => a.id - b.id);

    const frag = document.createDocumentFragment();
    filteredCreatures.forEach(c => frag.appendChild(card(c, router)));
    grid.replaceChildren(frag);
  }

  const onElementToggle = (label, isActive) => {
    isActive ? activeFilters.elements.add(label) : activeFilters.elements.delete(label);
    renderGrid();
  };

  const onHabitatToggle = (label, isActive) => {
    isActive ? activeFilters.habitats.add(label) : activeFilters.habitats.delete(label);
    renderGrid();
  };
  
  const section = h('section', {},
    h('h1', { id: 'home-title' }, 'PawsVdeX'),
    h('p', {}, 'Explore the magical wilds of Pawsville.'),
    h('h2', { className: 'subhead' }, 'Featured Creatures'),
    h('div', { id: 'featured', className: 'flex-row' },
      ...getFeatured().map(c => card(c, router))
    ),
    h('h2', { className: 'subhead' }, 'Filter Creatures'),
    filterBar('Element', elements, onElementToggle),
    filterBar('Habitat', habitats, onHabitatToggle),
    h('h2', { className: 'subhead' }, 'All Creatures'),
    grid
  );
  
  renderGrid(); // Initial render

  return {
    el: section,
    destroy: null // This view has no ongoing processes to clean up
  };
}