import * as React from "react";
import { Color } from "../theme";

export interface ScrollTextItemProps {
  name: string;
  displayName: string;
  color: string;
  isChecked: boolean;
  onClick?: () => void;
}

export const ScrollTextItem: React.StatelessComponent<
  ScrollTextItemProps
> = props => {
  const itemWidth = 100;
  const itemHeight = 40;

  const { color, isChecked, displayName, onClick } = props;

  const uncheckedStyle: React.CSSProperties = {
    borderColor: color,
    borderWidth: 1,
    borderStyle: "solid",
    color: Color.black
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
    justifyContent: "center",
    borderRadius: 16,
    cursor: "pointer"
  };

  const style = {
    ...baseStyle,
    ...(isChecked ? checkedStyle : uncheckedStyle)
  };

  return (
    <div onClick={onClick} style={style}>
      <div
        style={{
          userSelect: "none"
        }}
      >
        {displayName}
      </div>
    </div>
  );
};
