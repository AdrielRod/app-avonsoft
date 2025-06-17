import type { ActivityIndicatorProps } from 'react-native/types';

export interface LoadingProps
  extends ActivityIndicatorProps,
    Partial<SpinnerStyleProps> {}

export interface SpinnerStyleProps {
  kind: 'primary' | 'secondary' | 'tertiary';
}
