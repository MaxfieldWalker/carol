import * as React from "react";
import { ImageModalWrapper } from "../molecules/imageModalWrapper";
import { NameAndButtonRow } from "../molecules/nameAndButtonRow";
import { UILargeItemName, CaptionText } from "../atoms/typography";
import { UIButton } from "../atoms/buttons";
import { DescriptionRow } from "../molecules/descriptionRow";

interface Props {
  thumbnail: string;
  name: string;
  price: number;
  description: string;
  orderButtonClicked?: () => void;
}

export const OmakaseSetDetailModal: React.StatelessComponent<Props> = props => {
  const { thumbnail, name, price, description, orderButtonClicked } = props;
  console.log("opening omakase set detail modal");

  console.log(props);

  return (
    <ImageModalWrapper image={thumbnail}>
      <NameAndButtonRow>
        <div style={{ flex: 1 }}>
          <UILargeItemName>{name}</UILargeItemName>
          <span>{price}円</span>
        </div>
        <div>
          <UIButton onClick={orderButtonClicked}>注文へ</UIButton>
        </div>
      </NameAndButtonRow>
      <DescriptionRow>
        <CaptionText>{description}</CaptionText>
      </DescriptionRow>
    </ImageModalWrapper>
  );
};
