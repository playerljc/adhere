import type { ReactNode } from 'react';
import type { DesignProps, DesignValue } from './Design';
import type { Terminal } from './types';
export interface DesignEditorProps {
    items: DesignProps['items'];
    value: DesignValue;
    activeFieldId: string | null | undefined;
    terminal: Terminal;
    onTerminalChange: (terminal: Terminal) => void;
    onActiveFieldById: (id: string) => void;
}
export interface DroppableContainerProps {
    id: string;
    children?: ReactNode;
}
export interface ModeChangeProps {
    terminal: Terminal;
    onChange: (terminal: Terminal) => void;
}
export interface ActionsProps {
}
