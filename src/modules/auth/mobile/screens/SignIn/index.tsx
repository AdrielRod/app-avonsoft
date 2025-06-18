import { Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  If,
  Input,
  LinearGradientText,
  Spinner,
  Touchable,
  Button,
} from '@dls/components';
import { styles } from '@modules/auth/mobile/screens/SignIn/styles';
import { Logo } from '@modules/auth/mobile/assets';
import { useSignInForm } from '@modules/auth/business/forms';
import { useNavigation } from '@shared/hooks';
import { useAuth } from '@modules/auth/business/stores';

function SignIn() {
  const signInForm = useSignInForm();

  const auth = useAuth();

  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  function onGoToSignUp() {
    console.log(auth.user);

    navigation.navigate('auth/sign-up');
  }

  function onSubmit() {
    signInForm.onSubmit();
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

      <Button
        touchableProps={{
          onPress: onSubmit,
        }}>
        <If condition={signInForm.isLoading} elseRender={'sign in'}>
          <Spinner kind="primary" />
        </If>
      </Button>

      <Touchable onPress={onGoToSignUp}>
        <Text style={styles.textSignUp}>dont have an account? sign up</Text>
      </Touchable>
    </View>
  );
}

export default SignIn;
