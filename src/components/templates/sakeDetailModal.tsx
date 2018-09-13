import * as React from "react";
import ImagePlaceholder from "../atoms/imagePlaceholder";
import { UISubheader, UILargeItemName } from "../atoms/typography";
import { UIButton } from "../atoms/buttons";
import CheckButton from "../atoms/checkButton";
import { Color } from "../theme";
import styled from "styled-components";

interface Props {
  name: string;
  image: string;
  description: string;
  price: number;
  isSelected: boolean;
  onSelectButtonClicked: () => void;
}

// const NameAndButtonRow = styled.

export const SakeDetailModal: React.StatelessComponent<Props> = props => {
  const {
    name,
    image,
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
            <CheckButton
              isChecked={isSelected}
              color={Color.blue}
              checkedColor={Color.orange}
              name="追加する"
              checkedName="追加済み"
              onClick={onSelectButtonClicked}
            />
          </div>
        </div>
        <div>{price}円</div>
        <div>{description}</div>
      </div>
    </div>
  );
};
