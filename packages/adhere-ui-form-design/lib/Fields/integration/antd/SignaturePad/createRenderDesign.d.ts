import React from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import WritingBoard from '@baifendian/adhere-ui-writingboard';
import type { DesignContextType, DesignValue } from '../../../../types';
type SignatureComponentProps = React.ComponentProps<typeof WritingBoard.Signature>;
type SignatureComponent = React.ComponentType<SignatureComponentProps>;
export declare function createSignatureRenderDesign(SignatureComponent: SignatureComponent): ({ parentId, value, context, }: {
    parentId?: string;
    value: DesignValue;
    context: DesignContextType;
}) => DataItemRow;
export {};
