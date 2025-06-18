import { Text } from 'react-native';

import { List } from '@dls/components';
import { useClientList } from '@modules/hub/business/useCases';
import { ClientListProps } from '@modules/hub/mobile/components/ClientList/interfaces';
import ClientItem from '@modules/hub/mobile/components/ClientItem';
import { useNavigation } from '@shared/hooks';
import { useFocusEffect } from '@react-navigation/native';

function ClientList({
  searchTerm,
  filter,
  ListHeaderComponent,
}: ClientListProps) {
  const navigation = useNavigation();

  const isFocused = navigation.isFocused();

  const { data, fetchNextPage, refetch, isRefetching } = useClientList({
    filter,
    searchTerm,
  });

  function onNavigateToClient(item: ClientModel) {
    navigation.navigate('hub/client', { client: item });
  }

  useFocusEffect(() => {
    if (isFocused) {
      refetch();
    }
  });

  return (
    <List
      data={data?.items}
      onEndReached={fetchNextPage}
      ListHeaderComponent={ListHeaderComponent}
      refreshing={isRefetching}
      onRefresh={refetch}
      estimatedItemSize={40}>
      {item => <ClientItem {...{ ...item, onNavigateToClient }} />}
    </List>
  );
}

export default ClientList;
