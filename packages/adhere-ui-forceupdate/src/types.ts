/**
 * ForceUpdateProps
 * @interface ForceUpdateProps
 */
export interface ForceUpdateProps {
  children?: any;
}

export interface ForceUpdateRefHandle {
  reMount: () => Promise<void>;
}
