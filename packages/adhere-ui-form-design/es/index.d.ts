import * as parse from './Fields';
import * as Plugins from './Fields/integration';
import * as Layout from './Fields/layout';
import * as Components from './components';
import * as Util from './utils';
declare const _default: {
    Design: import("./types").DesignComponent;
    Components: typeof Components;
    Util: typeof Util;
    parse: typeof parse;
    Layout: typeof Layout;
    Plugins: typeof Plugins;
};
export default _default;
