import Spinner from '@dls/components/Spinner';
import { View } from 'react-native';

function Footer() {
  return (
    <View style={{ height: 80, justifyContent: 'center' }}>
      <Spinner />
    </View>
  );
}

export default Footer;
