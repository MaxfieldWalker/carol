import * as React from "react";
import { UIButton } from "../atoms/buttons";
import styled from "styled-components";
import { Color, CornerRadius } from "../theme";
import { BottomBarContainer } from "../atoms/bottomBarContainer";
import { BottomBarWrapper } from "../atoms/bottomBarWrapper";
import { buffy } from "../../util/array";
import {
  BottomBarUpperContentWrapper,
  BottomBarLowerContentWrapper
} from "../atoms/bottomBarContentWrapper";

interface Props {
  selectedItems: string[];
  onNextButtonClicked: () => void;
  isNextButtonEnabled: boolean;
  style?: React.CSSProperties;
}

const Wrapper = styled.div`
  display: flex;
`;

const TagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
`;

export default class SelectBottomBar extends React.Component<Props> {
  render() {
    const {
      selectedItems,
      onNextButtonClicked,
      isNextButtonEnabled,
      style
    } = this.props;

    return (
      <BottomBarWrapper>
        <BottomBarContainer>
          <BottomBarUpperContentWrapper>
            {buffy(selectedItems, 2).map((row: string[], index1: number) => (
              <TagWrapper key={index1}>
                {row.map((name: string, index2: number) => (
                  <div
                    style={{
                      width: "40%",
                      borderRadius: 4,
                      padding: 6,
                      paddingLeft: 9,
                      backgroundColor: Color.lightgray
                    }}
                    key={index1 * 2 + index2}
                  >
                    {name}
                  </div>
                ))}
              </TagWrapper>
            ))}
          </BottomBarUpperContentWrapper>
          <BottomBarLowerContentWrapper>
            <UIButton
              primary
              onClick={onNextButtonClicked}
              disabled={selectedItems.length == 0}
              style={{
                margin: 0
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
