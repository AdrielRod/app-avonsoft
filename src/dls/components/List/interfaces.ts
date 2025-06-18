import { JSX } from 'react';

import type { FlashList, FlashListProps } from '@shopify/flash-list';

export type ListRef<T> = FlashList<T>;

export interface ListConstraints {
  id: string;
}

interface ListComponent<T> {
  ref: React.RefObject<ListRef<T>>;
}

export interface ListProps<T>
  extends Omit<FlashListProps<T>, 'renderItem' | 'children'>,
    Partial<ListComponent<T>> {
  data: T[];
  children: (item: T, index: number) => JSX.Element;
}
