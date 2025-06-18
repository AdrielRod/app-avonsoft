import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LinearGradientText } from '@dls/components';
import type { HeaderProps } from '@modules/hub/mobile/components/Header/interfaces';
import { styles } from '@modules/hub/mobile/components/Header/styles';

function Header({
  label,
  titleProps,
  containerProps,
  RenderLeftComponent,
}: HeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      {...containerProps}
      style={[styles.container, { marginTop: insets.top }]}>
      <LinearGradientText style={styles.title} {...titleProps}>
        {label}
      </LinearGradientText>

      {RenderLeftComponent}
    </View>
  );
}

export default Header;
