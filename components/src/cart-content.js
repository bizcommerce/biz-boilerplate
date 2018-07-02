import CartItem from './cart-item.js';
import CartTotals from './cart-totals.js';
import CartList from './cart-list.js';
import CartElement from './cart-element.js';

/*
* @example
* <cart-content>
*  Carrinho vazio
* <cart-content/>
*
* <cart-content>
*    <span name="empty">Navegue por nossa loja e <strong>encha seu carrinho com as melhores ofertas!</strong></span>
* </cart-content>
*/
export default class CartContent extends CartElement {
    constructor(){
        super();
    }

    emptyContent(text){
        return `
            <div class="title title--sm">
                <slot name="empty-title"></slot>
            </div>
            <div class="std">
                <slot name="empty"></slot>
            </div>
        `
    }

    fullContent(items, totals){
        const cartListHTML = new CartList(items).innerHTML;
        return `
            <div class="title title--sm">
                <div class="title title--sm title-cart">resumo da compra</div>
            </div>
            ${cartListHTML}
            <cart-totals total="${totals.total}"></cart-totals>
            <div class="mycart__actions">
                <a href="/checkout/cart/" class="editar" title="Editar Carrinho">
                    <span>Editar Carrinho</span>
                </a>
                <a href="/checkout/onepage/" class="finalizar" title="Finalizar">
                    <span>Finalizar</span>
                </a>
            </div>
        `
    }

    render(items, totals, empty = this.innerHTML){
        if(!items.length){
            return `
                <div class="mycart__content">
                    <link rel="stylesheet" type="text/css" href="/media/interface/0/neon/css/one.css" media="all" />
                    ${this.emptyContent(empty)}     
                </div>
            `
        } else {
            return `
                
                <div class="mycart__content">
                    <link rel="stylesheet" type="text/css" href="/media/interface/0/neon/css/one.css" media="all" />
                    ${this.fullContent(items, totals)}     
                </div>
            `
        }
    }
}
customElements.define('cart-content', CartContent);