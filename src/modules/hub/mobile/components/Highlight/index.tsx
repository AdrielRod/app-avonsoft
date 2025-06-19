import {
  HighlightContainerProps,
  HighlightLabelProps,
  HighlightTitleProps,
} from '@modules/hub/mobile/components/Highlight/interfaces';
import { styles } from '@modules/hub/mobile/components/Highlight/styles';
import { Text, View } from 'react-native';

function Title({ children, ...rest }: HighlightTitleProps) {
  return (
    <Text {...rest} style={[styles.title, rest.style]}>
      {children}
    </Text>
  );
}

function Container({ children, ...rest }: HighlightContainerProps) {
  return (
    <View {...rest} style={[styles.container, rest.style]}>
      {children}
    </View>
  );
}

function Label({ children, ...rest }: HighlightLabelProps) {
  return (
    <Text {...rest} style={[styles.label, rest.style]}>
      {children}
    </Text>
  );
}

const Highlight = {
  Label,
  Title,
  Container,
};

export default Highlight;
