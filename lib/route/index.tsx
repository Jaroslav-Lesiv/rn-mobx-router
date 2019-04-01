import React from "react";
import { inject } from "mobx-react";
import { IRouterStore } from "../store";

interface IRouteComponentProps {
  routes: string[];
  router: IRouterStore;
}

class Route extends React.Component<IRouteComponentProps> {
  render() {
    if (~this.props.routes.indexOf(this.props.router.currentRoute.key)) {
      return null;
    }
    return this.props.children;
  }
}

const MRoute = inject("RouterStore")(Route);
export default MRoute;
