import * as React from "react";
import { AppHeader } from "../components/organisms/appHeader";
import { UIHeader } from "../components/atoms/typography";
import { OmakaseItem } from "../components/organisms/omakaseItem";
import { LoadingCircle } from "../components/atoms/loadingCircle";
import AppFooter from "../components/organisms/appFooter";
import { OmakaseSet } from "../api/types";
import { ApiClient } from "../api/apiClient";

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

  async componentDidMount() {
    const client = new ApiClient();
    const data = await client.getOmakaseSets("5630002");

    this.setState({
      items: data.sets,
      loaded: true
    });
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
        <AppFooter />
      </div>
    );
  }
}
