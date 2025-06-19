import { RefreshControl, Text, View } from 'react-native';

import { List } from '@dls/components';
import { useClientList } from '@modules/hub/business/useCases';
import { ClientListProps } from '@modules/hub/mobile/components/ClientList/interfaces';
import ClientItem from '@modules/hub/mobile/components/ClientItem';
import { useNavigation } from '@shared/hooks';
import Query from '@core/query';
import { QueryKeys } from '@shared/enums/queryKeys';
import { theme } from '@dls/themes/colors';

function ClientList({
  searchTerm,
  filter,
  ListHeaderComponent,
}: ClientListProps) {
  const navigation = useNavigation();

  const { data, fetchNextPage, refetch, isRefetching } = useClientList({
    filter,
    searchTerm,
  });

  function onNavigateToClient(item: ClientModel) {
    navigation.navigate('hub/client', { client: item });
  }

  function handleRefresh() {
    refetch();
    Query.invalidate([QueryKeys.LIST_SALES_PER_DAY]);
  }

  return (
    <View style={{ flex: 1 }}>
      <List
        data={data?.items}
        keyExtractor={item => item.id.toString()}
        onEndReached={fetchNextPage}
        contentContainerStyle={{}}
        ListHeaderComponent={ListHeaderComponent}
        refreshing={isRefetching}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={handleRefresh}
            tintColor={theme.COLORS.contrast}
          />
        }
        onRefresh={handleRefresh}
        estimatedItemSize={40}>
        {item => <ClientItem {...{ ...item, onNavigateToClient }} />}
      </List>
    </View>
  );
}

export default ClientList;
