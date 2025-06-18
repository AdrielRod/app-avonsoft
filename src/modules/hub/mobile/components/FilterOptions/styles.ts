import { theme } from '@dls/themes/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 110,
    backgroundColor: theme.COLORS.background,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.COLORS.contrast,
    padding: 16,
    justifyContent: 'space-between',
    elevation: 3,
  },
  optionButton: {},
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: theme.COLORS.background,
  },
  optionText: {
    fontSize: 16,
  },
});
