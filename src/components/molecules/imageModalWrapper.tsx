import * as React from "react";
import { SafeImage } from "../atoms/safeImage";
import styled from "styled-components";

interface Props {
  image?: string;
}

const ContentWrapper = styled.div`
  padding: 9px 9px;
`;

export const ImageModalWrapper: React.StatelessComponent<Props> = props => {
  const { image } = props;
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
      <ContentWrapper>{props.children}</ContentWrapper>
    </div>
  );
};
