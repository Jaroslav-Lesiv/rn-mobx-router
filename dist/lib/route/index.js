"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var mobx_react_1 = require("mobx-react");
var Route = /** @class */ (function (_super) {
    __extends(Route, _super);
    function Route() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isActive: false
        };
        _this.shouldComponentUpdate = function (props, state) { return _this.state.isActive !== state.isActive; };
        return _this;
    }
    Route.getDerivedStateFromProps = function (props) {
        var isActive = Boolean(~props.routes.indexOf(props.currentRoute));
        return {
            isActive: isActive
        };
    };
    Route.prototype.render = function () {
        if (~this.props.routes.indexOf(this.props.currentRoute)) {
            return null;
        }
        return this.props.children;
    };
    return Route;
}(react_1.default.Component));
var MRoute = mobx_react_1.inject(function (_a) {
    var routerStore = _a.routerStore;
    return ({
        currentRoute: routerStore.currentRoute
    });
})(Route);
exports.default = MRoute;
