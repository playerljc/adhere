const __importDefault =
  (this && this.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const events_1 = __importDefault(require('./events'));

const Emitter = new events_1.default();

exports.default = Emitter;
// # sourceMappingURL=emitter.js.map
