import * as React from "react";
import { Color, CornerRadius } from "../theme";

interface Props {
  primary?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  disabledColor?: string;
  style?: React.CSSProperties;
}

export class UIButton extends React.Component<Props> {
  render() {
    const { primary, disabled, onClick } = this.props;

    const basicStyle: React.CSSProperties = {
      padding: "6px",
      height: 56,
      borderRadius: CornerRadius.mid,
      border: "1px solid gray",
      margin: "6px 12px"
    };

    const s: React.CSSProperties = {
      ...basicStyle,
      backgroundColor: disabled
        ? Color.lightgray
        : primary
          ? Color.orange
          : Color.blue
    };

    return (
      <button
        style={{ ...s, ...this.props.style }}
        onClick={() => {
          if (!disabled && onClick) {
            onClick();
          }
        }}
      >
        {this.props.children}
      </button>
    );
  }
}
