import * as React from "react";
import styled from "styled-components";

const Name = styled.h1`
  font-size: 18px;
  color: orange;
`;

export const SakeName: React.StatelessComponent<{}> = props => (
  <Name>{props.children}</Name>
);
