import * as React from "react";
import { ImageModalWrapper } from "../molecules/imageModalWrapper";
import { NameAndButtonRow } from "../molecules/nameAndButtonRow";
import { UILargeItemName, CaptionText } from "../atoms/typography";
import { UIButton, SmallButton } from "../atoms/buttons";
import { DescriptionRow } from "../molecules/descriptionRow";
import { Color } from "../theme";

interface Props {
  thumbnail: string;
  name: string;
  price: number;
  description: string;
  orderButtonClicked?: () => void;
}

export const OmakaseSetDetailModal: React.StatelessComponent<Props> = props => {
  const { thumbnail, name, price, description, orderButtonClicked } = props;

  return (
    <ImageModalWrapper image={thumbnail}>
      <NameAndButtonRow>
        <div style={{ flex: 1 }}>
          <UILargeItemName>{name}</UILargeItemName>
          <span>{price}円</span>
        </div>
        <div>
          <SmallButton
            color={Color.blue}
            name="注文へ"
            onClick={orderButtonClicked}
          />
        </div>
      </NameAndButtonRow>
      <DescriptionRow>
        <CaptionText>{description}</CaptionText>
      </DescriptionRow>
    </ImageModalWrapper>
  );
};
