import React, { ComponentState } from "react";
import { inject } from "mobx-react";
import { IRouterStore } from "../store";

interface IRouteComponentProps {
  routes: string[];
  currentRoute: string;
}

class Route extends React.Component<IRouteComponentProps> {
  state = {
    isActive: false
  };

  static getDerivedStateFromProps(props: IRouteComponentProps) {
    const isActive = Boolean(~props.routes.indexOf(props.currentRoute));
    return {
      isActive
    };
  }

  shouldComponentUpdate = (
    props: IRouteComponentProps,
    state: ComponentState
  ) => this.state.isActive !== state.isActive;

  render() {
    if (!this.state.isActive) {
      return null;
    }
    return this.props.children;
  }
}

const MRoute = inject(({ routerStore }: { routerStore: IRouterStore }) => ({
  currentRoute: routerStore.currentRoute
}))(Route);
export default MRoute;
