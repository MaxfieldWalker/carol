import * as React from "react";
import { Sake } from "../..//api/types";
import styled from "styled-components";
import { Color } from "../theme";
import { SelectedSakeItem } from "./selectedSakeItem";
import { UIButton } from "../atoms/buttons";
import { BottomBarContainer } from "../atoms/bottomBarContainer";
import { BottomBarWrapper } from "../atoms/bottomBarWrapper";

interface Props {
  items: Sake[];
  style?: React.CSSProperties;
  onNextButtonClicked?: () => void;
}

export default class SelectedItemsBar extends React.Component<Props> {
  render() {
    const { items, style, onNextButtonClicked } = this.props;

    const selectedItemsCount = items.length;
    const array = Array.from({ length: 5 }, (_, k) => k).slice(
      selectedItemsCount
    );

    const circleSize = 32;

    const commonItemStyle: React.CSSProperties = {
      margin: "4px",
      flex: 1,
      minWidth: 60,
      display: "inline-block",
      height: 40,
      verticalAlign: "top"
    };

    return (
      <BottomBarWrapper>
        <BottomBarContainer>
          <div
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              padding: "12px 0"
            }}
          >
            {items.map((x: Sake, index: number) => (
              <SelectedSakeItem
                key={index}
                style={commonItemStyle}
                number={index + 1}
                size={circleSize}
                item={x}
              />
            ))}

            {// 残りを埋める
            array.map(index => (
              <SelectedSakeItem
                style={commonItemStyle}
                key={index}
                number={index + 1}
                size={circleSize}
              />
            ))}
          </div>
          <div
            style={{
              width: "auto"
            }}
          >
            <UIButton
              disabled={selectedItemsCount == 0}
              onClick={() => {
                if (onNextButtonClicked) onNextButtonClicked();
              }}
            >
              次へ >
            </UIButton>
          </div>
        </BottomBarContainer>
      </BottomBarWrapper>
    );
  }
}
