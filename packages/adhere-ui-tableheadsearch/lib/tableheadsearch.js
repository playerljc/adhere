const __importDefault =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const react_1 = __importDefault(require('react'));
const icons_1 = require('@ant-design/icons');

exports.default = function (t, e) {
  return (
    void 0 === e && (e = react_1.default.createElement(icons_1.SearchOutlined, null)),
    {
      filterIcon() {
        return e;
      },
      filterDropdown(e) {
        return t(e);
      },
    }
  );
};
// # sourceMappingURL=tableheadsearch.js.map
