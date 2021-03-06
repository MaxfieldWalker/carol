import * as React from "react";
import {
  ScrollImageItem,
  ScrollImageItemProps
} from "../components/atoms/scrollImageItem";
import {
  CheckButton,
  CheckButtonProps
} from "../components/atoms/scrollTextItem";
import { UISubheader, UIHeader } from "../components/atoms/typography";
import styled from "styled-components";
import SelectBottomBar from "../components/organisms/selectBottombar";
import { AppHeader } from "../components/organisms/appHeader";
import { RouterProps } from "react-router";
import { RootContainer } from "../components/atoms/rootContainer";
import { dummyKeywordList, alcoholStrengthList } from "../data/keywords";
import { buffy } from "../util/array";
import { BottomBarLocator } from "../components/atoms/bottomBarLocator";
import { ApiClient } from "../api/apiClient";
import { NavigateToRecommendedItemsContext } from "../util/router";

type Props = RouterProps;

interface State {
  strengthList: CheckButtonProps[];
  keywordList: ScrollImageItemProps[];
  isLoaded: boolean;
}

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const AlcoholStrengthButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const sectionStyle: React.CSSProperties = {
  margin: "16px 0"
};

const ItemsContainer = styled.div`
  padding: 6px 0;
`;

export default class SelectScreen extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);

    this.state = {
      strengthList: alcoholStrengthList,
      keywordList: dummyKeywordList,
      isLoaded: false
    };
  }

  async componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true
      });
    }, 200);
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

  getSelectedKeywords() {
    return this.state.keywordList.filter(x => x.isChecked).map(x => x.name);
  }

  getSelectedStrength() {
    return this.state.strengthList.filter(x => x.isChecked).map(x => x.id);
  }

  getSelectedItems() {
    return [...this.getSelectedKeywords(), ...this.getSelectedStrength()];
  }

  onNextButtonClicked() {
    const context: NavigateToRecommendedItemsContext = {
      selectedKeywords: this.getSelectedKeywords(),
      selectedAlcoholStrength: this.getSelectedStrength()
    };

    this.props.history.push({
      pathname: "/items",
      state: context
    });
  }

  renderKeywords() {
    const { keywordList } = this.state;
    return (
      <div style={sectionStyle}>
        <UISubheader>キーワード</UISubheader>
        <ItemsContainer>
          {buffy(keywordList, 3).map(
            (row: ScrollImageItemProps[], index1: number) => (
              <ItemsWrapper key={index1}>
                {row.map((d: ScrollImageItemProps, index2: number) => (
                  <ScrollImageItem
                    key={index1 * 3 + index2}
                    onClick={() => this.onKeywordClick(d.id)}
                    {...d}
                  />
                ))}
              </ItemsWrapper>
            )
          )}
        </ItemsContainer>
      </div>
    );
  }

  get anyItemSelected() {
    return this.getSelectedItems().length > 0;
  }

  renderStrength() {
    const { strengthList } = this.state;

    return (
      <div style={sectionStyle}>
        <div style={{ marginBottom: this.anyItemSelected ? 90 : 0 }}>
          <UISubheader>アルコールの強さ</UISubheader>
          <ItemsContainer>
            <AlcoholStrengthButtonWrapper>
              {strengthList.map((d: CheckButtonProps, index: number) => (
                <CheckButton
                  key={index}
                  onClick={() => this.onAlcoholStrengthClick(d.id)}
                  {...d}
                />
              ))}
            </AlcoholStrengthButtonWrapper>
          </ItemsContainer>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <AppHeader />
        <RootContainer>
          <UIHeader>えらぶ</UIHeader>
          {this.renderKeywords()}
          {this.renderStrength()}
        </RootContainer>

        {this.anyItemSelected ? (
          <BottomBarLocator>
            <SelectBottomBar
              selectedItems={this.getSelectedItems()}
              onNextButtonClicked={this.onNextButtonClicked.bind(this)}
              isNextButtonEnabled={false}
            />
          </BottomBarLocator>
        ) : null}
      </div>
    );
  }
}
