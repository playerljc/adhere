import { ITextStyle } from '../types';
import GeometryStyle from './GeometryStyle';

/**
 * TextStyle
 */
const TextStyle: ITextStyle = {
  font: '10px sans-serif',
  textAlign: 'start',
  textBaseline: 'middle',
  direction: 'inherit',
  ...GeometryStyle,
};

export default TextStyle;
