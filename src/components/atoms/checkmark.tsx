import * as React from "react";
import { CaptionText } from "./typography";
import { Color, CornerRadius } from "../theme";

interface Props {
  content: string;
}

export const Checkmark: React.StatelessComponent<Props> = props => {
  const { content } = props;
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        height: "auto",
        padding: "8px 0",
        width: "100%",
        backgroundColor: Color.green,
        borderBottomLeftRadius: CornerRadius.mid,
        borderBottomRightRadius: CornerRadius.mid,
        display: "flex",
        alignItems: "center"
      }}
    >
      <CaptionText
        style={{
          color: Color.white,
          marginLeft: 4
        }}
      >
        {content}
      </CaptionText>
    </div>
  );
};
