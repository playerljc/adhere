import type { CascaderViewHOCComponent, InternalCascaderViewProps } from '../types';
import { createFactory } from '../util';
import InternalCascaderView from './InternalCascaderView';

const CascaderViewHOC: CascaderViewHOCComponent = createFactory<InternalCascaderViewProps>(
  InternalCascaderView,
  {},
);

CascaderViewHOC.displayName = 'CascaderView';

export default CascaderViewHOC;
