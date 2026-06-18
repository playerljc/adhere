import React from 'react';
export type RichEditorPathInsertModalProps = {
    open: boolean;
    title: string;
    onCancel: () => void;
    onConfirm: (path: string) => void;
};
export declare function RichEditorPathInsertModal({ open, title, onCancel, onConfirm, }: RichEditorPathInsertModalProps): React.JSX.Element;
