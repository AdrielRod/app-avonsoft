import { FlashList } from '@shopify/flash-list';

import {
  Footer,
} from '@dls/components/List/components';
import type {
  ListConstraints,
  ListProps,
} from '@dls/components/List/interfaces';

function List<T extends ListConstraints>({ children, ...rest }: ListProps<T>) {
  return (
    <FlashList<T>
      {...rest}
      keyExtractor={item => String(item.id)}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => children(item, index)}
    />
  );
}

List.Footer = Footer;

export default List;
