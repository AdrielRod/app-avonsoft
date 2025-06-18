import EventEmitter from '@core/eventEmitter';
import { getCurrentDate } from '@shared/formatting';

export function showDatePicker(
  initialDate = getCurrentDate(),
): Promise<Date | null> {
  return new Promise((resolve, reject) => {
    EventEmitter.emit('DatePicker:show', {
      initialDate,
      resolve,
      reject,
    });
  });
}

export function hideDatePicker() {
  EventEmitter.emit('DatePicker:hide');
}
