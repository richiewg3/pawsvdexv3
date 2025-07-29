// js/core/filterState.js
const activeFilters = { elements: new Set(), habitats: new Set() };
const listeners = new Set();

export const filterState = {
  get: () => ({ ...activeFilters }),
  toggleElement: (element) => {
    activeFilters.elements.has(element)
      ? activeFilters.elements.delete(element)
      : activeFilters.elements.add(element);
    listeners.forEach(listener => listener());
  },
  toggleHabitat: (habitat) => {
    activeFilters.habitats.has(habitat)
      ? activeFilters.habitats.delete(habitat)
      : activeFilters.habitats.add(habitat);
    listeners.forEach(listener => listener());
  },
  subscribe: (callback) => {
    listeners.add(callback);
    return () => listeners.delete(callback);
  }
};
