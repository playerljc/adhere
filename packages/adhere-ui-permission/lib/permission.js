const __importDefault =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.Permission = exports.checkPermission = exports.getPermission = exports.setPermission = void 0);
const prop_types_1 = __importDefault(require('prop-types'));

let permissions = [];

(exports.setPermission = function (e) {
  permissions = e;
}),
  (exports.getPermission = function () {
    return JSON.parse(JSON.stringify(permissions));
  }),
  (exports.checkPermission = function (s, e) {
    return (
      !(
        (s = (s = void 0 === s ? exports.getPermission() : s) || exports.getPermission()) &&
        Array.isArray(s) &&
        e
      ) ||
      (Array.isArray(e)
        ? e.every(function (e) {
            return s.indexOf(e) !== -1;
          })
        : s.indexOf(e) !== -1)
    );
  }),
  (exports.Permission = function (e) {
    var s = e.allPermission;
    const r = void 0 === s ? exports.getPermission() : s;
    const i = e.permissions;
    var s = e.children;
    var e = e.noMatch;
    var e = void 0 === e ? null : e;
    return exports.checkPermission(r, i) ? s : e;
  }),
  (exports.Permission.defaultProps = {
    allPermission: void 0,
    permissions: '',
    noMatch: null,
    children: null,
  }),
  (exports.Permission.propTypes = {
    allPermission: prop_types_1.default.array,
    permissions: prop_types_1.default.oneOfType([
      prop_types_1.default.array,
      prop_types_1.default.string,
    ]),
    noMatch: prop_types_1.default.node,
    children: prop_types_1.default.node,
  });
// # sourceMappingURL=permission.js.map
