import { ReactNode } from 'react';
import { ViewProps } from 'react-native';

export interface PopupProps {
  children: ReactNode;
  contentContainerStyle: ViewProps;
}

export interface PopupRef {
  open: () => void;
  close: () => void;
}

export interface PopupLayout {
  x: number;
  y: number;
  width: number;
  height: number;
}
