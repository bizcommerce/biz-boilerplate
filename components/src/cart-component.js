import CartContent from './cart-content.js';
import CartHeader from './cart-header.js';
import CartElement from './cart-element.js';

export default class CartComponent extends CartElement {
    constructor() {
        // Always call super first in constructor
        super();
        this.run();
    }

    run(){
        this.load( data => {
            //https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots
            //https://alligator.io/web-components/composing-slots-named-slots/
            const {items, totals} = data;
            const template = document.createElement('template');
            template.innerHTML = this.render(items, totals);

            try {
                this.attachShadow({ mode: 'open' });
            } catch(error){
                const root = this.shadowRoot.querySelector('.mycart');
                this.shadowRoot.removeChild(root);
            }
            
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        });
    }

    render(items, totals){
        const main = new CartHeader().render(items, totals) + new CartContent().render(items, totals);
        return `
            <section class="mycart mycart--empty drop--right drop--top" id="carrinho">
                ${main}
            </section>
        `
    }

    connectedCallback(){
        console.log('Connected');
    }
}
customElements.define('cart-component', CartComponent);
