import type { ReactNode } from 'react';

import type { MapProps } from '@dls/components/Map/interfaces';

function ComponentMap<T extends Record<string, ReactNode>>({
  components,
  currentComponent,
}: MapProps<T>) {
  return components[currentComponent];
}

export default ComponentMap;
