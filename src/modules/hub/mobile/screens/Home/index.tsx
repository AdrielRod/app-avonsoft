import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from '@modules/hub/mobile/screens/Home/styles';
import { Chart, Header, Highlight } from '@modules/hub/mobile/components';
import { Touchable } from '@dls/components';
import { theme } from '@dls/themes/colors';
import { useSignOut } from '@modules/auth/business/useCases';
import { useListTopSales } from '@modules/hub/business/useCases';

function Home() {
  const signOut = useSignOut();

  const topSales = useListTopSales();

  return (
    <View style={styles.container}>
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

      <Highlight.Title style={styles.chartTitle}>sales per day</Highlight.Title>
      <Chart />

      <View style={styles.highlightsContainer}>
        {topSales.data?.map(sale => (
          <Highlight.Container key={sale.id}>
            <Highlight.Label>{sale.label}</Highlight.Label>
            <Highlight.Title style={styles.highlightTitle}>
              {sale.name}
            </Highlight.Title>
          </Highlight.Container>
        ))}
      </View>
    </View>
  );
}

export default Home;
