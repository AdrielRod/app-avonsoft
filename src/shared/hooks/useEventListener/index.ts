import { DependencyList, useLayoutEffect } from 'react';

import EventEmitter from '@core/eventEmitter';

export function useEventListener<T>(
  eventName: string,
  listener: (params: T) => void,
  dependencies: DependencyList = [],
) {
  useLayoutEffect(() => {
    EventEmitter.addListener(eventName, listener);

    return () => {
      EventEmitter.removeListener(eventName, listener);
    };
  }, [eventName, ...dependencies]);
}
