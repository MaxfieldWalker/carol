import * as React from "react";
import { Color, CornerRadius } from "../theme";

export interface CheckButtonProps {
  id: string;
  name: string;
  color: string;
  isChecked: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const CheckButton: React.StatelessComponent<
  CheckButtonProps
> = props => {
  const itemWidth = 100;
  const itemHeight = 40;

  const { color, isChecked, name, onClick } = props;

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
    borderRadius: CornerRadius.mid,
    cursor: "pointer",
    margin: "12px 8px"
  };

  const style = {
    ...baseStyle,
    ...(isChecked ? checkedStyle : uncheckedStyle),
    ...props.style
  };

  return (
    <div onClick={onClick} style={style}>
      <div
        style={{
          userSelect: "none"
        }}
      >
        {name}
      </div>
    </div>
  );
};
