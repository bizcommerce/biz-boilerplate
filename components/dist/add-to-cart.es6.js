(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global['add-to-cart'] = global['add-to-cart'] || {}, global['add-to-cart'].es6 = global['add-to-cart'].es6 || {}, global['add-to-cart'].es6.js = factory());
}(this, (function () { 'use strict';

    /*
    jQuery(() => {
        document.body.appendChild(document.createElement('cart-content'));
    })
    */
    /*
    * @example <add-to-cart><span>Comprar</span></add-to-cart>
    */
    class AddToCart extends HTMLElement {
        constructor(id){
            super();
            this.id = id || this.getAttribute('product-id');
           
            const template = document.createElement('template');
            template.innerHTML = this.render();

            this.attachShadow({ mode: 'open' });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            
            this.addEventListener('click', (event) => {
                event.preventDefault();
                jQuery.get('/extendedsales/product/addtocart/product/' + this.id).then((response) => {
                    jQuery('cart-component').each(function(i, component){
                        component.run();
                    });
                });
            });
        }
        render(){
            return `
            <button class="button btn-cart add-to-cart buy--ajax">
                <slot></slot>
            </button>
        `
        }
    }
    customElements.define('add-to-cart', AddToCart);

    return AddToCart;

})));
