import React from "react";
import ReactDOM from "react-dom";

import Products from "./Products";

class ProductsPanel extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('div');
        this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

        const name = this.getAttribute('name');
        const url = 'https://www.google.com/search?q=' + encodeURIComponent(name ?? "");
        ReactDOM.render(<Products />, mountPoint);
    }
}

customElements.define('products-panel', ProductsPanel);