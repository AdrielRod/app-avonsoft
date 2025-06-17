import type { LinearGradientProps } from '@dls/components/LinearGradient/interfaces';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';

function LinearGradient({ ...rest }: LinearGradientProps) {
  return <ExpoLinearGradient {...rest} />;
}

export default LinearGradient;
