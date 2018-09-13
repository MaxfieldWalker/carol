import * as React from "react";
import ImagePlaceholder from "../atoms/imagePlaceholder";
import { SafeImage } from "../atoms/safeImage";
import { CornerRadius, Color } from "../theme";

interface Props {
  number: number;
  image_url: string;
  name: string;
  price: number;
}

export const SakeTableRow: React.StatelessComponent<Props> = props => {
  const { number, image_url, name, price } = props;
  const commonstyle: React.CSSProperties = {
    padding: "6px 0"
  };

  return (
    <tr
      style={{
        borderColor: Color.lightgray,
        borderStyle: "solid",
        borderWidth: "1px 0",
        width: "100vw"
      }}
    >
      <td style={commonstyle}>{number}</td>
      <td style={commonstyle}>
        <SafeImage
          source={image_url}
          style={{ borderRadius: CornerRadius.small, width: 50, height: 50 }}
        />
      </td>
      <td style={commonstyle}>{name}</td>
      <td style={{ ...commonstyle, textAlign: "right" }}>
        <span
          style={{
            marginRight: 4
          }}
        >
          {price}円
        </span>
      </td>
    </tr>
  );
};
