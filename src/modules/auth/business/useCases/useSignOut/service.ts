import type { SignOutParams } from '@modules/auth/business/useCases/useSignOut/interfaces';
import AvansoftApi from '@infra/networking/avansoftApi';
import Query from '@core/query';

export async function signOutService(_: SignOutParams) {
  // Se tivesse algo a ser tratado no back após que o usuário deslogasse. No caso desse teste não há.
  // await AvansoftApi.post<{}, SignOutResponse>('auth/signout', {});

  Query.clear();
}
