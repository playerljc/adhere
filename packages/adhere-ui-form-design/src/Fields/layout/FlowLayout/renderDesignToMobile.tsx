import type { DesignContextType } from '../../../types';
import { renderDesign } from './renderDesign';

export function renderDesignToMobile(params: { context: DesignContextType }) {
  return renderDesign(params);
}
