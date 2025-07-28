import { h } from '../core/dom.js';

export function showAI() {
  const status = h('p', { id: 'status' }, 'Synchronising with ancient archives...');
  const messages = [
    'Analyzing sparkle trails...',
    'Translating Budblop vocal patterns...',
    'Accessing enchanted mushroom glow matrix...'
  ];
  let idx = 0;
  const intervalId = setInterval(() => {
      status.textContent = messages[++idx % messages.length]
  }, 4000);

  const section = h('section', { className: 'ai' },
    h('h1', { className: 'page-title' }, 'Pawsville AI Chat'),
    status,
    h('button', { id: 'start', disabled: true }, 'START'),
    h('input', { type: 'text', placeholder: 'Ask the Codex...', disabled: true })
  );

  return {
    el: section,
    destroy: () => clearInterval(intervalId) // Cleanup the interval on unmount
  };
}