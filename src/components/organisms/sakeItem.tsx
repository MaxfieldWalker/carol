import * as React from "react";
import ImagePlaceholder from "../atoms/imagePlaceholder";
import { UIItemName, CaptionText } from "../atoms/typography";
import { CornerRadius, Color } from "../theme";
import { Checkmark } from "../atoms/checkmark";
import { SafeImage } from "../atoms/safeImage";

interface Props {
  name: string;
  displayName: string;
  image_url: string;
  price: number;
  isSelected: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const SakeItem: React.StatelessComponent<Props> = props => {
  const {
    name,
    displayName,
    image_url,
    price,
    style,
    onClick,
    isSelected
  } = props;

  const imageW = 160;
  const imageH = imageW;

  return (
    <div onClick={onClick} style={{ width: imageW, ...style }}>
      <div style={{ position: "relative" }}>
        <SafeImage
          source={image_url}
          style={{
            width: imageW,
            height: imageH,
            borderRadius: CornerRadius.mid
          }}
        />

        {isSelected ? <Checkmark content="追加済み✓" /> : null}
      </div>

      <div style={{ marginLeft: 4, marginTop: 6 }}>
        <UIItemName>{displayName}</UIItemName>
        <span>{price}</span>円
      </div>
    </div>
  );
};
