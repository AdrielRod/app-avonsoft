import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from '@modules/hub/mobile/screens/Search/styles';
import {
  ClientList,
  FilterOptions,
  Header,
} from '@modules/hub/mobile/components';
import { Touchable } from '@dls/components';
import { theme } from '@dls/themes/colors';
import { useSignOut } from '@modules/auth/business/useCases';
import type { FilterType } from '@modules/hub/mobile/screens/Search/interfaces';
import { usePopupMenu } from '@shared/hooks';

function Search() {
  const { anchorRef, layout, popupMenuRef, onLayoutAnchor, onClickOnAnchor } =
    usePopupMenu();

  const signOut = useSignOut();

  const [filter, setFilter] = useState<FilterType>('name');

  const [search, setSearch] = useState('');

  function openFilterOptions() {
    onClickOnAnchor();
    popupMenuRef.current?.open();
  }

  return (
    <View style={styles.container}>
      <Header
        label="search"
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
      <ClientList {...{ searchTerm: search, filter }} />
    </View>
  );
}

export default Search;
