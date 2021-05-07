import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface IProduct {
    id: string
    name: string
    image: string
    description: string
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
    products: Array<IProduct> = [];

    connectedCallback() {
        super.connectedCallback();

        this.addEventListener('itemAddedToCart', (({ detail: product }: CustomEvent) => {
            this.setAttribute('products', JSON.stringify([...this.products, product]))
        }) as EventListener);
    }

    render() {
        const productTemplates = this.products.map(product => html`<li>${product.name}</li>`)
        return html`
            <div class="shoppingCart">
                <h1>Shopping Cart</h1>
                <ul> ${productTemplates} </ul>
                <ds-button labelText="Place order"></ds-button>
            </div>            
        `;
    }    
}

declare global {
    interface HTMLElementTagNameMap {
        'shopping-cart': ShoppingCart;
    }
}
