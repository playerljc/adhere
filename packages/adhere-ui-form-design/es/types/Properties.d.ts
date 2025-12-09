import type { Dispatch } from 'react';
import type { DesignValueAction } from '../Design/DesignValueReducer';
import type { DesignProps, DesignValue } from '../types';
export interface PropertiesProps {
    activeFieldId?: string;
    activeDesignFieldValue?: DesignValue | null;
    items: DesignProps['items'];
    dispatch: Dispatch<DesignValueAction>;
}
export type PropertiesTabProps = Required<Pick<PropertiesProps, 'activeFieldId' | 'activeDesignFieldValue' | 'items' | 'dispatch'>>;
export type StyleTabProps = Required<Pick<PropertiesProps, 'activeFieldId' | 'activeDesignFieldValue' | 'items' | 'dispatch'>>;
