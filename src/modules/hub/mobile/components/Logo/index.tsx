import { Image } from 'react-native';

import { Logo as Avansoft } from '@modules/hub/mobile/assets';
import type { LogoProps } from '@modules/hub/mobile/components/Logo/interfaces';

function Logo({ ...rest }: LogoProps) {
  return <Image {...rest} source={Avansoft} />;
}

export default Logo;
