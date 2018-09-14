import { Color } from "../components/theme";
import { resolveImageUrl } from "../api/apiClient";

export interface Keyword {
  imageUrl: string;
  id: string;
  name: string;
  isChecked: boolean;
}

export const dummyKeywordList: Keyword[] = [
  {
    imageUrl: "/photo/kankitukei.jpg",
    id: "柑橘系",
    name: "柑橘系",
    isChecked: false
  },
  { imageUrl: "/photo/sweet.jpg", id: "甘い", name: "甘い", isChecked: false },
  {
    imageUrl: "/photo/otona.jpg",
    id: "大人向け",
    name: "大人向け",
    isChecked: false
  },
  {
    imageUrl: "/photo/season.jpg",
    id: "季節・旬",
    name: "季節・旬",
    isChecked: false
  },
  {
    imageUrl: "/photo/fruits.jpg",
    id: "フルーツ",
    name: "フルーツ",
    isChecked: false
  },
  {
    imageUrl: "/photo/sawayaka.jpg",
    id: "さわやか",
    name: "さわやか",
    isChecked: false
  },
  {
    imageUrl: "/photo/co2.jpg",
    id: "炭酸あり",
    name: "炭酸あり",
    isChecked: false
  },
  {
    imageUrl: "/photo/osyare.jpg",
    id: "おしゃれ",
    name: "おしゃれ",
    isChecked: false
  },
  { imageUrl: "/photo/famous.jpg", id: "定番", name: "定番", isChecked: false }
].map(x => ({ ...x, imageUrl: resolveImageUrl(x.imageUrl) }));

export const alcoholStrengthList = [
  {
    id: "low",
    name: "よわめ",
    color: Color.lightblue,
    isChecked: false
  },
  {
    id: "mid",
    name: "ふつう",
    color: Color.yellogreen,
    isChecked: false
  },
  {
    id: "high",
    name: "つよめ",
    color: Color.lightorange,
    isChecked: false
  }
];
