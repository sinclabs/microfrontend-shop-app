import { LitElement } from 'lit';
export interface ICartItem {
    _id: string;
    name: string;
    quantity: number;
}
/**
 * Shopping cart element.
 */
declare class ShoppingCart extends LitElement {
    static styles: any;
    cart: Array<ICartItem>;
    updateCart(): void;
    connectedCallback(): void;
    render(): any;
}
declare global {
    interface HTMLElementTagNameMap {
        'shopping-cart': ShoppingCart;
    }
}
export {};
//# sourceMappingURL=shopping-cart.d.ts.map