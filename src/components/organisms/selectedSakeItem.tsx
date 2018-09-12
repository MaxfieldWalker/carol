import * as React from "react";
import { Color } from "../theme";
import { CaptionText } from "../atoms/typography";

interface Props {
  /**
   * 円の大きさ
   */
  size: number;
  number: number;

  item?: {
    name: string;
    color: string;
  };

  style?: React.CSSProperties;
}

export const SelectedSakeItem: React.StatelessComponent<Props> = props => {
  const { size, number, style } = props;

  const color = props.item ? props.item.color : Color.lightgray;

  return (
    <div style={style}>
      <div
        style={{
          backgroundColor: color,
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 9999
        }}
      >
        {number}
      </div>
      {props.item ? <CaptionText>{props.item.name}</CaptionText> : null}
    </div>
  );
};
