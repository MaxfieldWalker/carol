import * as React from "react";
import ImagePlaceholder from "./imagePlaceholder";
import { UIItemName } from "./typography";
import { Color, CornerRadius } from "../theme";

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
    backgroundColor: isChecked ? Color.orange : "transparent",
    borderRadius: CornerRadius.mid,
    width: "auto",
    ...props.style
  };

  return (
    <div style={style} onClick={onClick}>
      {imageUrl ? <img src={imageUrl} /> : null}
      <ImagePlaceholder
        width={itemSize}
        height={itemSize}
        style={{
          borderRadius: CornerRadius.mid
        }}
      />
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
