/**
 * Tiny hyperscript‑style helper to build DOM nodes safely.
 * h('div', { className:'box' }, 'Text', childNode, ...)
 */
export function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'dataset') {
        Object.entries(v).forEach(([d, val]) => (el.dataset[d] = val));
    } else if (k === 'onClick') {
        el.addEventListener('click', v);
    } else if (k in el) {
        el[k] = v;
    } else {
        el.setAttribute(k, v);
    }
  });
  children.flat().forEach(c => {
    if (c == null) return;
    if (typeof c === 'string' || typeof c === 'number') {
        el.appendChild(document.createTextNode(c));
    } else {
        el.appendChild(c);
    }
  });
  return el;
}