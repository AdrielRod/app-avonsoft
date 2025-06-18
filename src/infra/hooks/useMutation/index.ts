import { useMutation as useReactMutation } from '@tanstack/react-query';

import type {
  MutationProps,
  MutationReturn,
} from '@infra/hooks/useMutation/interfaces';

export function useMutation<T, D>({
  mutationFn,
  onSuccess,
  onError,
}: MutationProps<T, D>): MutationReturn<T, D> {
  const mutation = useReactMutation({
    mutationFn,
    onSuccess,
    onError,
  });

  return {
    data: mutation.data,
    mutate: mutation.mutate,
    mutateAsync: mutation.mutateAsync,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  };
}
