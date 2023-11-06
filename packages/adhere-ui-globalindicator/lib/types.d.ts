export type Size = 'default' | 'small' | 'large';
export type GlobalIndicator = {
    show: (parent: HTMLElement, text: string, zIndex: number, size: Size) => HTMLElement;
    hide: (handler: HTMLElement) => void;
    hideAll: () => void;
};
