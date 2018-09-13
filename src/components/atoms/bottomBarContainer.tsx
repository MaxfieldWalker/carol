import * as React from "react";
import styled from "styled-components";
import { Color } from "../theme";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Color.white};
  border-radius: 16px;
  box-shadow: 0 10px 10px 10px #00000020;
`;

export const BottomBarContainer: React.StatelessComponent = props => {
  return <Container>{props.children}</Container>;
};
