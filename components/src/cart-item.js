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
export default class CartItem extends HTMLElement {
    
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