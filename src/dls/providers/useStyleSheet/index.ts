import { StyleSheet as StyleSheetRN } from 'react-native';

import type { StyleSheetProps } from '@dls/providers/useStyleSheet/interfaces';
import { theme as themeRN } from '@dls/themes/colors';
import { ThemeType } from '@dls/themes/interfaces';

export const StyleSheet = {
  create: <T extends string>(
    styles: (themeRN: ThemeType) => Record<T, StyleSheetProps>,
  ) => StyleSheetRN.create(styles(themeRN)),
};

export default StyleSheet;
