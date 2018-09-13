import { Sake, OmakaseSet } from "../api/types";
import OmakaseScreen from "../screens/omakase";

const data: Sake[] = [
  {
    id: 1,
    name: "モスコミュール",
    description:
      "モスコー・ミュールとはオールデイカクテルとして、非常にメジャーなスタンダードカクテルの一つ。モスコー・ミュールとは「モスクワのラバ」という意味があり、「ラバに蹴飛ばされたように」効いてくる、強いウォッカベースのカクテルであることを表す。なお名称にクーラーとは付いていないが、クーラーの一種である。",
    price: 289,
    image_url: "",
    color: "#EBBA62"
  },
  {
    id: 2,
    name: "スプモーニ",
    description:
      "スプモーニ とは、冷たいタイプのロングドリンクに分類される、リキュールをベースとしたカクテルの1種である。イタリアで誕生した。カクテル名は「泡立つ」という意味。同じイタリア産まれのリキュールであるカンパリの赤を使用するので、仕上がりは赤色系となる。",
    price: 268,
    image_url: "",
    color: "#E28744"
  }
];

export const dummySakeData = [...data, ...data, data[0]].map(
  (x: Sake, index: number) => ({ ...x, id: index + 1 })
);

const omakase: OmakaseSet = {
  id: 1,
  name: "わいわいセット",
  description: "みんなでわいわいわーい",
  price: 1280,
  items: [...data],
  thumbnail: ""
};

export const dummyOmakaseSetData: OmakaseSet[] = [omakase];
