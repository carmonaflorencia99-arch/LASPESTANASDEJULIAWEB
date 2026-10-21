// Abre la ficha de un servicio desde cualquier parte (p. ej. los puntos sobre la foto).
const EVENT = 'lpdj:open-service';

export const openService = (n) => window.dispatchEvent(new CustomEvent(EVENT, { detail: n }));

export function onOpenService(handler) {
  const listener = (e) => handler(e.detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
