import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import type { DatePickerOptions } from '@dls/components/DatePicker/interfaces';
import {
  hideDatePicker,
  showDatePicker,
} from '@dls/components/DatePicker/methods';
import { useEventListener } from '@shared/hooks';
import { theme } from '@dls/themes/colors';
import { View } from 'react-native';

function DatePicker() {
  const [options, setOptions] = useState<DatePickerOptions | null>(null);

  const isVisible = options !== null;

  useEventListener<DatePickerOptions>('DatePicker:show', value =>
    setOptions(value),
  );

  useEventListener('DatePicker:hide', () => {
    setOptions(null);
  });

  function onChange(date: Date | null = null) {
    options!.resolve(date);

    hideDatePicker();
  }

  if (isVisible)
    return (
      <View
        style={{
          flex: 1,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        
      </View>
    );
}

DatePicker.show = showDatePicker;
DatePicker.hide = hideDatePicker;

export default DatePicker;
