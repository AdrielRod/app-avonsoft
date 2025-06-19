import { useFont } from '@shopify/react-native-skia';
import { CartesianChart, Line } from 'victory-native';
import { View } from 'react-native';

import { styles } from '@modules/hub/mobile/components/Chart/styles';
import { theme } from '@dls/themes/colors';
import { useListSalesPerDay } from '@modules/hub/business/useCases';

function Chart() {
  const { data } = useListSalesPerDay();
  const font = useFont(require('@dls/assets/fonts/Inter_18pt-Regular.ttf'));

  return (
    <View style={styles.chartView}>
      <CartesianChart
        data={data as { x: string; y: number }[]}
        xKey="x"
        axisOptions={{
          font,
          labelColor: theme.COLORS.contrast,
          lineColor: theme.COLORS.contrast,
        }}
        frame={{
          lineColor: theme.COLORS.contrast,
        }}
        yKeys={['y']}>
        {({ points }) => (
          <Line
            points={points.y}
            color={theme.COLORS.primary}
            strokeWidth={1}
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
