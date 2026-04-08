export interface FlexProps {
    /** flex-grow property - controls how much the item will grow relative to other items */
    flex?: number | string;
    /** flex-shrink property - controls how much the item will shrink relative to other items */
    flexShrink?: number | string;
    /** flex-basis property - the initial main size of the flex item */
    flexBasis?: number | string;
    /** align-self property - overrides the align-items value for the flex item */
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    /** order property - controls the order in which flex items appear in the flex container */
    order?: number;
    minSize?: boolean;
    scroll?: boolean;
}
