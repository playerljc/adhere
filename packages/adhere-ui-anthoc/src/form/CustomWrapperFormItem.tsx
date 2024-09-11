import type { FC, ReactNode } from 'react';

import type { CustomWrapperFormItemProps } from '../types';

/**
 * CustomWrapperFormItem
 * @description 自定义FormItem的包装
 * @return {React.ReactNode}
 */
const CustomWrapperFormItem: FC<CustomWrapperFormItemProps> = ({
  children,
  value,
  onChange,
}): ReactNode => {
  return children?.({ value, onChange });
};

export default CustomWrapperFormItem;
