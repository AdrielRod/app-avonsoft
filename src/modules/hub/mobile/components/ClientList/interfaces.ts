import { JSX } from 'react';
import { FilterType } from '@modules/hub/mobile/screens/Home/interfaces';

export interface ClientListProps {
  searchTerm: string;
  filter: FilterType;
  ListHeaderComponent?: JSX.Element;
}
