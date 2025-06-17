import { Text } from 'react-native';

import MaskedView from '@react-native-masked-view/masked-view';

import LinearGradient from '@dls/components/LinearGradient';
import type { GradientTextProps } from '@dls/components/LinearGradientText/interfaces';
import { theme } from '@dls/themes/colors';

function LinearGradientText({
  children,
  colors = [theme.COLORS.primary, theme.COLORS.secondary],
  ...rest
}: GradientTextProps) {
  return (
    <MaskedView maskElement={<Text {...rest}>{children}</Text>}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Text {...rest} style={[rest.style, { opacity: 0 }]}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}

export default LinearGradientText;
