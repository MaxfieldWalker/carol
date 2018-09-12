import * as React from "react";
import {
  ScrollImageItem,
  ScrollImageItemProps
} from "../components/atoms/scrollImageItem";
import {
  CheckButton,
  CheckButtonProps
} from "../components/atoms/scrollTextItem";

import { UISubheader } from "../components/atoms/typography";
import { Color } from "../components/theme";
import { SelectEffectDescriptor } from "redux-saga/effects";
import styled from "styled-components";
import SelectBottomBar from "../components/organisms/selectBottombar";
import { AppHeader } from "../components/organisms/appHeader";
import AppFooter from "../components/organisms/appFooter";

interface Props {}

interface SelectableItem {
  name: string;
  type: "keyword" | "strength";
}

interface State {
  strengthList: CheckButtonProps[];
  keywordList: ScrollImageItemProps[];
}

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default class SelectScreen extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);

    this.state = {
      strengthList: [
        {
          id: "unknown",
          name: "わからない",
          color: Color.gray,
          isChecked: false
        },
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
      ],
      keywordList: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => ({
        imageUrl: "",
        id: "kankitsu" + x,
        displayName: "柑橘系",
        isChecked: false
      }))
    };
  }

  onAlcoholStrengthClick(name: string) {
    const list = this.state.strengthList.slice();
    const item = list.find(x => x.id === name)!!;
    item.isChecked = !item.isChecked;
    this.setState({
      strengthList: list
    });
  }

  onKeywordClick(name: string) {
    const list = this.state.keywordList.slice();
    const item = list.find(x => x.id === name)!!;
    item.isChecked = !item.isChecked;
    this.setState({
      keywordList: list
    });
  }

  getSelectedItems() {
    const { keywordList, strengthList } = this.state;
    const list = [...keywordList, ...strengthList];
    return list.filter(x => x.isChecked).map(x => x.id);
  }

  render() {
    const { strengthList, keywordList } = this.state;

    const sectionStyle: React.CSSProperties = {
      margin: "32px 0"
    };

    return (
      <div>
        <AppHeader />
        <div style={sectionStyle}>
          <UISubheader>キーワード</UISubheader>
          <ItemsWrapper>
            {keywordList.map((d: ScrollImageItemProps, index: number) => (
              <ScrollImageItem
                key={index}
                style={{
                  marginRight: 8,
                  marginBottom: 12
                }}
                onClick={() => this.onKeywordClick(d.id)}
                {...d}
              />
            ))}
          </ItemsWrapper>
        </div>
        <div>
          <div style={sectionStyle}>
            <UISubheader>アルコールの強さ</UISubheader>
            <ItemsWrapper>
              {strengthList.map((d: CheckButtonProps, index: number) => (
                <CheckButton
                  key={index}
                  style={{
                    marginRight: 16
                  }}
                  onClick={() => this.onAlcoholStrengthClick(d.id)}
                  {...d}
                />
              ))}
            </ItemsWrapper>
          </div>
        </div>

        <SelectBottomBar
          selectedItems={this.getSelectedItems()}
          onNextButtonClicked={() => console.log("次へ")}
          isNextButtonEnabled={false}
        />
        <AppFooter />
      </div>
    );
  }
}
