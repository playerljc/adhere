import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import type { DesignContextType, DesignValue } from '../../../../types';
export type ImageUploadCropShape = 'rect' | 'circle' | 'triangle' | 'diamond';
export type ImageUploadCropMeta = {
    shape: ImageUploadCropShape;
    aspect?: number;
    flipX?: boolean;
    flipY?: boolean;
    rotate?: number;
};
export type ImageUploadValueItem = {
    id: string;
    fileName: string;
    path: string;
    thumbUrl?: string;
    width?: number;
    height?: number;
    cropMeta?: ImageUploadCropMeta;
};
export declare function renderDesign({ parentId, value, context, }: {
    parentId?: string;
    value: DesignValue;
    context: DesignContextType;
}): DataItemRow;
