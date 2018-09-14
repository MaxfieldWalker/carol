import * as React from "react";
import { Sake } from "../..//api/types";
import styled from "styled-components";
import { Color } from "../theme";
import { SelectedSakeItem } from "./selectedSakeItem";
import { UIButton } from "../atoms/buttons";
import { BottomBarContainer } from "../atoms/bottomBarContainer";
import { BottomBarWrapper } from "../atoms/bottomBarWrapper";
import {
  BottomBarUpperContentWrapper,
  BottomBarLowerContentWrapper
} from "../atoms/bottomBarContentWrapper";

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
      marginRight: 12,
      flex: 1,
      minWidth: 60,
      display: "inline-block",
      height: 40,
      verticalAlign: "top"
    };

    return (
      <BottomBarWrapper>
        <BottomBarContainer>
          <BottomBarUpperContentWrapper
            style={{ display: "flex", alignItems: "center" }}
          >
            <div
              style={{
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "3px 0"
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
          </BottomBarUpperContentWrapper>

          <BottomBarLowerContentWrapper>
            <UIButton
              primary
              disabled={selectedItemsCount == 0}
              onClick={() => {
                if (onNextButtonClicked) onNextButtonClicked();
              }}
              style={{
                width: "100%",
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
              }}
            >
              次へ
            </UIButton>
          </BottomBarLowerContentWrapper>
        </BottomBarContainer>
      </BottomBarWrapper>
    );
  }
}
