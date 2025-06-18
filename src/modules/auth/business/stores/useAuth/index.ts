import { persist, subscribeWithSelector } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

import { authStoreConfig } from '@modules/auth/business/stores/useAuth/config';
import type { AuthStore } from '@modules/auth/business/stores/useAuth/interfaces';

const user = {} as UserModel;

export const useAuth = createWithEqualityFn(
  subscribeWithSelector(
    persist<AuthStore>(
      (set, get) => ({
        user,
        signIn: user => set({ user }),
        signOut: () => set({ user }),
        updateUser: data => set({ user: { ...get().user, ...data } }),
      }),
      authStoreConfig<AuthStore>({ name: 'auth' }),
    ),
  ),
);
