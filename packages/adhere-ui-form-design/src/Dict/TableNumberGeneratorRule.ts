// Table序号生成规则
// import SearchTable from '@baifendian/adhere-ui-searchtable';
import Intl from '@baifendian/adhere-util-intl';

// const { Table } = SearchTable;

export const TableNumberGeneratorRule = {
  handler: () => {
    return [
      { label: Intl.get('separate_mode'), value: '1' },
      { label: Intl.get('continuous_mode'), value: '2' },
    ];
  },
};
