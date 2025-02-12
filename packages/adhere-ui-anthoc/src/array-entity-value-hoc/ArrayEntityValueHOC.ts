import type { ArrayEntityValueHOCProps } from '../types';
import { createFactory } from '../util';
import InternalArrayEntityValueHOC from './InternalArrayEntityValueHOC';

const ArrayEntityValueHOC: typeof InternalArrayEntityValueHOC & {
  defaultProps?: Partial<ArrayEntityValueHOCProps>;
} = createFactory<ArrayEntityValueHOCProps>(InternalArrayEntityValueHOC, {});

ArrayEntityValueHOC.displayName = 'ArrayEntityValueHOC';

export default ArrayEntityValueHOC;
