import * as React from "react";
import { withRouter } from "react-router-dom";
import { RouterProps, RouteProps, RouteComponentProps } from "react-router";

interface P {}

type Props = RouteComponentProps<P>;

class ScrollToTop extends React.Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
