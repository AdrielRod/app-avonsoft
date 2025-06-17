import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// import { showToast } from '@dls/components/Toast/methods';
import { SignInSchema } from '@modules/auth/business/forms/SignInForm/interfaces';
import { signInSchema } from '@modules/auth/business/forms/SignInForm/schema';

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
      //   const errorMessages = Object.values(errors)
      //     .map(error => {
      //       const messageKey = error.message;
      //       if (messageKey) return t(messageKey, { defaultValue: messageKey });
      //     })
      //     .filter((message, index, self) => self.indexOf(message) === index)
      //     .join('\n');

      //   showToast({
      //     title: t('toastErrorTitle'),
      //     message: errorMessages,
      //   });

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

      //   mutate(params);
    }),
  );

  return { control, onSubmit };
}
