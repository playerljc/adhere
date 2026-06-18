import React from 'react';
import type { DesignValueProps } from '../../../../types';
export type I18nInputSlotRef = {
    get: (key: string) => unknown;
    set: (key: string, value: unknown) => void;
};
export declare function renderMainProperty(props: DesignValueProps): React.ReactNode;
