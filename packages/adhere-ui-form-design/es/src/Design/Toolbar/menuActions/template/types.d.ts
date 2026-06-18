import type { DesignValue } from '../../../../types';
import type { GetItemByType } from './utils/createTemplateField';
export type FormTemplate = {
    id: string;
    nameKey: string;
    descKey: string;
    build: (getItemByType: GetItemByType) => DesignValue;
};
