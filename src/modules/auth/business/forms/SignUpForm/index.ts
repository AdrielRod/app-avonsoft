import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// import { showToast } from '@dls/components/Toast/methods';
import { SignInSchema } from '@modules/auth/business/forms/SignUpForm/interfaces';
import { signUpSchema } from '@modules/auth/business/forms/SignUpForm/schema';

export function useSignUpForm() {
  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });

  const handleErrors = (callback: Function) => () => {
    const isThereAnyError = Object.values(errors)[0] ?? null;

    if (isThereAnyError) {
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
