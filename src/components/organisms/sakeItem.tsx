import * as React from "react";
import ImagePlaceholder from "../atoms/imagePlaceholder";
import { UIItemName, CaptionText } from "../atoms/typography";
import { CornerRadius, Color } from "../theme";
import { Checkmark } from "../atoms/checkmark";

interface Props {
  name: string;
  displayName: string;
  image: string;
  price: number;
  isSelected: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const SakeItem: React.StatelessComponent<Props> = props => {
  const { name, displayName, image, price, style, onClick, isSelected } = props;

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
      <div
        style={{
          position: "relative"
        }}
      >
        <ImagePlaceholder
          style={{
            borderRadius: CornerRadius.mid
          }}
          width={imageW}
          height={imageH}
        />
        {isSelected ? <Checkmark content="選択済み✓" /> : null}
      </div>

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
