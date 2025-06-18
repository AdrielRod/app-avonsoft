import { RefObject } from 'react';

import { PopupLayout, PopupRef } from '@dls/components/Popup/interfaces';
import type { FilterType } from '@modules/hub/mobile/screens/Home/interfaces';

export interface FilterOptionsProps {
  layout: PopupLayout | null;
  popupMenuRef: RefObject<PopupRef | null>;
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}
