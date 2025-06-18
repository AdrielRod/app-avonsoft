import { Fragment, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from '@modules/hub/mobile/screens/Home/styles';
import {
  Chart,
  ClientList,
  FilterOptions,
  Header,
  Highlight,
} from '@modules/hub/mobile/components';
import { Touchable } from '@dls/components';
import { theme } from '@dls/themes/colors';
import { useSignOut } from '@modules/auth/business/useCases';
import type { FilterType } from '@modules/hub/mobile/screens/Home/interfaces';
import { usePopupMenu } from '@shared/hooks';

function Home() {
  const signOut = useSignOut();

  const { anchorRef, layout, popupMenuRef, onLayoutAnchor, onClickOnAnchor } =
    usePopupMenu();

  const [filter, setFilter] = useState<FilterType>('name');

  const [search, setSearch] = useState('');

  function openFilterOptions() {
    onClickOnAnchor();
    popupMenuRef.current?.open();
  }

  const renderHeader = (
    <Fragment>
      <Header
        label="home"
        RenderLeftComponent={
          <Touchable onPress={() => signOut.mutate()}>
            <Ionicons
              name="exit-outline"
              size={24}
              color={theme.COLORS.contrast}
            />
          </Touchable>
        }
      />

      <Highlight.Title style={styles.chartTitle}>today's sales</Highlight.Title>

      <Chart />

      <Text style={styles.clientTitle}>clients</Text>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="search clients"
          placeholderTextColor={theme.COLORS.tertiary}
          value={search}
          onChangeText={setSearch}
        />

        <Touchable.WithRef
          onLayout={onLayoutAnchor}
          onPress={openFilterOptions}
          ref={anchorRef}
          style={styles.buttonFilter}>
          <Ionicons
            name="filter-outline"
            size={24}
            color={theme.COLORS.contrast}
          />
        </Touchable.WithRef>

        <FilterOptions
          {...{
            layout,
            filter,
            setFilter,
            popupMenuRef,
          }}
        />
      </View>
    </Fragment>
  );

  return (
    <View style={styles.container}>
      <ClientList
        {...{ searchTerm: search, filter, ListHeaderComponent: renderHeader }}
      />
    </View>
  );
}

export default Home;
