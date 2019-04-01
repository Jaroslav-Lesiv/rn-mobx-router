import React from "react";
import { inject } from "mobx-react";
import { IRouterStore } from "../store";

interface IRouteComponentProps {
  key: string;
  router: IRouterStore;
}

@inject("router")
class Route extends React.Component<IRouteComponentProps> {
  render() {
    if (this.props.router.currentRoute.key !== this.props.key) {
      return null;
    }
    return this.props.children;
  }
}

export default Route;
