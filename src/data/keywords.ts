import { Color } from "../components/theme";

export const dummyKeywordList = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => ({
  imageUrl: "",
  id: "kankitsu" + x,
  displayName: "柑橘系",
  isChecked: false
}));

export const alcoholStrengthList = [
  {
    id: "low",
    name: "よわめ",
    color: Color.blue,
    isChecked: false
  },
  {
    id: "mid",
    name: "ふつう",
    color: Color.green,
    isChecked: false
  },
  {
    id: "high",
    name: "つよめ",
    color: Color.orange,
    isChecked: false
  }
];
