import MediaQuery from './MediaQuery';
import { WINDOW_RESIZE } from './constant';
import { useMediaQuery } from './useMediaQuery';
import { antdNumberTokenToRem, getMediaQueryByBreakPoints, isInBetween } from './utils';

export type {
  MediaQueryProps,
  BreakPoint,
  BreakPoints,
  BreakPointsCondition,
  BreakPointsType,
  MediaQueryComponent,
} from './types';

export {
  WINDOW_RESIZE,
  antdNumberTokenToRem,
  getMediaQueryByBreakPoints,
  isInBetween,
  useMediaQuery,
};

export default MediaQuery;
