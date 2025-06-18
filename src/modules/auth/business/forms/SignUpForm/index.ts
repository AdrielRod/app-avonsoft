import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SignInSchema } from '@modules/auth/business/forms/SignUpForm/interfaces';
import { signUpSchema } from '@modules/auth/business/forms/SignUpForm/schema';
import { Toast } from '@dls/components';

export function useSignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signUpSchema),
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
