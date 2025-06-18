import { theme } from '@dls/themes/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: theme.COLORS.background,
  },
  inputField: {
    gap: 16,
    flex: 1,
    marginTop: 40,
  },
  dateOfBirthText: {
    color: theme.COLORS.contrast,
    fontSize: 12,
  },
  datePicker: {
    backgroundColor: theme.COLORS.contrast,
    borderRadius: 8,
  },
  buttonDelete: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#FF0000',
    borderRadius: 12,
    width: 300,
  },
});
