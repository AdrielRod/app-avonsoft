import { Text } from 'react-native';

import { List } from '@dls/components';
import { useClientList } from '@modules/hub/business/useCases';
import { ClientListProps } from '@modules/hub/mobile/components/ClientList/interfaces';
import ClientItem from '@modules/hub/mobile/components/ClientItem';

function ClientList({
  searchTerm,
  filter,
  ListHeaderComponent,
}: ClientListProps) {
  const { data, fetchNextPage, refetch, isRefetching } = useClientList({
    filter,
    searchTerm,
  });

  return (
    <List
      data={data?.items}
      onEndReached={fetchNextPage}
      ListHeaderComponent={ListHeaderComponent}
      refreshing={isRefetching}
      onRefresh={refetch}
      estimatedItemSize={40}>
      {item => <ClientItem {...item} />}
    </List>
  );
}

export default ClientList;
