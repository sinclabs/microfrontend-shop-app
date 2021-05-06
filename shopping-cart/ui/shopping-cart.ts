interface IProduct {
    id: string
    name: string
    image: string
    description: string
  }

  
class ShoppingCart extends HTMLElement {
    shadow: ShadowRoot

    constructor() {
        super()
        this.shadow = this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.addEventListener('itemAddedToCart', (e) => {
            // @ts-ignore
            const product: IProduct = e.detail
            const li = document.createElement('li')
            li.innerText = product.name
            const ul = this.shadowRoot?.querySelector('ul')
            if(ul !== null || ul !== undefined) {
                ul?.append(li)
            }
        })
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
                <ul></ul>
                <ds-button labelText="Place order"></ds-button>
            </div>
        `
    }
}

customElements.define('shopping-cart', ShoppingCart)