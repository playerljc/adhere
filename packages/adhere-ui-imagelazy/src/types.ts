import React from 'react';

/**
 * Image arguments configuration for lazy loading
 * @interface ImageArgs
 */
export interface ImageArgs {
  /** Original source URL (placeholder image) */
  originSrc?: string;
  /** Target source URL (actual image to load) */
  targetSrc?: string;
  /** Error fallback image URL */
  errorSrc?: string;
  /** Alt text for accessibility */
  alt?: string;
}

/**
 * Props for the ImageLazy component
 * @interface ImageLazyProps
 */
export interface ImageLazyProps {
  /** Additional CSS class names */
  className?: string;
  /** Inline styles for the image element */
  style?: React.CSSProperties;
  /** Image configuration arguments */
  imgArgs?: ImageArgs;
  /** Additional HTML attributes for the img element */
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}
