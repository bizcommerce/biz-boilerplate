import CartItem from './cart-item.js';
import CartTotals from './cart-totals.js';
import CartList from './cart-list.js';
import CartElement from './cart-element.js';


class CartHeader extends CartElement {
    constructor() {
        super();
    }
    render(items){
        return `
            <div class="mycart__header">
                <a href="/checkout/cart/" title="Ver carrinho">
                    <svg class="ico"><use xlink:href="#cart"></use></svg>
                    <span class="qtd cart__info">${items.length}</span>
                    <span class="text">Meu Carrinho</span>
                </a>
            </div>
        `
    }
}


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
class CartContent extends CartElement {
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


class CartComponent extends CartElement {
    constructor() {
        // Always call super first in constructor
        super();
        
        this.reload( data => {
            //https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots
            //https://alligator.io/web-components/composing-slots-named-slots/
            const {items, totals} = data;
            const template = document.createElement('template');
            template.innerHTML = this.render(items, totals);

            this.attachShadow({ mode: 'open' });
            this.shadowRoot.appendChild(template.content.cloneNode(true));

            //this.innerHTML = this.render(items, totals);
        });
    }

    render(data){
        
    }

    connectedCallback(){
        console.log('Connected');
    }
}
/*
jQuery(() => {
    document.body.appendChild(document.createElement('cart-content'));
})
*/
