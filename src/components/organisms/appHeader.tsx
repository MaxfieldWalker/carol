import * as React from "react";
import styled from "styled-components";
import { Color } from "../theme";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: ${Color.background};
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 10px 10px #00000030;
`;

const LeftContentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const RightContentWrapper = styled.div`
  width: 100;
  display: flex;
  align-items: center;
`;

const AppName = styled.span`
  font-size: 24px;
  letter-spacing: 0.1em;
  color: ${Color.foreground};
  background: linear-gradient(transparent 40%, ${Color.underline} 40%);
`;

export class AppHeader extends React.Component {
  render() {
    return (
      <Wrapper>
        <div>
          <AppName>おさけフレンズ</AppName>
        </div>
      </Wrapper>
    );
  }
}
