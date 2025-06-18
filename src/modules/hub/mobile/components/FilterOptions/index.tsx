import { Text, View } from 'react-native';
import { Popup, Touchable } from '@dls/components';
import { theme } from '@dls/themes/colors';
import { FilterOptionsProps } from '@modules/hub/mobile/components/FilterOptions/interfaces';
import { styles } from '@modules/hub/mobile/components/FilterOptions/styles';
import { FilterType } from '@modules/hub/mobile/screens/Home/interfaces';

function FilterOptions({
  layout,
  popupMenuRef,
  filter,
  setFilter,
}: FilterOptionsProps) {
  const options = [
    {
      id: 1,
      type: 'name',
      label: 'Filter by name',
    },
    {
      id: 2,
      type: 'email',
      label: 'Filter by email',
    },
  ];

  return (
    <Popup
      {...{
        contentContainerStyle: {
          style: {
            left: layout?.x! - 80,
            top: (layout?.y ?? 0) + (layout?.height ?? 0) + 10,
            position: 'absolute',
          },
        },
        ref: popupMenuRef,
      }}>
      <View style={styles.container}>
        {options.map(option => {
          let color = theme.COLORS.tertiary;

          if (option.type === filter) {
            color = theme.COLORS.primary;
          }

          return (
            <Touchable
              key={option.id}
              style={styles.optionButton}
              onPress={() => setFilter(option.type as FilterType)}>
              <Text
                style={[
                  styles.optionText,
                  {
                    color,
                  },
                ]}>
                {option.label}
              </Text>
            </Touchable>
          );
        })}
      </View>
    </Popup>
  );
}

export default FilterOptions;
