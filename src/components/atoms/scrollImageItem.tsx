import * as React from "react";
import ImagePlaceholder from "./imagePlaceholder";
import { UIItemName } from "./typography";
import { Color, CornerRadius } from "../theme";
import { Checkmark } from "./checkmark";

export interface ScrollImageItemProps {
  imageUrl: string;
  id: string;
  displayName: string;
  isChecked: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const ScrollImageItem: React.StatelessComponent<
  ScrollImageItemProps
> = props => {
  const { imageUrl, displayName, isChecked, onClick } = props;

  const itemSize = 90;

  const style: React.CSSProperties = {
    cursor: "pointer",
    borderRadius: CornerRadius.mid,
    width: "auto",
    ...props.style
  };

  return (
    <div style={style} onClick={onClick}>
      {imageUrl ? <img src={imageUrl} /> : null}
      <div
        style={{
          position: "relative"
        }}
      >
        <ImagePlaceholder
          width={itemSize}
          height={itemSize}
          style={{
            borderRadius: CornerRadius.mid
          }}
        />
        {isChecked ? <Checkmark content="きになる" /> : null}
      </div>
      <UIItemName
        style={{
          marginLeft: 4,
          marginTop: 6
        }}
      >
        {displayName}
      </UIItemName>
    </div>
  );
};
