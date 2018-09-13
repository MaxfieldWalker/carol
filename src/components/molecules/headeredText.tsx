import * as React from "react";
import { UISubheader, BodyText } from "../atoms/typography";

interface Props {
  header: string;
  body: string;
  style?: React.CSSProperties;
}

export const HeaderedText: React.StatelessComponent<Props> = props => {
  const { header, body, style } = props;
  return (
    <div style={style}>
      <UISubheader
        style={{
          marginLeft: 0
        }}
      >
        {header}
      </UISubheader>
      <BodyText>{body}</BodyText>
    </div>
  );
};
