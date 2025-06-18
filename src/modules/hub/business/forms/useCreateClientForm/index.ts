import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CreateClientSchema } from '@modules/hub/business/forms/useCreateClientForm/interfaces';
import { createClientSchema } from '@modules/hub/business/forms/useCreateClientForm/schema';
import { Toast } from '@dls/components';
import { useCreateClient } from '@modules/hub/business/useCases';
import { CreateClientRequest } from '@modules/hub/business/useCases/useCreateClient/interfaces';

export function useCreateClientForm() {
  const { mutate, isLoading } = useCreateClient();

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    resetField,
    formState: { errors },
  } = useForm<CreateClientSchema>({
    resolver: zodResolver(createClientSchema),
    defaultValues: {
      dateOfBirth: new Date(),
    },
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
      if (!data.dateOfBirth) {
        Toast.show({
          message: 'Date of birth is required',
        });

        return;
      }

      const params: CreateClientRequest = {
        name: data.name,
        dateOfBirth: data.dateOfBirth.toISOString(),
        email: data.email,
      };

      mutate(params, {
        onSuccess: () => {
          resetField('name');
          resetField('dateOfBirth');
          resetField('email');
        },
      });
    }),
  );

  return { control, onSubmit, setValue, getValues, isLoading };
}
