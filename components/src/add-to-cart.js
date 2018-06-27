import CartItem from './cart-item.js';
import CartTotals from './cart-totals.js';

class CartComponent extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();
        this.client = jQuery;
        const self = this;

        this.getCart().then(((data) => {
            const raw = jQuery(data);
            const $container = jQuery('.cart-ajax-case > .cart', raw);

            const $table = jQuery('.cart-table', $container);
            const $items = jQuery('.cart-product-line', $table);
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
                    removeUrl:  $el.find('.btn-remove').attr('href')
                }
                return new CartItem(data).innerHTML;
            }).toArray();

            const totals = {
              'subtotal':  $totals.find('tbody td:contains(Subtotal)').next().find('.price').text(),
              'discount':  $totals.find('tbody td:contains(Desconto)').next().find('.price').text(),
              'total':     $totals.find('tfoot .price').text()
            };

            self.innerHTML = self.render(items, totals);
        }));
    }

    getCart(){
        return this.client.get('/checkout/cart/');
    }

    render(items, totals){
        return `
            <div class="mycart__content">
                <div class="title title--sm">
                    <div class="title title--sm title-cart">resumo da compra</div>
                </div>
                <ul class="mycart__list list level0">
                    ${items.join('')}
                </ul>
                <cart-totals total="${totals.total}"></cart-totals>
                <div class="mycart__actions">
                    <a href="/checkout/cart/" class="editar" title="Editar Carrinho">
                        <span>Editar Carrinho</span>
                    </a>
                    <a href="/checkout/onepage/" class="finalizar" title="Finalizar">
                        <span>Finalizar</span>
                    </a>
                </div>
            </div>
        `
    }
}
customElements.define('cart-content', CartComponent);

jQuery(() => {
    document.body.appendChild(document.createElement('cart-content'));
})
