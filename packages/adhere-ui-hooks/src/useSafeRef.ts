import { MutableRefObject, RefObject } from 'react';

export default function useSafeRef<T>(
  ref: MutableRefObject<T> | RefObject<T> | MutableRefObject<T | undefined>,
  defaultValue?: T,
): T | null | undefined {
  return ref.current ?? defaultValue;
}
