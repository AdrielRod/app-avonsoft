import { theme } from '@dls/themes/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.COLORS.secondary,
    marginRight: 16,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.COLORS.contrast,
  },
  content: {},
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.COLORS.contrast,
  },
  email: {
    fontSize: 12,
    color: theme.COLORS.contrast,
  },
});
