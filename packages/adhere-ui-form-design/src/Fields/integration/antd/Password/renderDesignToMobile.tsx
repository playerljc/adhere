// import { Input, type InputProps } from 'antd-mobile';
// import React from 'react';
//
// import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
//
// import type { DesignValue } from '../../../../types';
// import { LabelDesign, ValueDesign } from '../Input/renderDesign';
//
// /**
//  * Mobile uses Input (type password can be set via fieldProps), same as Input field
//  */
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
//           <Input type="password" {...(fieldProps as InputProps)} style={style ?? {}} {...actions} />
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
