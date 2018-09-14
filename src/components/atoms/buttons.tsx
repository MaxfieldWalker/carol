import * as React from "react";
import { Color, CornerRadius, BorderWidth } from "../theme";

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
      borderRadius: CornerRadius.mid,
      border: `${BorderWidth.mid}px solid ${Color.foreground}`,
      fontSize: "24px",
      padding: "9px 20px",
      backgroundColor: "transparent",
      color: Color.foreground
    };

    const disabledStyle: React.CSSProperties = {
      opacity: 0.8
    };

    const primaryStyle: React.CSSProperties = {
      backgroundColor: Color.accent,
      border: "none",
      boxShadow: "0 0 4px 4px #00000010"
    };

    const s: React.CSSProperties = {
      ...basicStyle,
      ...(primary ? primaryStyle : {}),
      ...(disabled ? disabledStyle : {})
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

interface SmallButtonProps {
  color: string;
  name: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const SmallButton: React.StatelessComponent<
  SmallButtonProps
> = props => {
  const { color, name, onClick, style } = props;

  const buttonStyle: React.CSSProperties = {
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: CornerRadius.mid,
    cursor: "pointer",
    userSelect: "none",
    textAlign: "center",
    padding: "8px 12px",
    borderColor: color,
    borderWidth: BorderWidth.mid,
    borderStyle: "solid",
    color: color,
    height: 40
  };

  return (
    <div
      style={{
        ...buttonStyle,
        ...style
      }}
      onClick={onClick}
    >
      {name}
    </div>
  );
};
