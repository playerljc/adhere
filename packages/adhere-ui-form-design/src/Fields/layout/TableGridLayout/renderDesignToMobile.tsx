import { renderDesign } from './renderDesign';
import type { DesignValue } from '../../../types';

export function renderDesignToMobile(params: { value: DesignValue }) {
  return renderDesign(params);
}
