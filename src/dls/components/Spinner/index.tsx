import { ActivityIndicator, View } from 'react-native';

import type { LoadingProps } from '@dls/components/Spinner/interfaces';
import { styles } from '@dls/components/Spinner/styles';
import { theme } from '@dls/themes/colors';

function Spinner({ kind = 'primary', ...rest }: LoadingProps) {
  const color = {
    primary: theme.COLORS.primary,
    secondary: theme.COLORS.secondary,
    tertiary: theme.COLORS.tertiary,
  }[kind];

  return (
    <View style={styles.container}>
      <ActivityIndicator {...{ ...rest, color }} />
    </View>
  );
}

export default Spinner;
