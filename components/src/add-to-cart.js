import CartItem from './cart-item.js';
import CartTotals from './cart-totals.js';
import CartElement from './cart-element.js';

class CartList extends CartElement {
    constructor(items) {
        // Always call super first in constructor
        super();
        this.innerHTML = this.render(items);
    }

    render(items){
        const itemsTemplates = items.map((item) => `
            <cart-item name="${item.name}" link="${item.link}" img="${item.img}" qty="${item.quantity}" price="${item.price}">
            </cart-item>
        `);
        return `
            <ul class="mycart__list list level0">
                ${itemsTemplates.join('')}
            </ul>
        `
 
    }
}
customElements.define('cart-list', CartList);

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
class CartComponent extends CartElement {

    constructor() {
        // Always call super first in constructor
        super();
        
        this.reload( data => {
            console.log(data);
              //https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots
            //https://alligator.io/web-components/composing-slots-named-slots/
            const {items, totals} = data;
            const template = document.createElement('template');
            template.innerHTML = `
                <div class="std">
                    <slot name="empty"></slot>
                </div>
            `
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.appendChild(template.content.cloneNode(true));

            //this.innerHTML = this.render(items, totals);
        });
    }

    connectedCallback(){
        console.log('Connected');
    }

    emptyContent(text){
      
        return `
            <div class="title title--sm"><div class="title title--sm">Seu carrinho está vazio</div></div>
            <div class="std" slot="empty">
                <slot></slot>
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
                    ${this.emptyContent(empty)}     
                </div>
            `
        } else {
            return `
                <div class="mycart__content">
                    ${this.fullContent(items, totals)}     
                </div>
            `
        }
        
    }
}
customElements.define('cart-content', CartComponent);

/*
jQuery(() => {
    document.body.appendChild(document.createElement('cart-content'));
})
*/
