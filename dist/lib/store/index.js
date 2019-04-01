"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var RouterStore = /** @class */ (function () {
    function RouterStore() {
        this.history = [];
        this.routes = [];
        this.initialRoute = {
            key: "",
            name: "",
            params: {}
        };
    }
    RouterStore.prototype.push = function (route) {
        this.history.push(route);
    };
    RouterStore.prototype.replace = function (route) {
        this.history[this.history.length - 1] = route;
    };
    RouterStore.prototype.back = function () {
        var previsionRoute = this.history[this.history.length - 2];
        if (previsionRoute) {
            this.history = this.history.slice(0, this.history.length - 2);
        }
        else {
            this.history = [this.initialRoute];
        }
    };
    Object.defineProperty(RouterStore.prototype, "currentRoute", {
        get: function () {
            return this.history[this.history.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        mobx_1.observable
    ], RouterStore.prototype, "history", void 0);
    __decorate([
        mobx_1.action
    ], RouterStore.prototype, "push", null);
    __decorate([
        mobx_1.action
    ], RouterStore.prototype, "replace", null);
    __decorate([
        mobx_1.action
    ], RouterStore.prototype, "back", null);
    __decorate([
        mobx_1.computed
    ], RouterStore.prototype, "currentRoute", null);
    return RouterStore;
}());
var routerStore = new RouterStore();
exports.default = routerStore;
