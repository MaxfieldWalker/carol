import * as React from "react";
import ImagePlaceholder from "./imagePlaceholder";
import { UIItemName } from "./typography";

export interface ScrollImageItemProps {
  imageUrl: string;
  name: string;
  displayName: string;
  isChecked: boolean;
}

export const ScrollImageItem: React.StatelessComponent<
  ScrollImageItemProps
> = props => {
  const { imageUrl, name, displayName, isChecked } = props;

  const itemSize = 100;

  return (
    <div>
      <div />
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
          marginTop: 4
        }}
      >
        {displayName}
      </UIItemName>
    </div>
  );
};
