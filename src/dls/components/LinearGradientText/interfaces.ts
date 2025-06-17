import { LinearGradientProps } from 'expo-linear-gradient';
import { ColorValue, TextProps } from 'react-native';

export interface GradientTextProps extends TextProps {
  colors?: LinearGradientProps['colors'];
}
