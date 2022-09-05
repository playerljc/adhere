import type { FC, CSSProperties, ReactElement, ForwardRefExoticComponent } from 'react';

/**
 * StickupLayoutType
 */
export interface StickupLayoutHOCType extends ForwardRefExoticComponent<StickupLayoutProps> {
  Item: FC<StickupLayoutItemProps>;
}

/**
 * StickupLayoutProps
 */
export type StickupLayoutProps = {
  className?: string;
  style?: CSSProperties;
  fixedClassName?: string;
  fixedStyle?: CSSProperties;
  innerClassName?: string;
  innerStyle?: CSSProperties;
  onChange?: (index: number) => void;
  children: ReactElement<StickupLayoutItemProps>[] | null;
};

export interface StickupLayoutHandle {
  refresh: () => void;
  scrollToByIndex: (_index: number, _duration: number) => void;
  scrollToByHeaderEl: (_headerEl: HTMLElement, _duration: number) => void;
}

/**
 * StickupLayoutItemProps
 */
export type StickupLayoutItemProps = {
  className?: string;
  style?: CSSProperties;
  title?: string | ReactElement;
  content?: string | ReactElement;
};

/**
 * IndexItem
 */
export type IndexItem = {
  start: number;
  end: number;
  dom: HTMLElement;
  index: number;
};

export class StickupLayoutHOCType {}
