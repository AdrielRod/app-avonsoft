import { theme } from '@dls/themes/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: theme.COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  avantsoft: {
    alignSelf: 'center',
    marginBottom: 40,
  },
  inputField: {
    gap: 16,
    flex: 1,
    marginTop: 40,
  },
  textSignUp: {
    color: theme.COLORS.contrast,
    fontSize: 12,
    alignSelf: 'center',
    marginTop: 12,
  },
});
