import * as React from "react";
import {
  ScrollImageItem,
  ScrollImageItemProps
} from "../components/atoms/scrollImageItem";

export default class SelectScreen extends React.Component {
  render() {
    const dummyData: ScrollImageItemProps[] = [
      {
        imageUrl: "",
        name: "kankitsu",
        displayName: "柑橘系",
        isChecked: false
      }
    ];

    return (
      <div>
        {dummyData.map(d => (
          <ScrollImageItem {...d} />
        ))}
      </div>
    );
  }
}
