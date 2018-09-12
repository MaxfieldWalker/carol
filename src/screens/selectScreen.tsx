import * as React from "react";
import {
  ScrollImageItem,
  ScrollImageItemProps
} from "../components/atoms/scrollImageItem";
import {
  ScrollTextItem,
  ScrollTextItemProps
} from "../components/atoms/scrollTextItem";

import { UISubheader } from "../components/atoms/typography";
import { Color } from "../components/theme";

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

    const dummyData2: ScrollTextItemProps[] = [
      {
        name: "low",
        displayName: "よわめ",
        color: Color.yellow,
        isChecked: false
      }
    ];

    const sectionStyle: React.CSSProperties = {
      margin: "32px 0"
    };

    return (
      <div>
        <div style={sectionStyle}>
          <UISubheader>キーワード</UISubheader>
          {dummyData.map(d => (
            <ScrollImageItem {...d} />
          ))}
        </div>
        <div style={sectionStyle}>
          <UISubheader>アルコールの強さ</UISubheader>
          {dummyData2.map(d => (
            <ScrollTextItem {...d} />
          ))}
        </div>
      </div>
    );
  }
}
