import { CartesianChart, Line } from 'victory-native';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from '@modules/hub/mobile/screens/Home/styles';
import { Header, Highlight } from '@modules/hub/mobile/components';
import { Touchable } from '@dls/components';
import { theme } from '@dls/themes/colors';
import { useFont } from '@shopify/react-native-skia';

function Home() {
  const font = useFont(require('@dls/assets/fonts/Inter_18pt-Regular.ttf'));
  const data = [
    { x: '01/01', y: 150 },
    { x: '02/01', y: 200 },
    { x: '03/01', y: 270 },
    { x: '04/01', y: 180 },
  ];

  return (
    <View style={styles.container}>
      <Header
        label="home"
        RenderLeftComponent={
          <Touchable>
            <Ionicons
              name="exit-outline"
              size={24}
              color={theme.COLORS.contrast}
            />
          </Touchable>
        }
      />

      <Highlight.Title style={styles.chartTitle}>today's sales</Highlight.Title>
      <View style={styles.chartView}>
        <CartesianChart
          data={[
            { x: '01/01', y: 150 },
            { x: '02/01', y: 200 },
            { x: '03/01', y: 270 },
            { x: '04/01', y: 180 },
          ]}
          xKey="x"
          axisOptions={{
            font,
            labelColor: theme.COLORS.contrast,
            lineColor: theme.COLORS.contrast,
            tickCount: 3,
          }}
          frame={{
            lineColor: theme.COLORS.contrast,
          }}
          yKeys={['y']}>
          {({ points }) => (
            <Line
              points={points.y}
              color={theme.COLORS.primary}
              strokeWidth={3}
              animate={{
                type: 'timing',
              }}
            />
          )}
        </CartesianChart>
      </View>
    </View>
  );
}

export default Home;
