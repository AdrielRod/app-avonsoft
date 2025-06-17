import { TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

import type { TouchableProps } from '@dls/components/Touchable/interfaces';

function Touchable({ children, ...rest }: TouchableProps) {
  return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
}

Touchable.Animated = Animated.createAnimatedComponent(Touchable);

export default Touchable;
