import EventEmitter from '@core/eventEmitter';
import UUID from '@core/uuid';
import type { ToastParams } from '@dls/components/Toast/interfaces';

export function showToast({ duration = 4000, ...rest }: ToastParams) {
  const id = UUID.generate();

  const params = {
    id,
    duration,
    ...rest,
  };

  EventEmitter.emit('Toast:show', params);

  return params.id;
}

export function hideToast(id: string) {
  EventEmitter.emit('Toast:hide', id);
}
