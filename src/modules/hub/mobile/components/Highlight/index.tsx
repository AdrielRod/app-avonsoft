import { HighlightTitleProps } from '@modules/hub/mobile/components/Highlight/interfaces';
import { styles } from '@modules/hub/mobile/components/Highlight/styles';
import { Text } from 'react-native';

function Label() {}

function Title({ children, ...rest }: HighlightTitleProps) {
  return (
    <Text {...rest} style={[styles.title, rest.style]}>
      {children}
    </Text>
  );
}

function Container() {}

const Highlight = {
  Label,
  Title,
  Container,
};

export default Highlight;
