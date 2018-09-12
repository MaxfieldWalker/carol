import * as React from "react";
import styled from "styled-components";
import { Color } from "../theme";

const Wrapper = styled.footer`
  bottom: 0;
  height: 5em;
  position: absolute;
  width: 100vw;
  height: 80px;
  background-color: ${Color.yellow};
`;

export default class AppFooter extends React.Component {
  render() {
    return <Wrapper>ここにフッターが入るよ</Wrapper>;
  }
}
