import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: orange;
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

export class AppHeader extends React.Component {
  render() {
    return (
      <Wrapper>
        <LeftContentWrapper>
          <p>デリバリー</p>
        </LeftContentWrapper>
        <RightContentWrapper>
          <p>
            <a href="#">郵便番号を入力</a>
          </p>
        </RightContentWrapper>
      </Wrapper>
    );
  }
}
