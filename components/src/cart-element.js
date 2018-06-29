export default class CartElement extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();
        this.client = jQuery;
    }

    load(callback){
        this.getCart(($raw) => {
            const self =        this;
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
                }
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