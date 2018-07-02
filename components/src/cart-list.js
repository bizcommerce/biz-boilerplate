import CartElement from './cart-element.js';
import CartItem from './cart-item.js';

export default class CartList extends CartElement {
    constructor(items) {
        // Always call super first in constructor
        super();
        this.innerHTML = this.render(items);
    }

    render(items){
        const itemsTemplates = items.map((item) => `
            <cart-item name="${item.name}" link="${item.link}" img="${item.img}" qty="${item.quantity}" price="${item.price}" remove="${item.removeUrl}">
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