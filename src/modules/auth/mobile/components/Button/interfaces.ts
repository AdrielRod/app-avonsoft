import { TextProps, TouchableOpacityProps } from 'react-native';

export interface ButtonProps {
  touchableProps?: TouchableOpacityProps;
  textProps?: TextProps;
  children: React.ReactNode;
}
