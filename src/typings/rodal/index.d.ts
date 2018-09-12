import React from "react";

interface Props {
  visible: boolean;
  onClose: () => void;
}

declare module "rodal" {
  class Rodal extends React.Component<Props> {}
}

// export default Rodal;
