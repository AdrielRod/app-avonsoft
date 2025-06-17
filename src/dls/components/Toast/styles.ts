import { theme } from '@dls/themes/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    gap: 8,
    zIndex: 999,
    position: 'absolute',
  },
  content: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    backgroundColor: theme.COLORS.contrast,
  },
  left: {
    width: 40,
    height: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.COLORS.secondary,
  },
  right: {
    marginRight: 8,
  },
  message: {
    flex: 1,
    color: theme.COLORS.background,
    fontSize: 12,
  },
});
