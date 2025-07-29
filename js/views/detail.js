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

  // NOTE: This assumes 'createViewer' can accept a model URL and has a 'loadModel' method.
  const viewer = createViewer(350, 350, creature.stages[0].modelSrc);
  const viewBox = h('div', { id: 'viewer' }, viewer.canvas);

  const stageSelector = h('select', {
    id: 'stage-selector',
    onChange: (e) => {
      const selectedStage = creature.stages[e.target.value];
      if (viewer.loadModel && selectedStage.modelSrc) {
        viewer.loadModel(selectedStage.modelSrc);
      }
    }
  }, ...creature.stages.map((stage, index) => h('option', { value: index }, stage.name)));

  const mediaSlots = [];
  const firstEvo = creature.stages[1];
  mediaSlots.push(h('div', { className: 'media-slot' },
    firstEvo ? h('img', { src: firstEvo.imgSrc, alt: firstEvo.name }) :
    creature.media.candids[0] ? h('img', { src: creature.media.candids[0], alt: 'Candid' }) : null
  ));

  const secondEvo = creature.stages[2];
  mediaSlots.push(h('div', { className: 'media-slot' },
    secondEvo ? h('img', { src: secondEvo.imgSrc, alt: secondEvo.name }) :
    creature.media.candids[1] ? h('img', { src: creature.media.candids[1], alt: 'Candid' }) : null
  ));

  mediaSlots.push(h('div', { className: 'media-slot video-slot' },
    creature.media.video ? h('video', { src: creature.media.video, loop: true, muted: true, autoplay: true, playsinline: true }) : null
  ));

  const mediaRail = h('div', { id: 'media-rail' }, ...mediaSlots);

  const section = h('section', { id: 'detail' },
    h('div', { className: 'content-panel' },
      h('div', { className: 'detail-main' },
        h('div', { className: 'viewer-container' }, viewBox, stageSelector),
        h('div', { id: 'bio' },
          h('h2', {}, `#${creature.id} — ${creature.name}`),
          h('p', {}, h('strong', {}, 'Element: '), creature.element),
          h('p', {}, h('strong', {}, 'Habitat: '), creature.habitat),
          h('p', {}, h('strong', {}, 'Role: '), creature.role),
          h('p', {}, h('strong', {}, 'Behaviour: '), creature.behaviour),
          h('p', { className: 'note' }, `Notable Appearance: ${creature.notable}`)
        )
      ),
      mediaRail
    )
  );

  return { el: section, destroy: viewer.cleanup };
}