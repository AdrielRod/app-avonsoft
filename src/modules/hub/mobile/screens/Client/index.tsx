import { Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

import { Header, Logo } from '@modules/hub/mobile/components';
import { Button, If, Input, Spinner, Touchable } from '@dls/components';
import { useEditClientForm } from '@modules/hub/business/forms';
import { theme } from '@dls/themes/colors';
import { styles } from '@modules/hub/mobile/screens/Client/styles';
import { useNavigation } from '@shared/hooks';

function Client() {
  const editClientForm = useEditClientForm();
  const navigation = useNavigation();

  const { client } = navigation.getScreenParams('hub/client');

  function goBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Header
        label="add clients"
        RenderLeftComponent={
          <Touchable onPress={goBack}>
            <Ionicons name="close" size={24} color={theme.COLORS.contrast} />
          </Touchable>
        }
      />

      <View style={styles.inputField}>
        <Input
          control={editClientForm.control}
          name="name"
          placeholder="name"
        />

        <Input
          control={editClientForm.control}
          name="email"
          editable={false}
          placeholder="email"
        />

        <Text style={styles.dateOfBirthText}>date of birth</Text>
        <DateTimePicker
          mode="date"
          value={new Date(client.dateOfBirth)}
          display="spinner"
          disabled
          locale="en-US"
          accentColor={theme.COLORS.background}
          style={styles.datePicker}
          minimumDate={new Date('1900-01-01')}
          maximumDate={new Date()}
        />
      </View>

      <Button
        touchableProps={{
          onPress: editClientForm.onSubmit,
        }}>
        <If condition={editClientForm.isLoading} elseRender={'edit'}>
          <Spinner kind="primary" />
        </If>
      </Button>
    </View>
  );
}

export default Client;
