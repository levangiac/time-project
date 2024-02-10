import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Modal from 'react-native-modal';

export interface MyModalRefObject {
  show: () => void;
  hide: () => void;
}

interface Props {
  visible?: boolean;
  isLoading?: Boolean;
  children?: React.ReactNode;
}
const MyModal = forwardRef((props: Props, ref: any) => {
  const { visible: visibleProps, isLoading, children, ...rest } = props;

  const [visible, setVisible] = useState<boolean>(visibleProps || false);
  const show = () => {
    if (!isLoading) setVisible(true);
  };
  const hide = async () => {
    setVisible(false);
  };

  const getVisible = () => {
    return visible;
  };

  useImperativeHandle(ref, () => ({ show, hide, getVisible }));

  return (
    <Modal
      {...rest}
      isVisible={visible}
      onBackButtonPress={hide}
      style={{ margin: 0, padding: 0, alignItems: 'center' }}
    >
      {children}
    </Modal>
  );
});
export default MyModal;
