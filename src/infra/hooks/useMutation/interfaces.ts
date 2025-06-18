import type {
  UseMutateAsyncFunction,
  UseMutateFunction,
  UseMutationOptions,
} from '@tanstack/react-query';

export interface MutationProps<T, D>
  extends UseMutationOptions<D, Error, T, unknown> {}

export interface MutationReturn<T, D> {
  data: D | void;
  isError: boolean;
  isLoading: boolean;
  mutate: UseMutateFunction<D, Error, T, unknown>;
  mutateAsync: UseMutateAsyncFunction<D, Error, T, unknown>;
}
