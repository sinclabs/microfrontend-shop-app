import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface ICartItem {
    _id: string
    name: string
    quantity: number
}

/**
 * Shopping cart element.
 */
@customElement('shopping-cart')
class ShoppingCart extends LitElement {
    static styles = css`
        .shoppingCart {
            background-color: #E0DFD5;
            height: 100%;
            width: 100%;
            color: #000;
            font-family: sans-serif;
            display: grid;
            grid-template-rows: auto 1fr auto;
        }
        h1 {
            padding: 10px;
            text-align: center;
            color: #313638;
            margin: 0;
            margin-top: 10px;
        }
   `;

    @property({type: Array})
    cart: Array<ICartItem> = [];

    updateCart() {
        fetch("http://localhost:8084/cart")
            .then(res => res.json())
            .then((cart: Array<ICartItem>) => {
                this.setAttribute('cart', JSON.stringify([...cart]))
            })
            .catch(console.error)
    }

    connectedCallback() {
        super.connectedCallback();

        this.addEventListener('itemAddedToCart', () => this.updateCart());

        this.updateCart()
    }

    render() {
        const productTemplates = this.cart.map(cartItem => html`<li>${cartItem.name}</li>`)
        return html`
            <div class="shoppingCart">
                <h1>Shopping Cart</h1>
                <ul> ${productTemplates} </ul>
                <ds-button label="Place order"></ds-button>
            </div>            
        `;
    }    
}

declare global {
    interface HTMLElementTagNameMap {
        'shopping-cart': ShoppingCart;
    }
}
