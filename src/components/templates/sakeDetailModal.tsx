import * as React from "react";
import ImagePlaceholder from "../atoms/imagePlaceholder";
import { UISubheader, UILargeItemName, CaptionText } from "../atoms/typography";
import { UIButton } from "../atoms/buttons";
import CheckButton from "../atoms/checkButton";
import { Color } from "../theme";
import styled from "styled-components";
import { SafeImage } from "../atoms/safeImage";
import { ImageModalWrapper } from "../molecules/imageModalWrapper";
import { NameAndButtonRow } from "../molecules/nameAndButtonRow";
import { DescriptionRow } from "../molecules/descriptionRow";

interface Props {
  name: string;
  image: string;
  description: string;
  price: number;
  isSelected: boolean;
  onSelectButtonClicked: () => void;
}

export const SakeDetailModal: React.StatelessComponent<Props> = props => {
  const {
    name,
    image,
    description,
    price,
    isSelected,
    onSelectButtonClicked
  } = props;

  console.log(props);

  return (
    <ImageModalWrapper image={image}>
      <NameAndButtonRow>
        <div style={{ flex: 1 }}>
          <UILargeItemName>{name}</UILargeItemName>
          <span>{price}円</span>
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
      </NameAndButtonRow>
      <DescriptionRow>
        <CaptionText>{description}</CaptionText>
      </DescriptionRow>
    </ImageModalWrapper>
  );
};
