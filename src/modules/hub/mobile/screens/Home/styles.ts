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
  highlightTitle: {
    color: theme.COLORS.background,
    fontSize: 14,
  },
  highlightsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
