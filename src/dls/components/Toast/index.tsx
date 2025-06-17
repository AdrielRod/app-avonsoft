import { useState } from 'react';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

import type {
  ToastItemProps,
  ToastState,
} from '@dls/components/Toast/interfaces';
import { showToast, hideToast } from '@dls/components/Toast/methods';
import { styles } from '@dls/components/Toast/styles';

import { useEventListener, useWindowDimensions } from '@shared/hooks';
import { Text, View } from 'react-native';
import { theme } from '@dls/themes/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function Component({ item }: ToastItemProps) {
  const windowDimensions = useWindowDimensions();

  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const swipeGesture = Gesture.Pan()
    .onUpdate(e => (translateX.value = e.translationX))
    .onEnd(e =>
      Math.abs(e.translationX) > windowDimensions.width * 0.25
        ? runOnJS(hideToast)(item.id)
        : (translateX.value = withTiming(0)),
    );

  function onLayout() {
    setTimeout(hideToast, item.duration, item.id);
  }

  return (
    <GestureDetector gesture={swipeGesture}>
      <Animated.View
        layout={LinearTransition}
        entering={FadeIn}
        exiting={FadeOut}
        style={[animatedStyle, styles.content]}
        onLayout={onLayout}>
        <View style={styles.left}>
          <Ionicons name="warning-outline" size={24} color={theme.COLORS.contrast} />
        </View>

        <Text numberOfLines={3} style={styles.message}>
          {item.message}
        </Text>

        <Text style={styles.right} onPress={() => hideToast(item.id)}>
          <Ionicons name="close" size={24} color={theme.COLORS.contrast} />
        </Text>
      </Animated.View>
    </GestureDetector>
  );
}

function Toast() {
  const [state, setState] = useState<ToastState[]>([]);

  const insets = useSafeAreaInsets();

  useEventListener<ToastState>('Toast:show', params => {
    setState(prev => [...prev, params]);
  });

  useEventListener<string>('Toast:hide', id => {
    setState(prev => prev.filter(item => item.id !== id));
  });

  return (
    <View style={[styles.container, { top: insets.top }]}>
      {state.map(item => (
        <Component key={item.id} {...{ item }} />
      ))}
    </View>
  );
}

export default Toast;

Toast.show = showToast;
Toast.hide = hideToast;
