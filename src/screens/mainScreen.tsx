import * as React from "react";
import { AppHeader } from "../components/organisms/appHeader";
import { HeroImage } from "../components/organisms/heroImage";
import styled from "styled-components";
import { UIButton } from "../components/atoms/buttons";

const ButtonWrapper = styled.div`
  display: flex;
  width: "100%";
`;

export class MainScreen extends React.Component {
  render() {
    const buttonStyle: React.CSSProperties = {
      flex: 1
    };

    return (
      <div>
        <AppHeader />
        <HeroImage />
        <ButtonWrapper>
          <UIButton style={buttonStyle} primary onPress={() => alert("選ぶ")}>
            選ぶ
          </UIButton>
          <UIButton style={buttonStyle} onPress={() => alert("おまかせ")}>
            おまかせ
          </UIButton>
        </ButtonWrapper>
      </div>
    );
  }
}
