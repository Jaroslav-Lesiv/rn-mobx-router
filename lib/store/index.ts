import { observable, action, computed } from "mobx";

export interface IRoute {
  key: string;
  name: string;
  params: any;
}

export interface IRouterStore {
  history: IRoute[];
  push: (route: IRoute) => void;
  replace: (route: IRoute) => void;
  back: () => void;
  initialRoute: IRoute;

  currentRoute: IRoute;
}

class RouterStore implements IRouterStore {
  @observable history: IRoute[] = [];
  routes = [];
  initialRoute = {
    key: "",
    name: "",
    params: {}
  };

  @action push(route: IRoute) {
    this.history.push(route);
  }

  @action replace(route: IRoute) {
    this.history[this.history.length - 1] = route;
  }

  @action back() {
    const previsionRoute = this.history[this.history.length - 2];
    if (previsionRoute) {
      this.history = this.history.slice(0, this.history.length - 2);
    } else {
      this.history = [this.initialRoute];
    }
  }

  @computed get currentRoute() {
    return this.history[this.history.length - 1];
  }
}

const routerStore = new RouterStore();

export default routerStore;
