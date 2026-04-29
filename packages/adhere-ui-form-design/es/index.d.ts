import * as Dict from './Dict';
import * as parse from './Fields';
import * as Advanced from './Fields/advanced';
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
    Advanced: typeof Advanced;
    Plugins: typeof Plugins;
    Dict: typeof Dict;
};
export default _default;
