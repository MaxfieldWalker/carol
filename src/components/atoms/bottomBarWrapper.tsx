import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 8px;
`;

export const BottomBarWrapper: React.StatelessComponent = props => {
  return <Wrapper>{props.children}</Wrapper>;
};
