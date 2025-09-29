import type { AutoCompleteTransferSelectProps, TransferSelectProps } from '../types';
import { createFactory } from '../util';
import AutoCompleteTransferSelect from './AutoCompleteTransferSelect';
import Transfer from './Transfer';
import TransferSelect from './TransferSelect';

Transfer.AutoCompleteTransferSelect = createFactory<AutoCompleteTransferSelectProps>(
  AutoCompleteTransferSelect,
  {},
);
Transfer.TransferSelect = createFactory<TransferSelectProps>(TransferSelect, {});

export default Transfer;
