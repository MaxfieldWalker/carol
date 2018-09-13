import * as React from "react";
import ImagePlaceholder from "../atoms/imagePlaceholder";
import { UIItemName, CaptionText } from "../atoms/typography";
import { CornerRadius, Color } from "../theme";

interface Props {
  name: string;
  displayName: string;
  image: string;
  price: number;
  isSelected: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function renderCheckmark() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        height: 24,
        padding: "2px 4px",
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
          textAlign: "center"
        }}
      >
        選択済み✓
      </CaptionText>
    </div>
  );
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
        {isSelected ? renderCheckmark() : null}
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
