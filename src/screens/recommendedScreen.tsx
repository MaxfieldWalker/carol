import * as React from "react";
import { AppHeader } from "../components/organisms/appHeader";
import AppFooter from "../components/organisms/appFooter";
import { UIHeader } from "../components/atoms/typography";
import { Sake } from "../api/types";
import { SakeItem } from "../components/organisms/sakeItem";

interface Props {
  userName?: string;
}

export default class RecommendedScreen extends React.Component<Props> {
  onSakeItemClicked(sake: Sake) {
    console.log(sake);
  }

  render() {
    const { userName } = this.props;

    const dummyData: Sake[] = Array(7)
      .fill(0)
      .map((_, index) => ({
        id: index,
        name: "モスコミュール",
        price: 289,
        imageUrl: ""
      }));

    return (
      <div>
        <AppHeader />
        <div>
          <UIHeader>
            {userName ? userName + "さんへのおすすめ" : "あなたへのおすすめ"}
          </UIHeader>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            {dummyData.map((sake: Sake, index: number) => (
              <SakeItem
                key={index}
                {...sake}
                displayName={sake.name}
                style={{
                  marginRight: 8,
                  marginBottom: 12
                }}
                onClick={() => this.onSakeItemClicked(sake)}
              />
            ))}
          </div>
        </div>

        <AppFooter />
      </div>
    );
  }
}
