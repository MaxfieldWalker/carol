import * as React from "react";
import { Sake } from "../../api/apiClient";
import ImagePlaceholder from "../atoms/imagePlaceholder";

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
          <p>{name}</p>
        </div>
        <div
          style={{
            width: "auto",
            alignItems: "center"
          }}
        >
          <p>{price}円</p>
        </div>
      </div>
      <p>{description}</p>
      {items.map((value: Sake, index: number) => (
        <div key={index}>
          <p>{value.name}</p>
        </div>
      ))}
      {props.children}
    </div>
  );
};
