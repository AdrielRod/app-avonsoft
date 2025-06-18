import { theme } from '@dls/themes/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: theme.COLORS.background,
  },
  chartView: {
    width: '100%',
    height: 300,
  },
  chartTitle: {
    marginVertical: 10,
  },
  clientTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.COLORS.contrast,
    marginVertical: 24,
  },
  inputArea: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.COLORS.contrast,
    borderRadius: 8,
    width: '100%',
    height: 48,
  },
  input: {
    paddingHorizontal: 16,
    width: '85%',
    color: theme.COLORS.contrast,
  },
  buttonFilter: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
