import { useFont } from '@shopify/react-native-skia';
import { CartesianChart, Line } from 'victory-native';
import { View } from 'react-native';

import { styles } from '@modules/hub/mobile/components/Chart/styles';
import { theme } from '@dls/themes/colors';

function Chart() {
  const font = useFont(require('@dls/assets/fonts/Inter_18pt-Regular.ttf'));

  return (
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
  );
}

export default Chart;
