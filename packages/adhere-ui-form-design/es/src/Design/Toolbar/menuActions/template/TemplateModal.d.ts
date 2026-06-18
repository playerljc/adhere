import React from 'react';
export interface TemplateModalProps {
    open: boolean;
    onClose: () => void;
}
export default function TemplateModal({ open, onClose }: TemplateModalProps): React.JSX.Element;
