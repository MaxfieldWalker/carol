import * as React from "react";
import styled from "styled-components";

const Row = styled.div`
  padding: 9px 9px;
  display: flex;
  align-items: flex-start;
  padding-bottom: 16px;
`;

export const NameAndButtonRow: React.StatelessComponent = props => {
  return <Row>{props.children}</Row>;
};
