import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SignInSchema } from '@modules/auth/business/forms/SignUpForm/interfaces';
import { signUpSchema } from '@modules/auth/business/forms/SignUpForm/schema';
import { Toast } from '@dls/components';
import { useSignUp } from '@modules/auth/business/useCases';
import { SignUpParams } from '@modules/auth/business/useCases/useSignUp/interfaces';

export function useSignUpForm() {
  const { mutate, isLoading } = useSignUp();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
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
      if (data.confirmPassword !== data.password) {
        setError('confirmPassword', {
          message: 'Password does not match',
        });

        return;
      }

      const params: SignUpParams = {
        email: data.username,
        password: data.password,
      };

      mutate(params);
    }),
  );

  return { control, onSubmit, isLoading };
}
