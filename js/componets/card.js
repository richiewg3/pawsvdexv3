import { h } from '../core/dom.js';

export function card(creature, router) {
  return h('div',
    {
      className: 'card',
      onClick: () => router.go('detail', { id: creature.id })
    },
    h('img', { src: creature.img, alt: creature.name }),
    h('span', { className: 'name' }, creature.name)
  );
}