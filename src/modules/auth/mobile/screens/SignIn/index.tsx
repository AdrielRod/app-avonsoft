import { Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Input, LinearGradientText, Touchable } from '@dls/components';
import { styles } from '@modules/auth/mobile/screens/SignIn/styles';
import { Logo } from '@modules/auth/mobile/assets';
import { useSignInForm } from '@modules/auth/business/forms';
import { Button } from '@modules/auth/mobile/components';
import { useNavigation } from '@shared/hooks';

function SignIn() {
  const signInForm = useSignInForm();

  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  function onGoToSignUp() {
    navigation.navigate('auth/sign-up');
  }

  return (
    <View style={styles.container}>
      <LinearGradientText style={[styles.title, { marginTop: insets.top }]}>
        join in your account
      </LinearGradientText>

      <Image source={Logo} style={styles.avantsoft} />

      <View style={styles.inputField}>
        <Input
          control={signInForm.control}
          name="username"
          placeholder="email"
        />

        <Input
          control={signInForm.control}
          name="password"
          placeholder="password"
          kind="password"
        />
      </View>

      <Button>sign in</Button>

      <Touchable onPress={onGoToSignUp}>
        <Text style={styles.textSignUp}>dont have an account? sign up</Text>
      </Touchable>
    </View>
  );
}

export default SignIn;
