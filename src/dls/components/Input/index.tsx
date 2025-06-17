import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';
import {
  type NativeSyntheticEvent,
  type TextInputFocusEventData,
} from 'react-native/types';
import { Ionicons } from '@expo/vector-icons';
import { Controller, type FieldValues } from 'react-hook-form';

import Map from '@dls/components/Map';
import Spinner from '@dls/components/Spinner';
import If from '@dls/components/If';
import Touchable from '@dls/components/Touchable';

import type { InputProps } from '@dls/components/Input/interfaces';
import { styles } from '@dls/components/Input/styles';
import { theme } from '@dls/themes/colors';

function Input<T extends FieldValues>({
  name,
  control,
  title = '',
  renderIcon = null,
  kind = 'default',
  pattern = (text: string) => text,
  ...rest
}: InputProps<T>) {
  const isPassword = kind === 'password';

  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(!isPassword);

  function onFocus() {
    setIsFocused(true);
  }

  function onBlur(e: NativeSyntheticEvent<TextInputFocusEventData>) {
    setIsFocused(false);
    setIsFilled(!!e.nativeEvent.text);
  }

  function onVisible() {
    setIsVisible(prevState => !prevState);
  }

  return (
    <Controller<T>
      {...{
        name,
        control,
        render: ({ field: { value, onChange }, fieldState: { error } }) => {
          const isError = !!error?.message;

          function onChangeText(text: string) {
            onChange(pattern(text));
          }

          return (
            <Animated.View layout={LinearTransition} style={styles.container}>
              <If condition={!!title}>
                <Text style={styles.title}>{title}</Text>
              </If>

              <View
                style={[
                  styles.content,
                  {
                    borderColor: isError
                      ? 'red'
                      : isFocused
                      ? theme.COLORS.primary
                      : theme.COLORS.tertiary,
                  },
                ]}
                {...{ isError, isFilled, isFocused }}>
                {renderIcon}

                <TextInput
                  {...{
                    ...rest,
                    style: styles.textInput,
                    autoCapitalize: 'none',
                    autoCorrect: false,
                    secureTextEntry: isPassword && !isVisible,
                    placeholderTextColor: theme.COLORS.tertiary,
                    isVisible,
                    value,
                    onBlur,
                    onFocus,
                    onChangeText,
                  }}
                />

                <Map
                  currentComponent={kind}
                  components={{
                    default: null,
                    password: (
                      <Touchable onPress={onVisible}>
                        <Ionicons
                          name={isVisible ? 'eye-off' : 'eye'}
                          size={24}
                          color={theme.COLORS.tertiary}
                        />
                      </Touchable>
                    ),
                    loading: (
                      <View>
                        <Spinner />
                      </View>
                    ),
                  }}
                />
              </View>

              <If condition={isError}>
                <Animated.Text
                  entering={FadeIn}
                  exiting={FadeOut}
                  layout={LinearTransition}
                  style={styles.textError}>
                  {error?.message}
                </Animated.Text>
              </If>
            </Animated.View>
          );
        },
      }}
    />
  );
}

export default Input;
