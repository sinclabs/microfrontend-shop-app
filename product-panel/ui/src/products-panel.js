"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
var react_dom_1 = __importDefault(require("react-dom"));
var Products_1 = __importDefault(require("./Products"));
var ProductsPanel = /** @class */ (function (_super) {
    __extends(ProductsPanel, _super);
    function ProductsPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductsPanel.prototype.connectedCallback = function () {
        var mountPoint = document.createElement('div');
        this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
        var name = this.getAttribute('name');
        var url = 'https://www.google.com/search?q=' + encodeURIComponent(name !== null && name !== void 0 ? name : "");
        react_dom_1.default.render(<Products_1.default />, mountPoint);
    };
    return ProductsPanel;
}(HTMLElement));
customElements.define('products-panel', ProductsPanel);
