import { LitElement } from 'lit';
interface IProduct {
    id: string;
    name: string;
    image: string;
    description: string;
}
/**
 * Shopping cart element.
 */
declare class ShoppingCart extends LitElement {
    static styles: import("lit").CSSResultGroup;
    products: Array<IProduct>;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'shopping-cart': ShoppingCart;
    }
}
export {};
//# sourceMappingURL=shopping-cart.d.ts.map