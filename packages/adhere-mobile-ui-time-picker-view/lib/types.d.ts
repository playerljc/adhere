import dayjs from 'dayjs';
import type { CSSProperties } from 'react';
export type Format = 'HH:mm:ss' | 'HH:mm' | 'HH' | 'mm:ss' | 'ss' | undefined;
export interface TimePickerViewProps {
    className?: string;
    style?: CSSProperties;
    value?: dayjs.Dayjs | null;
    onChange?: (value: dayjs.Dayjs | null) => void;
    format?: Format;
}
