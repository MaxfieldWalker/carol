import * as React from "react";
import { Color, CornerRadius } from "../theme";

interface Props {
  isChecked: boolean;
  color: string;
  checkedColor?: string;
  name: string;
  checkedName?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default class CheckButton extends React.Component<Props> {
  render() {
    const { color, isChecked, name, onClick, style } = this.props;

    const uncheckedStyle: React.CSSProperties = {
      borderColor: color,
      borderWidth: 1,
      borderStyle: "solid",
      color: color
    };

    const checkedStyle: React.CSSProperties = {
      backgroundColor: color,
      color: Color.white
    };

    const baseStyle: React.CSSProperties = {
      width: "auto",
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: CornerRadius.Mid,
      cursor: "pointer",
      margin: "12px 8px"
    };

    const mergedStyle = {
      ...baseStyle,
      ...(isChecked ? checkedStyle : uncheckedStyle),
      ...style
    };

    return (
      <div onClick={onClick} style={mergedStyle}>
        <div
          style={{
            userSelect: "none"
          }}
        >
          {name}
        </div>
      </div>
    );
  }
}
