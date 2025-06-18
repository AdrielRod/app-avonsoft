import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SignInSchema } from '@modules/auth/business/forms/SignInForm/interfaces';
import { signInSchema } from '@modules/auth/business/forms/SignInForm/schema';
import { Toast } from '@dls/components';

export function useSignInForm() {
  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    mode: 'onChange',
  });

  const handleErrors = (callback: Function) => () => {
    const isThereAnyError = Object.values(errors)[0] ?? null;

    if (isThereAnyError) {
      Toast.show({
        message: isThereAnyError.message!,
      });

      return;
    }

    callback();
  };

  const onSubmit = handleErrors(
    handleSubmit(data => {
      const params = {
        username: data.username,
        password: data.password,
      };
    }),
  );

  return { control, onSubmit };
}
