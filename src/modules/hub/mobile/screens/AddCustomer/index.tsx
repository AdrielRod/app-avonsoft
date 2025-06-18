import { View } from 'react-native';

import { styles } from '@modules/hub/mobile/screens/Home/styles';
import { Header, Logo } from '@modules/hub/mobile/components';

function AddCustomer() {
  return (
    <View style={styles.container}>
      <Header label="add customer" RenderLeftComponent={<Logo />} />
    </View>
  );
}

export default AddCustomer;
