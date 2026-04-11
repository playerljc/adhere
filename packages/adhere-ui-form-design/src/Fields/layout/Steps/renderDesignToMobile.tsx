import { renderDesign } from './renderDesign';

/**
 * renderDesignToMobile
 * @param params
 */
export function renderDesignToMobile(params: Parameters<typeof renderDesign>[0]) {
  return renderDesign(params);
}
