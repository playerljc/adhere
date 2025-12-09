import type { Dispatch, ReactNode } from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import type { DesignValueAction } from '../Design/DesignValueReducer';
import type { DesignValue } from './Design';
import type { FieldType } from './Field';
export interface BaseItem {
    type: FieldType;
}
export interface DesignItem extends BaseItem {
    renderMainProperty: (defaultValue: DesignValue, dispatch: Dispatch<DesignValueAction>) => ReactNode;
    renderStyleProperty: (defaultValue: DesignValue, dispatch: Dispatch<DesignValueAction>) => ReactNode;
    renderDesign: (props: {
        value: DesignValue;
        activeFieldId: string | null | undefined;
        onActiveFieldById: (id: string) => void;
    }) => DataItemRow | ReactNode;
    renderDesignToMobile: (props: {
        value: DesignValue;
        activeFieldId: string | null | undefined;
        onActiveFieldById: (id: string) => void;
    }) => DataItemRow | ReactNode;
}
export interface FormItem extends BaseItem {
    renderForm: (props: DesignValue) => ReactNode;
    renderFormToMobile: (props: DesignValue) => ReactNode;
}
export interface ViewItem extends BaseItem {
    renderView: (props: DesignValue) => ReactNode;
    renderViewToMobile: (props: DesignValue) => ReactNode;
}
