export default class CartTotals extends HTMLElement {
    
    constructor(opts) {
        // Always call super first in constructor
        super();
        const data = Object.assign({
            total:  this.getAttribute('name')
        }, opts);
        this.innerHTML = this.render(data);

        return this;
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