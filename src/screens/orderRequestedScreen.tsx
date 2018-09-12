import * as React from "react";
import { UIHeader } from "../components/atoms/typography";

interface Props {}

interface State {
  isLoaded: boolean;
  data?: {
    remainingTimeInMinutes: number;
    storeName: string;
    orderNumber: string;
  };
}

export default class OrderRequestedScreen extends React.Component<
  Props,
  State
> {
  constructor(props: Props, state: State) {
    super(props, state);

    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        data: {
          remainingTimeInMinutes: 30,
          storeName: "楽天酒場",
          orderNumber: "00005782"
        }
      });
    }, 1000);
  }

  renderContent() {
    const { data } = this.state;
    if (!data) return null;

    const { remainingTimeInMinutes, storeName, orderNumber } = data;

    return (
      <div>
        <UIHeader>ご注文が完了しました</UIHeader>
        <div>
          <div style={{ textAlign: "center" }}>
            <p>ご注文番号</p>
            <p>{orderNumber}</p>
          </div>
          <div>
            <p>お届け目安時間: 約{remainingTimeInMinutes}分</p>
            <p>提供: {storeName}</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { isLoaded, data } = this.state;

    return (
      <div>{isLoaded ? this.renderContent() : <div>処理中です...</div>}</div>
    );
  }
}
