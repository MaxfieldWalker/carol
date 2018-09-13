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
          <div
            style={{
              backgroundColor: Color.foreground,
              borderRadius: CornerRadius.mid,
              display: "flex",
              justifyContent: "flex-end"
              // padding: `12px ${CornerRadius.mid + 4}px`
            }}
          >
            <UIButton
              primary
              onClick={onNextButtonClicked}
              disabled={selectedItems.length == 0}
              style={{
                margin: 0,
                width: "100%"
              }}
            >
              次へ
            </UIButton>
          </div>
        </BottomBarContainer>
      </BottomBarWrapper>
    );
  }
}
