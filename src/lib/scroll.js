// Acceso global al scroll suave (Lenis) para enlaces internos y bloqueo del scroll.
let lenis = null;

export const setLenis = (instance) => {
  lenis = instance;
};
export const getLenis = () => lenis;

export function scrollToTarget(target) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { duration: 1.4 });
  else el.scrollIntoView({ behavior: 'smooth' });
}

export function lockScroll() {
  lenis?.stop();
  document.documentElement.classList.add('is-locked');
}

export function unlockScroll() {
  lenis?.start();
  document.documentElement.classList.remove('is-locked');
}
