(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    document.documentElement.classList.add('motion');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target.querySelector('.photo-reveal') || entry.target).classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.spread, .title-reveal').forEach(el => observer.observe(el));
  }
  const line = document.getElementById('progress-line');
  const number = document.getElementById('progress-number');
  let queued = false;
  function updateProgress() {
    const available = document.documentElement.scrollHeight - innerHeight;
    const fraction = available > 0 ? Math.max(0, Math.min(1, scrollY / available)) : 0;
    line.style.transform = `scaleX(${fraction})`;
    number.textContent = String(Math.round(fraction * 100)).padStart(2, '0');
    queued = false;
  }
  addEventListener('scroll', () => {
    if (!queued) { queued = true; requestAnimationFrame(updateProgress); }
  }, { passive: true });
  addEventListener('resize', updateProgress);
  addEventListener('load', updateProgress);
  updateProgress();
  const copy = document.getElementById('copy-phone');
  const status = document.getElementById('copy-status');
  const manual = document.getElementById('manual-phone');
  copy.hidden = false;
  copy.addEventListener('click', async () => {
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText('678158024');
        copied = true;
      }
    } catch { /* Offer selection below when clipboard permission is denied. */ }
    if (!copied) {
      manual.hidden = false;
      manual.focus();
      manual.select();
      try { copied = document.execCommand('copy'); } catch { copied = false; }
    }
    if (copied) {
      manual.hidden = true;
      copy.focus();
      status.textContent = 'Teléfono copiado: 678 158 024';
    } else {
      status.textContent = 'Selecciona el número y cópialo manualmente.';
    }
  });
})();
