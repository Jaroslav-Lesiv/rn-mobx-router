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
declare class RouterStore implements IRouterStore {
    history: IRoute[];
    routes: never[];
    initialRoute: {
        key: string;
        name: string;
        params: {};
    };
    push(route: IRoute): void;
    replace(route: IRoute): void;
    back(): void;
    readonly currentRoute: IRoute;
}
declare const routerStore: RouterStore;
export default routerStore;
//# sourceMappingURL=index.d.ts.map