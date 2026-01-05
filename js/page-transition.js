(function () {
    'use strict';
  
    let isTransitioning = false;
    const DFLT_DELAY = 50;
    const overlayClass = 'page-transition';
  
    function createOverlayIfMissing() {
      let overlay = document.querySelector('.' + overlayClass);
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = overlayClass;
        overlay.setAttribute('aria-hidden', 'true');
  
        const spinner = document.createElement('div');
        spinner.className = 'overlay-spinner';
        overlay.appendChild(spinner);
  
        document.body.appendChild(overlay);
      }
      return overlay;
    }
  
    function getOverlay() {
      return document.querySelector('.' + overlayClass) || createOverlayIfMissing();
    }
  
    function parseDurationToMs(val){
      if (!val) return 600;
      val = val.trim();
      if (val.endsWith('ms')) return parseFloat(val);
      if (val.endsWith('s')) return parseFloat(val) * 1000;
      return parseFloat(val);
    }
  
    function getTransitionMs() {
      const overlay = getOverlay();
      const cs = window.getComputedStyle(overlay);
      const dur = cs.getPropertyValue('transition-duration') || cs.transitionDuration;
      const first = dur.split(',')[0];
      return parseDurationToMs(first);
    }
  
    function shouldTransition(link) {
      if (!link) return false;
      const href = link.getAttribute('href');
  
      if (!href || href === '#') return false;
      if (link.target === '_blank') return false;
  
      if (href.includes(':') && !href.startsWith('/') && !href.startsWith('./') && !href.startsWith('../')) {
        if (!href.startsWith(window.location.origin) && !(href.startsWith('http://') || href.startsWith('https://'))) {
          return false;
        }
      }
  
      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return false;
      } catch (e) {
      }
  
      return true;
    }
  
    function showOverlayAt(x, y) {
      const overlay = getOverlay();
      overlay.style.setProperty('--tx', `${x}px`);
      overlay.style.setProperty('--ty', `${y}px`);
  
      overlay.getBoundingClientRect();
      overlay.classList.remove('exiting');
      overlay.classList.add('active');
    }
  
    function hideOverlay() {
      const overlay = getOverlay();
      overlay.classList.remove('active');
      overlay.classList.add('exiting');
  
      const ms = getTransitionMs();
      setTimeout(() => {
        overlay.classList.remove('exiting');
      }, ms + 40);
    }
  
    function navigateAfterTransition(href) {
      const ms = getTransitionMs();
      setTimeout(() => {
        window.location.href = href;
      }, ms - 40);
    }
  
    function onDocumentClick(e) {
      const link = e.target.closest('a');
      if (!link) return;
  
      if (!shouldTransition(link)) {
        return;
      }
  
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  
      e.preventDefault();
  
      if (isTransitioning) return;
      isTransitioning = true;
  
      const rect = document.documentElement.getBoundingClientRect();
      const x = (e.clientX !== undefined) ? e.clientX : (rect.width / 2);
      const y = (e.clientY !== undefined) ? e.clientY : (rect.height / 2);
  
      showOverlayAt(x, y);
  
      const href = link.href;
      const ms = getTransitionMs();
      setTimeout(() => {
        window.location.href = href;
      }, ms);
    }
  
    function onPageShow(e) {
      const overlay = getOverlay();
      if (e.persisted || performance && performance.getEntriesByType && performance.getEntriesByType('navigation').some(n => n.type === 'back_forward')) {
        overlay.classList.remove('active');
        overlay.classList.remove('exiting');
        overlay.getBoundingClientRect();
        overlay.classList.add('exiting');
        setTimeout(() => {
          overlay.classList.remove('exiting');
        }, 60);
      } else {
        setTimeout(hideOverlay, DFLT_DELAY);
      }
      isTransitioning = false;
    }
  
    function init() {
      createOverlayIfMissing();
  
      document.addEventListener('click', onDocumentClick, true);
  
      window.addEventListener('pageshow', onPageShow);
      window.addEventListener('load', () => {
        hideOverlay();
      });
    }
  
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();
