!(function (e) {
  let t;
    let n;
    let o;
    let i;
    let c;
    let d;
    let l =
      '<svg><symbol id="iconsousuo" viewBox="0 0 1024 1024"><path d="M948.48 833.92l-185.6-183.68c-3.84-3.84-8.32-6.4-13.44-7.68C801.28 580.48 832 501.76 832 416 832 221.44 674.56 64 480 64 285.44 64 128 221.44 128 416 128 610.56 285.44 768 480 768c85.76 0 163.84-30.72 225.28-81.28 1.92 4.48 4.48 8.96 8.32 12.8l185.6 183.68c14.08 13.44 35.84 13.44 49.92 0S962.56 847.36 948.48 833.92zM480 704C320.64 704 192 575.36 192 416 192 256.64 320.64 128 480 128 639.36 128 768 256.64 768 416 768 575.36 639.36 704 480 704z"  ></path></symbol><symbol id="iconyueduye_zitijianxiao" viewBox="0 0 1024 1024"><path d="M581.5 766.3h-82L440.8 609H201.4l-55.3 157.4h-82l219-574.9h79.4l219 574.8zM417.8 544L331 305c-2.7-7.7-5.7-21-8.9-40.1h-1.9c-2.7 17.3-5.8 30.7-9.3 40.1l-86.1 239h193zM642 477.9h315.6v63.7H642z"  ></path></symbol><symbol id="iconyueduye_zitizengda" viewBox="0 0 1024 1024"><path d="M957.6 541.6H831.7v126.3h-63.2V541.6H642v-63.7h126.5V351h63.2v126.9h125.9v63.7zM581.5 766.3h-82L440.8 609H201.4l-55.3 157.4h-82l219-574.9h79.4l219 574.8zM417.8 544L331 305c-2.7-7.7-5.7-21-8.9-40.1h-1.9c-2.7 17.3-5.8 30.7-9.3 40.1l-86.1 239h193z"  ></path></symbol></svg>';
    var a = (a = document.getElementsByTagName('script'))[a.length - 1].getAttribute('data-injectcss');
  if (a && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function s() {
    c || ((c = !0), o());
  }
  (t = function () {
    let e; let t; let n; let o;
    ((o = document.createElement('div')).innerHTML = l),
      (l = null),
      (n = o.getElementsByTagName('svg')[0]) &&
        (n.setAttribute('aria-hidden', 'true'),
        (n.style.position = 'absolute'),
        (n.style.width = 0),
        (n.style.height = 0),
        (n.style.overflow = 'hidden'),
        (e = n),
        (t = document.body).firstChild
          ? ((o = e), (n = t.firstChild).parentNode.insertBefore(o, n))
          : t.appendChild(e));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener('DOMContentLoaded', n, !1), t();
          }),
          document.addEventListener('DOMContentLoaded', n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (c = !1),
        (d = function () {
          try {
            i.documentElement.doScroll('left');
          } catch (e) {
            return void setTimeout(d, 50);
          }
          s();
        })(),
        (i.onreadystatechange = function () {
          i.readyState == 'complete' && ((i.onreadystatechange = null), s());
        }));
})(window);
