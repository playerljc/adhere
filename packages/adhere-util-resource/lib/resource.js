"use strict";var __importDefault=this&&this.__importDefault||function(i){return i&&i.__esModule?i:{default:i}},adhere_util_dict_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importDefault(require("@baifendian/adhere-util-dict"))),dict_form_config_js_1=__importDefault(require("./dict/dict.form.config.js")),dict_gis_config_js_1=__importDefault(require("./dict/dict.gis.config.js")),dict_locals_config_js_1=__importDefault(require("./dict/dict.locals.config.js")),dict_mime_config_js_1=__importDefault(require("./dict/dict.mime.config.js")),dict_moment_config_js_1=__importDefault(require("./dict/dict.moment.config.js")),dict_normal_config_js_1=__importDefault(require("./dict/dict.normal.config.js"));function initDict(i){var t;null!=(t=null==i?void 0:i.initStatic)&&t.call(i),null!=(t=null==i?void 0:i.initRemote)&&t.call(i)}function initBasicDict(){[dict_form_config_js_1.default,dict_gis_config_js_1.default,dict_locals_config_js_1.default,dict_mime_config_js_1.default,dict_moment_config_js_1.default,dict_normal_config_js_1.default].forEach(function(i){return initDict(i)})}initBasicDict(),exports.default={Dict:adhere_util_dict_1.default};
//# sourceMappingURL=resource.js.map
