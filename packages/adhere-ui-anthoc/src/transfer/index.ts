import type {
  AutoCompleteTransferSelectProps,
  TableTransferProps,
  TableTransferSelectProps,
  TransferSelectProps,
  TreeTransferProps,
  TreeTransferSelectProps,
} from '../types';
import { createFactory } from '../util';
import AutoCompleteTransferSelect from './AutoCompleteTransferSelect';
import TableTransfer from './TableTransfer';
import TableTransferSelect from './TableTransferSelect';
import Transfer from './Transfer';
import TransferSelect from './TransferSelect';
import TreeTransfer from './TreeTransfer';
import TreeTransferSelect from './TreeTransferSelect';

Transfer.AutoCompleteTransferSelect = createFactory<AutoCompleteTransferSelectProps>(
  AutoCompleteTransferSelect,
  {},
);
Transfer.TransferSelect = createFactory<TransferSelectProps>(TransferSelect, {});
Transfer.TreeTransfer = createFactory<TreeTransferProps>(TreeTransfer, {});
Transfer.TableTransfer = createFactory<TableTransferProps>(TableTransfer, {});
Transfer.TreeTransferSelect = createFactory<TreeTransferSelectProps>(TreeTransferSelect, {});
Transfer.TableTransferSelect = createFactory<TableTransferSelectProps>(TableTransferSelect, {});

export default Transfer;
