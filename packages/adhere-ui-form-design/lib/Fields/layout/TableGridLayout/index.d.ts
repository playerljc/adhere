import { renderDesign } from './renderDesign';
import { renderDesignToMobile } from './renderDesignToMobile';
import { renderProperty } from './renderProperty';
export declare function define(): {
    type: string;
    renderDesign: typeof renderDesign;
    renderDesignToMobile: typeof renderDesignToMobile;
    renderProperty: typeof renderProperty;
};
