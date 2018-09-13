import * as React from "react";
import ImagePlaceholder from "../atoms/imagePlaceholder";
import { UISubheader, CaptionText } from "../atoms/typography";
import { PriceTag } from "../atoms/priceTag";
import { Sake } from "../../api/types";
import { CornerRadius } from "../theme";
import styled from "styled-components";

export interface Props {
  name: string;
  description: string;
  price: number;
  items: Sake[];
  style?: React.CSSProperties;
  onClick?: () => void;
  thumbnail: string;
}

const NamePriceRow = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 9px;
  padding-bottom: 6px;
`;

export const OmakaseItem: React.StatelessComponent<Props> = props => {
  const { name, description, price, items, style, onClick, thumbnail } = props;

  return (
    <div style={style} onClick={onClick}>
      <img
        src={thumbnail}
        style={{
          height: 220,
          borderRadius: CornerRadius.large,
          width: "100%"
        }}
      />
      <div style={{ padding: "0 6px" }}>
        <NamePriceRow>
          <UISubheader
            style={{ flex: 1, alignItems: "center", margin: 0, padding: 0 }}
          >
            {name}
          </UISubheader>
          <div style={{ width: "auto", alignItems: "center" }}>
            <PriceTag price={price} />
          </div>
        </NamePriceRow>
      </div>
    </div>
  );
};
