import { forwardRef, Ref } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { TouchableOpacityProps } from 'react-native';

import type { TouchableProps } from '@dls/components/Touchable/interfaces';

function Touchable({ children, ...rest }: TouchableProps) {
  return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
}

const TouchableWithRef = forwardRef(
  ({ ...rest }: TouchableOpacityProps, ref: Ref<View>) => (
    <TouchableOpacity {...rest} ref={ref} />
  ),
);
Touchable.Animated = Animated.createAnimatedComponent(Touchable);
Touchable.WithRef = TouchableWithRef;

export default Touchable;
