import * as React from "react";
import ImagePlaceholder from "./imagePlaceholder";
import { UIItemName } from "./typography";
import { Color } from "../theme";

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
    borderRadius: 16,
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
          borderRadius: 16
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
