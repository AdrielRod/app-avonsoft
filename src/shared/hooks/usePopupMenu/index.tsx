import { useState, useRef } from 'react';
import { LayoutChangeEvent, View } from 'react-native';

import type { PopupLayout, PopupRef } from '@dls/components/Popup/interfaces';

export function usePopupMenu() {
  const [layout, setLayout] = useState<PopupLayout | null>(null);

  const popupMenuRef = useRef<PopupRef | null>(null);
  const anchorRef = useRef<View | null>(null);

  const onLayoutAnchor = (_: LayoutChangeEvent) => {
    if (!anchorRef.current) return;

    anchorRef.current?.measure((x, y, width, height, pageX, pageY) => {
      setLayout({ x: pageX, y: pageY, width, height });
    });
  };

  const onClickOnAnchor = () => {
    if (!anchorRef.current) return;

    popupMenuRef.current?.open();
    anchorRef.current.measure((x, y, width, height, pageX, pageY) => {
      setLayout({ x: pageX, y: pageY, width, height });
    });
  };

  return {
    layout,
    popupMenuRef,
    anchorRef,
    onLayoutAnchor,
    onClickOnAnchor,
  };
}
