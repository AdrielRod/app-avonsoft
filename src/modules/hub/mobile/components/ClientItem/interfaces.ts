import { FilterType } from '@modules/hub/mobile/screens/Home/interfaces';

export interface ClientItemProps extends ClientModel {
  onNavigateToClient: (details: ClientModel) => void;
}
