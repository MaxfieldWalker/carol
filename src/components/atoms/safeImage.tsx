import * as React from "react";
import ImagePlaceholder from "./imagePlaceholder";

interface Props {
  source: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

export const SafeImage: React.StatelessComponent<Props> = props => {
  const { source, style } = props;

  return props.source ? (
    <img src={source} style={style} />
  ) : (
    <ImagePlaceholder style={style} />
  );
};
