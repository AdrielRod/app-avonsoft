import { theme } from '@dls/themes/colors';
import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.COLORS.contrast,
  },
  container: {
    borderRadius: 8,
    backgroundColor: theme.COLORS.contrast,
    width: width / 3 - 16,
    marginTop: 8,
    padding: 16,
    height: 100,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
    color: theme.COLORS.background,
  },
});
