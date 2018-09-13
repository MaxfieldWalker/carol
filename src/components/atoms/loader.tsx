import * as React from "react";
import { Color } from "../theme";

interface Props {
  color?: string;
  size?: number;
}

export const Loader: React.StatelessComponent<Props> = props => {
  const { color, size } = props;
  return (
    <div
      className="loader loader-2"
      style={{
        borderColor: color || Color.blue,
        borderTopColor: Color.transparent,
        width: size || 50,
        height: size || 50
      }}
    />
  );
};
