/* Homepage publication videos: cursor magnifier + off-screen pause/resume.
   Kept as a static file: inline <script> in markdown gets newline-collapsed by
   jekyll-compress-html in production, which breaks JS. */
(function () {
  'use strict';

  /* ---- Cursor magnifier for .zoom-wrap video panes (fine pointers only) ---- */
  var finePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
  if (finePointer) {
    document.querySelectorAll('.video-container.zoom-wrap').forEach(function (wrap) {
      var base = wrap.querySelector('.zoom-base');
      var lens = wrap.querySelector('.zoom-lens');
      var mag = wrap.querySelector('.zoom-mag');
      if (!base || !lens || !mag) return;
      var Z = 3, L = 110;
      wrap.addEventListener('pointerenter', function () {
        var r = wrap.getBoundingClientRect();
        mag.style.width = (r.width * Z) + 'px';
        mag.style.height = (r.height * Z) + 'px';
        mag.currentTime = base.currentTime;
        lens.style.display = 'block';
        mag.play().catch(function () {});
      });
      wrap.addEventListener('pointermove', function (e) {
        var r = wrap.getBoundingClientRect();
        var x = e.clientX - r.left, y = e.clientY - r.top;
        lens.style.left = (x - L / 2) + 'px';
        lens.style.top = (y - L / 2) + 'px';
        mag.style.left = (L / 2 - x * Z) + 'px';
        mag.style.top = (L / 2 - y * Z) + 'px';
      });
      wrap.addEventListener('pointerleave', function () {
        lens.style.display = 'none';
        mag.pause();
      });
      setInterval(function () {
        if (lens.style.display === 'block' &&
            Math.abs(mag.currentTime - base.currentTime) > 0.25) {
          mag.currentTime = base.currentTime;
        }
      }, 1000);
    });
  }

  /* ---- Pause videos while off-screen (battery/CPU), resume when visible ----
     Note: pause() fires its event asynchronously, so auto-pauses are marked with
     a consume-once flag; only unmarked pause events count as the user pausing. */
  if ('IntersectionObserver' in window) {
    var vids = document.querySelectorAll('.video-container video:not(.zoom-mag)');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var v = en.target;
        if (en.isIntersecting) {
          if (!v.dataset.userPaused) v.play().catch(function () {});
        } else if (!v.paused) {
          v.dataset.ioPause = '1';
          v.pause();
        }
      });
    }, { threshold: 0.15 });
    vids.forEach(function (v) {
      // fallback in case `loop` stalls at the end (streamed sources on some browsers)
      v.addEventListener('ended', function () {
        v.currentTime = 0;
        v.play().catch(function () {});
      });
      v.addEventListener('pause', function () {
        if (v.dataset.ioPause) { delete v.dataset.ioPause; return; }
        if (v.ended) return;
        v.dataset.userPaused = '1';
      });
      v.addEventListener('play', function () { delete v.dataset.userPaused; });
      io.observe(v);
    });
  }
})();
