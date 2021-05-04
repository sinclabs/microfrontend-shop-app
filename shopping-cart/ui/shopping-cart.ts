class ShoppingCart extends HTMLElement {
    shadow: ShadowRoot

    constructor() {
        super()
        this.shadow = this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadow.innerHTML = `
            <style>
                .shoppingCart {
                    background-color: #E0DFD5;
                    height: 100%;
                    width: 100%;
                    color: #000;
                    font-family: sans-serif;
                    display: flex;
                    flex-direction: column;
                    place-content: space-between;
                }
                h1 {
                    padding: 10px;
                    text-align: center;
                    color: #313638;
                    margin: 0;
                    margin-top: 10px;
                }
            </style>
            <div class="shoppingCart">
                <h1>Shopping Cart</h1>
                <ds-button labelText="Place order"></ds-button>
            </div>
        `
    }
}

customElements.define('shopping-cart', ShoppingCart)