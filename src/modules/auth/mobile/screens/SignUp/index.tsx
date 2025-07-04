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
import { useSignUpForm } from '@modules/auth/business/forms';
import { useNavigation } from '@shared/hooks';

function SignUp() {
  const signUpForm = useSignUpForm();

  const insets = useSafeAreaInsets();

  const navigation = useNavigation();

  function onGoToSignIn() {
    navigation.navigate('auth/sign-in');
  }

  function onSubmit() {
    signUpForm.onSubmit();
  }

  return (
    <View style={styles.container}>
      <LinearGradientText style={[styles.title, { marginTop: insets.top }]}>
        create your account
      </LinearGradientText>

      <Image source={Logo} style={styles.avantsoft} />

      <View style={styles.inputField}>
        <Input
          control={signUpForm.control}
          name="username"
          placeholder="email"
        />

        <Input
          control={signUpForm.control}
          name="password"
          placeholder="password"
          kind="password"
        />

        <Input
          control={signUpForm.control}
          name="confirmPassword"
          placeholder="confirm password"
          kind="password"
        />
      </View>

      <Button
        touchableProps={{
          onPress: onSubmit,
        }}>
        <If condition={signUpForm.isLoading} elseRender={'sign up'}>
          <Spinner kind="primary" />
        </If>
      </Button>

      <Touchable onPress={onGoToSignIn}>
        <Text style={styles.textSignUp}>Already has an account? Sign In</Text>
      </Touchable>
    </View>
  );
}

export default SignUp;
