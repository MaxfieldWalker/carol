import * as React from "react";
import ImagePlaceholder from "../atoms/imagePlaceholder";
import { UIItemName } from "../atoms/typography";
import { CornerRadius } from "../theme";

interface Props {
  name: string;
  displayName: string;
  imageUrl: string;
  price: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const SakeItem: React.StatelessComponent<Props> = props => {
  const { name, displayName, imageUrl, price, style, onClick } = props;

  const imageW = 160;
  const imageH = imageW;

  return (
    <div
      onClick={onClick}
      style={{
        width: imageW,
        ...style
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          style={{
            borderRadius: CornerRadius.Mid
          }}
        />
      ) : (
        <ImagePlaceholder
          style={{
            borderRadius: CornerRadius.Mid
          }}
          width={imageW}
          height={imageH}
        />
      )}
      <div
        style={{
          marginLeft: 4,
          marginTop: 6
        }}
      >
        <UIItemName>{displayName}</UIItemName>
        {price}円
      </div>
    </div>
  );
};
