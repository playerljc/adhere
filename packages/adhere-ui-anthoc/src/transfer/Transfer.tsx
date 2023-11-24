import { Transfer, TransferProps } from 'antd';

import { TransferHOCComponent } from '../types';
import { createFactory } from '../util';

const TransferHOC: TransferHOCComponent = createFactory<TransferProps<any>>(Transfer, {});

TransferHOC.displayName = 'Transfer';

export default TransferHOC;
