import * as React from "react";
import { Color } from "../theme";

export interface ScrollTextItemProps {
  name: string;
  displayName: string;
  color: string;
  isChecked: boolean;
}

export const ScrollTextItem: React.StatelessComponent<
  ScrollTextItemProps
> = props => {
  const itemWidth = 100;
  const itemHeight = 40;

  const { color, isChecked, displayName } = props;

  const uncheckedStyle: React.CSSProperties = {
    borderColor: color,
    borderWidth: 1,
    borderStyle: "solid",
    color: Color.black,
    borderRadius: 16
  };

  const checkedStyle: React.CSSProperties = {
    backgroundColor: color,
    color: Color.white
  };

  const baseStyle: React.CSSProperties = {
    width: itemWidth,
    height: itemHeight,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  const style = {
    ...baseStyle,
    ...(isChecked ? checkedStyle : uncheckedStyle)
  };

  return (
    <div>
      <div style={style}>
        <div>{displayName}</div>
      </div>
    </div>
  );
};
