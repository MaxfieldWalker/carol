import * as React from "react";
import { AppHeader } from "../components/organisms/appHeader";
import { HeroImage } from "../components/organisms/heroImage";
import styled from "styled-components";
import { UIButton } from "../components/atoms/buttons";
import AppFooter from "../components/organisms/appFooter";
import { withRouter, RouterProps } from "react-router";

const ButtonsWrapper = styled.div`
  display: flex;
  width: "100%";
  padding: 16px 0;
`;

interface Props {}

export class MainScreen extends React.Component<Props & RouterProps> {
  onOmakaseButtonPressed() {
    this.props.history.push("/omakase");
  }

  onSelectButtonPressed() {
    this.props.history.push("/select");
  }

  render() {
    const buttonStyle: React.CSSProperties = {
      flex: 1,
      margin: "0 9px"
    };

    return (
      <div>
        <AppHeader />
        <HeroImage />
        <ButtonsWrapper>
          <UIButton
            style={buttonStyle}
            onClick={this.onOmakaseButtonPressed.bind(this)}
          >
            おまかせ
          </UIButton>
          <UIButton
            style={buttonStyle}
            primary
            onClick={this.onSelectButtonPressed.bind(this)}
          >
            えらぶ
          </UIButton>
        </ButtonsWrapper>
        <AppFooter />
      </div>
    );
  }
}
