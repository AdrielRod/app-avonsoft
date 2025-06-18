import { Text, TouchableOpacity, View } from 'react-native';
import type { ClientItemProps } from '@modules/hub/mobile/components/ClientItem/interfaces';
import { styles } from '@modules/hub/mobile/components/ClientItem/styles';

function ClientItem(item: ClientItemProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => item.onNavigateToClient(item)}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.missingLetter}</Text>
      </View>

      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ClientItem;
