import ServiceRegister from '@ctsj/state/lib/middleware/saga/serviceregister';

import Design from './Design';
import * as Dict from './Dict';
import * as parse from './Fields';
import * as Advanced from './Fields/advanced';
import * as Plugins from './Fields/integration';
import * as Layout from './Fields/layout';
import * as Components from './components';
import * as Util from './utils';
import sage from './utils/saga';
export { FormContext, useFormContext } from './Design/DesignEditor';

ServiceRegister.setSage(sage);
// import Form from './Form';
// import View from './View';

export default {
  Design,
  // Form,
  // View,
  Components,
  Util,
  parse,
  Layout,
  Advanced,
  Plugins,
  Dict,
};
