import { Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Header, Logo } from '@modules/hub/mobile/components';
import {
  Button,
  DatePicker,
  If,
  Input,
  Spinner,
  Touchable,
} from '@dls/components';
import { useCreateClientForm } from '@modules/hub/business/forms';
import { styles } from '@modules/hub/mobile/screens/CreateClient/styles';
import { theme } from '@dls/themes/colors';
import { useRef, useState } from 'react';

function CreateClient() {
  const createClientForm = useCreateClientForm();

  async function handleDatePicker(date: Date | undefined) {
    if (!date) return;

    createClientForm.setValue('dateOfBirth', date);
  }

  return (
    <View style={styles.container}>
      <Header label="add customer" RenderLeftComponent={<Logo />} />
      <View style={styles.inputField}>
        <Input
          control={createClientForm.control}
          name="name"
          placeholder="name"
        />

        <Input
          control={createClientForm.control}
          name="email"
          placeholder="email"
        />

        <Text style={styles.dateOfBirthText}>date of birth</Text>
        <DateTimePicker
          mode="date"
          value={createClientForm.getValues('dateOfBirth')!}
          display="spinner"
          locale="en-US"
          accentColor={theme.COLORS.background}
          style={styles.datePicker}
          onChange={(_, date) => handleDatePicker(date)}
          minimumDate={new Date('1900-01-01')}
          maximumDate={new Date()}
        />
      </View>

      <Button
        touchableProps={{
          onPress: createClientForm.onSubmit,
        }}>
        <If condition={createClientForm.isLoading} elseRender={'create'}>
          <Spinner kind="primary" />
        </If>
      </Button>
    </View>
  );
}

export default CreateClient;
