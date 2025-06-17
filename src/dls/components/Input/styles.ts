import StyleSheet from '@dls/providers/useStyleSheet';

export const styles = StyleSheet.create(theme => ({
  container: {
    flexShrink: 1,
    gap: 6,
    width: 40,
  },
  title: {
    color: theme.COLORS.contrast,
    fontSize: 12,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    gap: 4,
    paddingVertical: 0,
    paddingHorizontal: 12,
  },
  textInput: {
    flex: 1,
    height: '100%',
    color: theme.COLORS.contrast,
    fontSize: 16,
  },
  textError: {
    color: 'red',
    fontSize: 12,
  }
}));
