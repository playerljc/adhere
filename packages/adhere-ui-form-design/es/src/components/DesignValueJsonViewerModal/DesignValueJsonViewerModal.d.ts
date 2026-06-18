import React from 'react';
import type { DesignValue } from '../../types';
export interface DesignValueJsonViewerModalProps {
    open: boolean;
    onClose: () => void;
    designValue: DesignValue;
}
export default function DesignValueJsonViewerModal({ open, onClose, designValue, }: DesignValueJsonViewerModalProps): React.JSX.Element;
