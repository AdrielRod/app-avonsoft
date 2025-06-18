export interface AuthStore {
  user: UserModel;
  signIn: (user: SignInModel) => void;
  signOut: () => void;
  updateUser: (user: Partial<UserModel>) => void;
}
