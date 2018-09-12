import * as React from "react";
import { AppHeader } from "../components/organisms/appHeader";
import { UIHeader } from "../components/atoms/typography";
import { OmakaseSet, Sake } from "../api/apiClient";
import { OmakaseItem } from "../components/organisms/omakaseItem";
import { LoadingCircle } from "../components/atoms/loadingCircle";

interface Props {}

interface State {
  items: OmakaseSet[];
  loaded: boolean;
}

export default class OmakaseScreen extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {
      items: [],
      loaded: false
    };
  }

  componentDidMount() {
    // TODO: APIからデータ取得
    setTimeout(() => {
      const dummyData: OmakaseSet[] = [
        {
          name: "おまかせセットA",
          price: 1000,
          description: "夏におすすめ。お見逃しなく。",
          items: [],
          thumbnail: ""
        }
      ];

      this.setState({
        items: dummyData,
        loaded: true
      });

      console.log("hello");
    }, 200);
  }

  render() {
    const { items, loaded } = this.state;

    return (
      <div>
        <AppHeader />
        <UIHeader>おまかせ</UIHeader>
        {loaded ? (
          items.map((item: OmakaseSet, index: number) => (
            <OmakaseItem key={index} {...item} />
          ))
        ) : (
          <LoadingCircle />
        )}
      </div>
    );
  }
}
