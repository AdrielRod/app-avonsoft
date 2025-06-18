import { ViewProps } from 'react-native';

import { GradientTextProps } from '@dls/components/LinearGradientText/interfaces';

export interface HeaderProps {
  label: string;
  RenderLeftComponent: React.ReactNode;
  containerProps?: ViewProps;
  titleProps?: GradientTextProps;
}
