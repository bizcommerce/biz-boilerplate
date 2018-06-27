class AddToCart extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();
        this.client = jQuery;
        this.getCart().then(((data) => {
            const raw = jQuery(data);
            const container = jQuery('.cart-ajax-case > .cart', raw);
            const table = jQuery('.cart-table');
        }));
    }
    getCart(){
        return this.client.get('/checkout/cart/');
    }
}
customElements.define('add-to-cart', AddToCart);
document.createElement('add-to-cart');