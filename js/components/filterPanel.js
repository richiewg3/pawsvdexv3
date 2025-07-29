// js/components/filterPanel.js
import { h } from '../core/dom.js';
import { CREATURES } from '../data.js';
import { filterState } from '../core/filterState.js';

export function createFilterPanel() {
  const elements = [...new Set(CREATURES.map(c => c.element))].sort();
  const habitats = [...new Set(CREATURES.map(c => c.habitat))].sort();

  const createChipGroup = (title, options, onToggle) => {
    return h('div', { className: 'chip-group' },
      h('h3', { className: 'chip-group-title' }, title),
      ...options.map(option =>
        h('button', { className: 'chip', onClick: () => onToggle(option) }, option)
      )
    );
  };

  const panel = h('div', { id: 'filter-panel', className: 'sidebar-panel' },
    h('h2', { className: 'panel-title' }, 'Filter Creatures'),
    createChipGroup('Element', elements, filterState.toggleElement),
    createChipGroup('Habitat', habitats, filterState.toggleHabitat)
  );

  const updateChipStates = () => {
    const active = filterState.get();
    panel.querySelectorAll('.chip').forEach(chip => {
      const label = chip.textContent;
      const isActive = active.elements.has(label) || active.habitats.has(label);
      chip.classList.toggle('active', isActive);
    });
  };

  updateChipStates();
  const unsubscribe = filterState.subscribe(updateChipStates);

  return { el: panel, destroy: unsubscribe };
}

