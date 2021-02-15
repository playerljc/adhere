function putString(t, e, n) {
  n.setItem(t, e);
}
function getString(t, e) {
  return e.getItem(t);
}
function putObject(t, e, n) {
  putString(t, JSON.stringify(e), n);
}
function getObject(t, e) {
  t = e.getItem(t);
  return t == null ? null : JSON.parse(t);
}
function remove(t, e) {
  e.removeItem(t);
}
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.default = {
    putStringByLocal(t, e) {
      putString(t, e, window.localStorage);
    },
    getStringByLocal(t) {
      return getString(t, window.localStorage);
    },
    putObjectByLocal(t, e) {
      putObject(t, e, window.localStorage);
    },
    getObjectByLocal(t) {
      return getObject(t, window.localStorage);
    },
    removeByLocal(t) {
      remove(t, window.localStorage);
    },
    putStringBySession(t, e) {
      putString(t, e, window.sessionStorage);
    },
    getStringBySession(t) {
      return getString(t, window.sessionStorage);
    },
    putObjectBySession(t, e) {
      putObject(t, e, window.sessionStorage);
    },
    getObjectBySession(t) {
      return getObject(t, window.sessionStorage);
    },
    removeBySession(t) {
      remove(t, window.sessionStorage);
    },
  });
// # sourceMappingURL=preferences.js.map
