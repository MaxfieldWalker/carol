import * as React from "react";
import ImagePlaceholder from "../atoms/imagePlaceholder";
import { UISubheader, CaptionText } from "../atoms/typography";
import { PriceTag } from "../atoms/priceTag";
import { Sake } from "../../api/types";

export interface Props {
  name: string;
  description: string;
  price: number;
  items: Sake[];
}

export const OmakaseItem: React.StatelessComponent<Props> = props => {
  const { name, description, price, items } = props;
  return (
    <div>
      <ImagePlaceholder
        style={{
          height: "300px" // NOTE: aspect-ratioとかを使った方がいい気がする
        }}
      />
      <div
        style={{
          display: "flex"
        }}
      >
        <div
          style={{
            flex: 1,
            alignItems: "center"
          }}
        >
          <UISubheader>{name}</UISubheader>
        </div>
        <div
          style={{
            width: "auto",
            alignItems: "center"
          }}
        >
          <PriceTag price={price} />
        </div>
      </div>
      <CaptionText>{description}</CaptionText>
      {items.map((value: Sake, index: number) => (
        <div key={index}>
          <p>{value.name}</p>
        </div>
      ))}
      {props.children}
    </div>
  );
};
