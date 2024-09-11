import type { AsyncTreeEntityValueHOCProps } from '../types';
import { createFactory } from '../util';
import InternalAsyncTreeEntityValueHOC from './InternalAsyncTreeEntityValueHOC';

const AsyncTreeEntityValueHOC: typeof InternalAsyncTreeEntityValueHOC & {
  defaultProps?: Partial<AsyncTreeEntityValueHOCProps>;
} = createFactory<AsyncTreeEntityValueHOCProps>(InternalAsyncTreeEntityValueHOC, {});

AsyncTreeEntityValueHOC.displayName = 'AsyncTreeEntityValueHOC';

export default AsyncTreeEntityValueHOC;
