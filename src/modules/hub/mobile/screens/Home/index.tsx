import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from '@modules/hub/mobile/screens/Home/styles';
import { Chart, Header, Highlight } from '@modules/hub/mobile/components';
import { Touchable } from '@dls/components';
import { theme } from '@dls/themes/colors';
import { useSignOut } from '@modules/auth/business/useCases';
import { useCreateClient } from '@modules/hub/business/useCases';

function Home() {
  const signOut = useSignOut();
  const createClient = useCreateClient();

  return (
    <View style={styles.container}>
      <Header
        label="home"
        RenderLeftComponent={
          <Touchable
            onPress={() =>
              createClient.mutate({
                dateOfBirth: new Date().toISOString(),
                email: 'R7rX2@example.com',
                name: 'John Doe',
              })
            }>
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
    </View>
  );
}

export default Home;
