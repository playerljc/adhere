import SlideLayout from './SlideLayout';
import Overlay from './Overlay';
import Push from './Push';
import Reveal from './Reveal';
import { slider, createMask } from './SlideLayout';
import type {
  SlideLayoutProps,
  OverlayProps,
  PushProps,
  RevealProps,
  SlideLayoutHandle,
  SlideDirection,
  PositionConfig,
  SliderParams,
} from './types';

// 默认导出
export default SlideLayout;

// 命名导出
export {
  Overlay,
  Push,
  Reveal,
  slider,
  createMask,
};

// 类型导出
export type {
  SlideLayoutProps,
  OverlayProps,
  PushProps,
  RevealProps,
  SlideLayoutHandle,
  SlideDirection,
  PositionConfig,
  SliderParams,
};
