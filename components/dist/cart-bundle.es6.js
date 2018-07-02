(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global['cart-bundle'] = global['cart-bundle'] || {}, global['cart-bundle'].es6 = global['cart-bundle'].es6 || {}, global['cart-bundle'].es6.js = factory());
}(this, (function () { 'use strict';

    /**
    * @example 
    * console.log(new CartItem({
    *   name:       'Manobi',
    *    link:       'http://manobi.com.br',
    *    img:        'http://manobi.com.br',
    *    price:      10,
    *    quantity:   1,
    *    removeUrl:  'http://manobi.com.br'
    * }));
    * @example
    * <cart-item name="Nome do produto" price="20"></cart-item>
    */
    class CartItem extends HTMLElement {
        
        constructor(opts) {
            // Always call super first in constructor
            super();
            const data = Object.assign({
                name:       this.getAttribute('name'),
                link:       this.getAttribute('link'),
                img:        this.getAttribute('img'),
                quantity:   this.getAttribute('qty'),
                price:      this.getAttribute('price'),
                removeUrl:  this.getAttribute('remove')
            }, opts);
            this.innerHTML = this.render(data);
            
            return this;
        }

        render(data){
            return `
            <li class="mycart__item item li--0">
                <a href="${data.link}" title="${data.name}" class="mycart__thumb">
                    <span class="imgcase" style="background-image:url(${data.img})">
                        <img src="${data.img}"
                            width="100" height="100" alt="Kit TAG Curadoria - junho de 2018">
                    </span>
                </a>
                <div class="mycart__details">
                    <div class="mycart__name">
                        <a href="${data.link}">
                            <span>${data.name}</span>
                        </a>
                    </div>
            
                    <div class="mycart__qtd">
                        <span class="label">Qtd.:</span>
                        <span class="num">${data.quantity}</span>
                    </div>
            
                    <span class="price">${data.price}</span>
            
                    <a href="${data.removeUrl}"
                        title="Remover Este Item" onclick="return confirm('Deseja realmente remover este produto?');" class="mycart__remove btn btn--remove btn--outline">
                        <span>Remover Este Item</span>
                    </a>
                </div>
            </li>
        `
        }
    }
    customElements.define('cart-item', CartItem);

    class CartElement extends HTMLElement {

        constructor() {
            // Always call super first in constructor
            super();
            this.client = jQuery;
        }

        load(callback){
            this.getCart(($raw) => {
                const $container =  $raw.find('.cart');

                const $table =  jQuery('.cart-table', $container);
                const $items =  jQuery('.cart-product-line', $table);
                const $totals = jQuery('.cart__boxes .totals__table', $container);

                let items = $items.map((index, element) => {
                    const $el = jQuery(element);
                    const $link = $el.find('.product-image');
                    const data = {
                        name:       jQuery.trim($el.find('.name').text()),
                        link:       $link.attr('href'),
                        img:        $link.find('img').attr('src'),
                        price:      $el.find('.product-cart-price').text(),
                        quantity:   $el.find('.qty-wrapper .qty').attr('value'),
                        id:  $el.find('a.btn-remove').attr('href')
                    };
                    return data;
                }).toArray();

                const totals = {
                  'subtotal':  $totals.find('tbody td:contains(Subtotal)').next().find('.price').text(),
                  'discount':  $totals.find('tbody td:contains(Desconto)').next().find('.price').text(),
                  'total':     $totals.find('tfoot .price').text()
                };

                callback({items, totals});
            });
        }

        getCart(callback){
            jQuery('<div />').load('/checkout/cart .cart-ajax-case', function(){
                callback($j(this));
            });
        }
    }

    class CartTotals extends CartElement {
        
        constructor(opts) {
            // Always call super first in constructor
            super();
            const data = Object.assign({
                total:  this.getAttribute('total')
            }, opts);

            this.innerHTML = this.render(data);
        }

        render(data){
            return `
        <div class="mycart__totals">
            <div class="title title--sm">
                <span>Total</span>
            </div>

            <div class="regular-price">
                <span class="label">Por:</span>
                <span class="price">${data.total}</span>
            </div>
            <!---
            <div class="price-box-parcelado">
                em até
                <span class="num">
                    <span class="parcels">5x</span>
                </span> de
                <span class="value">
                    <span class="price">R$21,76</span>
                </span>
                <span class="juros">2,84% a.m. </span>
            </div>
            -->
        </div>
        `
        }
    }
    customElements.define('cart-totals', CartTotals);

    class CartList extends CartElement {
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

    class CartHeader extends CartElement {
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

    alert('ok');
    class CartComponent extends CartElement {
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

    return CartComponent;

})));
