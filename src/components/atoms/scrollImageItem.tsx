import * as React from "react";
import ImagePlaceholder from "./imagePlaceholder";
import { UIItemName } from "./typography";
import { Color, CornerRadius } from "../theme";

export interface ScrollImageItemProps {
  imageUrl: string;
  name: string;
  displayName: string;
  isChecked: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const ScrollImageItem: React.StatelessComponent<
  ScrollImageItemProps
> = props => {
  const { imageUrl, name, displayName, isChecked, onClick } = props;

  const itemSize = 100;

  const style: React.CSSProperties = {
    cursor: "pointer",
    padding: "12px 8px",
    backgroundColor: isChecked ? Color.orange : "transparent",
    borderRadius: CornerRadius.Mid,
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
          borderRadius: CornerRadius.Mid
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
