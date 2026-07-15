/* Fortly design system — shared behaviour.
   Load right before </body> on every page.
   Every lookup is guarded, so a page without a mobile menu or #year still works. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile menu
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var closed = menu.classList.toggle('hidden-menu');
      btn.setAttribute('aria-expanded', String(!closed));
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.add('hidden-menu');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Subtle fade-in on scroll (opacity only)
  var fades = document.querySelectorAll('.fade');
  if (!fades.length) return;
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    fades.forEach(function (el) { io.observe(el); });
  } else {
    fades.forEach(function (el) { el.classList.add('in'); });
  }
})();
