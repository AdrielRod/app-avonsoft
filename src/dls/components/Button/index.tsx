import { Text } from 'react-native';
import type { ButtonProps } from '@dls/components/Button/interfaces';
import { styles } from '@dls/components/Button/styles';
import Touchable from '@dls/components/Touchable';

export function Button({ children, textProps, touchableProps }: ButtonProps) {
  return (
    <Touchable style={styles.button} {...touchableProps}>
      <Text {...textProps}>{children}</Text>
    </Touchable>
  );
}

export default Button;
