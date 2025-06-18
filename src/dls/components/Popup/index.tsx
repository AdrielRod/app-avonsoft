import { Ref, forwardRef, useImperativeHandle, useState } from 'react';
import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native';

import type { PopupProps, PopupRef } from '@dls/components/Popup/interfaces';

function Popup(
  { children, contentContainerStyle }: PopupProps,
  ref: Ref<PopupRef>,
) {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
  }));

  if (!visible) return null;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableOpacity
        style={{
          flex: 1,
        }}
        activeOpacity={1}
        onPress={() => setVisible(false)}>
        <View {...contentContainerStyle}>{children}</View>
      </TouchableOpacity>
    </Modal>
  );
}

export default forwardRef(Popup);
