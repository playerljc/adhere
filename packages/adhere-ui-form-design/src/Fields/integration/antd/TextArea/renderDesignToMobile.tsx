// import { TextArea } from 'antd-mobile';
// import type { TextAreaProps } from 'antd-mobile/es/components/text-area';
// import React from 'react';
//
// import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
//
// import type { DesignValue } from '../../../../types';
// import { LabelDesign, ValueDesign } from '../Input/renderDesign';
//
// export function renderDesignToMobile({ value }: { value: DesignValue }): DataItemRow {
//   const {
//     id,
//     props: { formItemProps },
//   } = value;
//
//   return {
//     key: id,
//     require: true,
//     label: <LabelDesign formItemProps={formItemProps} />,
//     value: (
//       <ValueDesign value={value}>
//         {({ fieldProps, style, actions }) => (
//           <TextArea {...(fieldProps as TextAreaProps)} style={style ?? {}} {...actions} />
//         )}
//       </ValueDesign>
//     ),
//   };
// }
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';

import { renderDesign } from './renderDesign';

/**
 * renderDesignToMobile
 * @param params
 */
export function renderDesignToMobile(params): DataItemRow {
  return renderDesign(params);
}
