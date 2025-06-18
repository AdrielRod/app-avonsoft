import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { EditClientForm } from '@modules/hub/business/forms/useEditClientForm/interfaces';
import { editClientSchema } from '@modules/hub/business/forms/useEditClientForm/schema';
import { Toast } from '@dls/components';
import { useNavigation } from '@shared/hooks';
import { useEditClient } from '@modules/hub/business/useCases';
import type { EditClientParams } from '@modules/hub/business/useCases/useEditClient/interfaces';

export function useEditClientForm() {
  const { mutate, isLoading } = useEditClient();

  const { getScreenParams } = useNavigation();

  const { client } = getScreenParams('hub/client');

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<EditClientForm>({
    resolver: zodResolver(editClientSchema),
    defaultValues: {
      email: client.email,
      name: client.name,
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
      const params: EditClientParams = {
        name: data.name,
        id: client.id,
      };

      mutate(params);
    }),
  );

  return { control, onSubmit, setValue, getValues, isLoading };
}
