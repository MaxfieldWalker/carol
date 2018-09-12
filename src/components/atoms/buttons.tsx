import * as React from "react";
import { Color, CornerRadius } from "../theme";

interface Props {
  primary?: boolean;
  onPress?: () => void;
  style?: React.CSSProperties;
}

export class UIButton extends React.Component<Props> {
  render() {
    const { primary, onPress } = this.props;

    const basicStyle: React.CSSProperties = {
      padding: "6px",
      height: 56,
      backgroundColor: Color.blue,
      borderRadius: CornerRadius.Mid,
      border: "1px solid gray",
      margin: "6px 12px"
    };

    const primaryStyle: React.CSSProperties = {
      ...basicStyle,
      backgroundColor: Color.orange
    };

    const s = primary ? primaryStyle : basicStyle;

    return (
      <button style={{ ...s, ...this.props.style }} onClick={onPress}>
        {this.props.children}
      </button>
    );
  }
}
