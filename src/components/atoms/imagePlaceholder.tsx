import * as React from "react";

interface Props {
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

export default class ImagePlaceholder extends React.Component<Props> {
  render() {
    const { width, height } = this.props;
    const w = width || "100%";
    const h = height || "300px";

    return (
      <div
        style={{
          width: w,
          height: h,
          backgroundColor: "lightgray",
          ...this.props.style
        }}
      />
    );
  }
}
