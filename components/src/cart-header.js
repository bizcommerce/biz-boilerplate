import CartElement from './cart-element.js';

export default class CartHeader extends CartElement {
    constructor() {
        super();
    }
    render(items){
        return `
            <div class="mycart__header">
                <a href="/checkout/cart/" title="Ver carrinho">
                    <slot name="icon"></slot>
                    <span class="qtd cart__info">${items.length}</span>
                    <span class="text">Meu Carrinho</span>
                </a>
            </div>
        `
    }
}
customElements.define('cart-header', CartHeader);