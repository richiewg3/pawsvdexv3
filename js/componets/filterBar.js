import { h } from '../core/dom.js';

/**
 * Creates a horizontal toggle‑chip bar.
 * @param {string} title - The title of the filter group.
 * @param {string[]} options – list of labels for the chips.
 * @param {Function} onToggle - Callback function executed on toggle.
 * @returns {HTMLElement} The root element of the filter bar.
 */
export function filterBar(title, options, onToggle) {
  const active = new Set();

  const chips = options.map(label => {
    const chip = h('button',
      { className: 'chip', dataset: { label } },
      label
    );
    chip.addEventListener('click', () => {
      const wasActive = active.has(label);
      wasActive ? active.delete(label) : active.add(label);
      chip.classList.toggle('active', !wasActive);
      onToggle(label, !wasActive); // Emit the change
    });
    return chip;
  });

  return h('div', { className: 'filter-group' },
    h('span', { className: 'filter-title' }, title),
    ...chips
  );
}