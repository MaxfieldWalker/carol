import * as React from "react";
const Rodal = require("rodal").default;

interface Props {
  visible: boolean;
  onClose?: () => void;
}

export const ModalContainer: React.StatelessComponent<Props> = props => {
  const { visible, onClose } = props;
  return (
    <Rodal
      visible={visible}
      onClose={onClose}
      width={90}
      height={80}
      measure="%"
      closeOnEsc={true}
      customMaskStyles={{ background: "rgba(0, 0, 0, .6)" }}
      style={{ padding: 0 }}
    >
      {props.children}
    </Rodal>
  );
};
