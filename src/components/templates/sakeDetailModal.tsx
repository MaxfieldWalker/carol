import * as React from "react";
import ImagePlaceholder from "../atoms/imagePlaceholder";
import { UISubheader, UILargeItemName } from "../atoms/typography";
import { UIButton } from "../atoms/buttons";

interface Props {
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  isSelected: boolean;
  onSelectButtonClicked: () => void;
}

export const SakeDetailModal: React.StatelessComponent<Props> = props => {
  const {
    name,
    imageUrl,
    description,
    price,
    isSelected,
    onSelectButtonClicked
  } = props;

  return (
    <div>
      <ImagePlaceholder
        width="100%"
        height="200px"
        style={{
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16
        }}
      />
      <div style={{ padding: 9 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start"
          }}
        >
          <div style={{ flex: 1 }}>
            <UILargeItemName>{name}</UILargeItemName>
          </div>
          <div style={{ width: "auto" }}>
            <UIButton primary>選択する</UIButton>
          </div>
        </div>
        <div>{price}円</div>
        <div>{description}</div>
      </div>
    </div>
  );
};
