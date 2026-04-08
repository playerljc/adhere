import React from 'react';
import type { ReactNode } from 'react';

export default function isReactNode(value: unknown): value is ReactNode {
  return (
    value == null ||
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    Array.isArray(value) ||
    React.isValidElement(value)
  );
}

