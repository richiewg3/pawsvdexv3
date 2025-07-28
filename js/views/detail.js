import { h } from '../core/dom.js';
import { CREATURES } from '../data.js';
import { createViewer } from '../components/viewer3d.js';

export function showDetail({ id }) {
  const creature = CREATURES.find(c => String(c.id) === id);

  if (!creature) {
    return {
      el: h('section', {}, h('h1', { className: 'page-title' }, 'Creature Not Found')),
      destroy: null
    };
  }

  const viewer = createViewer();
  const viewBox = h('div', { id: 'viewer' }, viewer.canvas);

  const stageColors = [0x55eaff, 0xff66ff, 0x3dff83]; // Example colors for stages
  const stageBtns = creature.stages.map((s, idx) =>
    h('button', { onClick: () => viewer.setColor(stageColors[idx] || 0xffffff) }, s.name)
  );

  const section = h('section', { id: 'detail' },
    h('div', { className: 'flex-row' },
      viewBox,
      h('div', { id: 'bio' },
        h('h2', {}, `#${creature.id} — ${creature.name}`),
        h('p', {}, h('strong', {}, 'Element: '), creature.element),
        h('p', {}, h('strong', {}, 'Habitat: '), creature.habitat),
        h('p', {}, h('strong', {}, 'Role: '), creature.role),
        h('p', {}, h('strong', {}, 'Behaviour: '), creature.behaviour),
        h('p', { className: 'note' }, `Notable Appearance: ${creature.notable}`),
        h('div', { id: 'stage-btns' }, ...stageBtns)
      )
    )
    // Media rail could be added here if needed
  );

  return {
    el: section,
    destroy: viewer.cleanup // Critical: link router lifecycle to viewer cleanup
  };
}