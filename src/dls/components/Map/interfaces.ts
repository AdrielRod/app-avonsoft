import type { ReactNode } from 'react';

export interface MapProps<T extends Record<string, ReactNode>> {
  components: T;
  currentComponent: keyof T;
}
