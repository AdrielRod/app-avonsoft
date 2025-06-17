import type { TextInputProps } from 'react-native/types';

import type { Control, FieldPath, FieldValues } from 'react-hook-form';

interface InputConfig {
  title: string;
  kind: 'default' | 'password' | 'loading';
  renderIcon: React.ReactNode;
  pattern(text: string): string;
}

export interface InputProps<T extends FieldValues>
  extends TextInputProps,
    Partial<InputConfig> {
  name: FieldPath<T>;
  control: Control<T>;
}

export interface VisibleStyleProps {
  isVisible: boolean;
}

export interface ContentStyleProps extends FocusedStyleProps {
  isError: boolean;
}
