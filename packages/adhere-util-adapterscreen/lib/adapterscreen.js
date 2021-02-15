function detectZoom() {
  let e = 0;
  const i = window.screen;
  const o = navigator.userAgent.toLowerCase();
  return (
    void 0 !== window.devicePixelRatio
      ? (e = window.devicePixelRatio)
      : ~o.indexOf('msie')
      ? i.deviceXDPI && i.logicalXDPI && (e = i.deviceXDPI / i.logicalXDPI)
      : void 0 !== window.outerWidth &&
        void 0 !== window.innerWidth &&
        (e = window.outerWidth / window.innerWidth),
    e
  );
}
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.default = function (i) {
    function e() {
      const e = detectZoom();
      (i.style.transformOrigin = 'left top'), (i.style.transform = `scale(${1 / e})`);
    }
    return (
      void 0 === i && (i = window.document.body),
      window.addEventListener('resize', e),
      function () {
        window.removeEventListener('reset', e);
      }
    );
  });
// # sourceMappingURL=adapterscreen.js.map
