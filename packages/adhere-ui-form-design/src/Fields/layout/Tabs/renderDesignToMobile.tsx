import type { DesignValue } from '../../../types';
import { renderDesign } from './renderDesign';

export function renderDesignToMobile(params: { value: DesignValue }) {
  return renderDesign(params);
}
