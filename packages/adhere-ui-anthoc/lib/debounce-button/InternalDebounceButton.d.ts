import type { ButtonProps } from 'antd';
import { FC } from 'react';
export interface DebounceButtonProps extends ButtonProps {
    debounceWait?: number;
}
declare const InternalDebounceButton: FC<DebounceButtonProps>;
export default InternalDebounceButton;
