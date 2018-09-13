import * as React from "react";
import ImagePlaceholder from "../atoms/imagePlaceholder";
import { UISubheader, UILargeItemName, CaptionText } from "../atoms/typography";
import { UIButton } from "../atoms/buttons";
import CheckButton from "../atoms/checkButton";
import { Color } from "../theme";
import styled from "styled-components";
import { SafeImage } from "../atoms/safeImage";

interface Props {
  name: string;
  image: string;
  description: string;
  price: number;
  isSelected: boolean;
  onSelectButtonClicked: () => void;
}

const NameAndButtonRow = styled.div`
  padding: 9px 9px;
  display: flex;
  align-items: flex-start;
  height: 80px;
`;

const DescriptionRow = styled.div`
  padding: 9px 9px;
`;

const ContentWrapper = styled.div`
  padding: 9px 9px;
`;

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
    <div>
      <SafeImage
        source={image}
        style={{
          width: "100%",
          height: 200,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16
        }}
      />
      <ContentWrapper>
        <NameAndButtonRow>
          <div style={{ flex: 1 }}>
            <UILargeItemName>{name}</UILargeItemName>
          </div>
          <div style={{ width: "auto" }}>
            <CheckButton
              isChecked={isSelected}
              color={Color.blue}
              checkedColor={Color.orange}
              name={`追加する\n${price}円`}
              checkedName="追加済み"
              onClick={onSelectButtonClicked}
            />
          </div>
        </NameAndButtonRow>
        <DescriptionRow>
          <CaptionText>{description}</CaptionText>
        </DescriptionRow>
      </ContentWrapper>
    </div>
  );
};
