import * as React from "react";
import { Color, CornerRadius, BorderWidth } from "../theme";

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
    const { color, isChecked, name, checkedName, onClick, style } = this.props;

    const uncheckedStyle: React.CSSProperties = {
      borderColor: color,
      borderWidth: BorderWidth.mid,
      borderStyle: "solid",
      color: color
    };

    const checkedStyle: React.CSSProperties = {
      backgroundColor: color,
      color: Color.white
    };

    const baseStyle: React.CSSProperties = {
      width: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: CornerRadius.mid,
      cursor: "pointer",
      userSelect: "none",
      textAlign: "center",
      padding: "8px 12px"
    };

    const mergedStyle = {
      ...baseStyle,
      ...(isChecked ? checkedStyle : uncheckedStyle),
      ...style
    };

    const content = isChecked && checkedName ? checkedName : name;

    return (
      <div onClick={onClick} style={mergedStyle}>
        <div>
          {/*必要*/}
          {content.split("\n").map((x: string, index: number) => (
            <p key={index}>{x}</p>
          ))}
        </div>
      </div>
    );
  }
}
