import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export interface StyleSheetApi {
  create: (styles: object) => object;
}

export type StyleSheetProps = ViewStyle | TextStyle | ImageStyle;
export type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

