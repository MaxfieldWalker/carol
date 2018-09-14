import * as React from "react";
import styled from "styled-components";

const Row = styled.div`
  padding: 0 9px;
  padding-bottom: 12px;
  max-height: 180px;
  overflow-y: scroll;
`;

export const DescriptionRow: React.StatelessComponent = props => {
  return <Row>{props.children}</Row>;
};
