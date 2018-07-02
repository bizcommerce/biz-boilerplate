"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _gPO(o) { _gPO = Object.getPrototypeOf || function _gPO(o) { return o.__proto__; }; return _gPO(o); }

function _sPO(o, p) { _sPO = Object.setPrototypeOf || function _sPO(o, p) { o.__proto__ = p; return o; }; return _sPO(o, p); }

function _construct(Parent, args, Class) { _construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && Reflect.construct || function _construct(Parent, args, Class) { var Constructor, a = [null]; a.push.apply(a, args); Constructor = Parent.bind.apply(Parent, a); return _sPO(new Constructor(), Class.prototype); }; return _construct(Parent, args, Class); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() {} Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _sPO(Wrapper, _sPO(function Super() { return _construct(Class, arguments, _gPO(this).constructor); }, Class)); }; return _wrapNativeSuper(Class); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global['cart-bundle'] = global['cart-bundle'] || {}, global['cart-bundle'].es6 = global['cart-bundle'].es6 || {}, global['cart-bundle'].es6.js = factory());
})(void 0, function () {
  'use strict';
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

  var CartItem =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(CartItem, _HTMLElement);

    function CartItem(opts) {
      var _this;

      _classCallCheck(this, CartItem);

      // Always call super first in constructor
      _this = _possibleConstructorReturn(this, (CartItem.__proto__ || Object.getPrototypeOf(CartItem)).call(this));
      var data = Object.assign({
        name: _this.getAttribute('name'),
        link: _this.getAttribute('link'),
        img: _this.getAttribute('img'),
        quantity: _this.getAttribute('qty'),
        price: _this.getAttribute('price'),
        removeUrl: _this.getAttribute('remove')
      }, opts);
      _this.innerHTML = _this.render(data);
      return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
    }

    _createClass(CartItem, [{
      key: "render",
      value: function render(data) {
        return "\n            <li class=\"mycart__item item li--0\">\n                <a href=\"".concat(data.link, "\" title=\"").concat(data.name, "\" class=\"mycart__thumb\">\n                    <span class=\"imgcase\" style=\"background-image:url(").concat(data.img, ")\">\n                        <img src=\"").concat(data.img, "\"\n                            width=\"100\" height=\"100\" alt=\"Kit TAG Curadoria - junho de 2018\">\n                    </span>\n                </a>\n                <div class=\"mycart__details\">\n                    <div class=\"mycart__name\">\n                        <a href=\"").concat(data.link, "\">\n                            <span>").concat(data.name, "</span>\n                        </a>\n                    </div>\n            \n                    <div class=\"mycart__qtd\">\n                        <span class=\"label\">Qtd.:</span>\n                        <span class=\"num\">").concat(data.quantity, "</span>\n                    </div>\n            \n                    <span class=\"price\">").concat(data.price, "</span>\n            \n                    <a href=\"").concat(data.removeUrl, "\"\n                        title=\"Remover Este Item\" onclick=\"return confirm('Deseja realmente remover este produto?');\" class=\"mycart__remove btn btn--remove btn--outline\">\n                        <span>Remover Este Item</span>\n                    </a>\n                </div>\n            </li>\n        ");
      }
    }]);

    return CartItem;
  }(_wrapNativeSuper(HTMLElement));

  customElements.define('cart-item', CartItem);

  var CartElement =
  /*#__PURE__*/
  function (_HTMLElement2) {
    _inherits(CartElement, _HTMLElement2);

    function CartElement() {
      var _this2;

      _classCallCheck(this, CartElement);

      // Always call super first in constructor
      _this2 = _possibleConstructorReturn(this, (CartElement.__proto__ || Object.getPrototypeOf(CartElement)).call(this));
      _this2.client = jQuery;
      return _this2;
    }

    _createClass(CartElement, [{
      key: "load",
      value: function load(callback) {
        this.getCart(function ($raw) {
          var $container = $raw.find('.cart');
          var $table = jQuery('.cart-table', $container);
          var $items = jQuery('.cart-product-line', $table);
          var $totals = jQuery('.cart__boxes .totals__table', $container);
          var items = $items.map(function (index, element) {
            var $el = jQuery(element);
            var $link = $el.find('.product-image');
            var data = {
              name: jQuery.trim($el.find('.name').text()),
              link: $link.attr('href'),
              img: $link.find('img').attr('src'),
              price: $el.find('.product-cart-price').text(),
              quantity: $el.find('.qty-wrapper .qty').attr('value'),
              id: $el.find('a.btn-remove').attr('href')
            };
            return data;
          }).toArray();
          var totals = {
            'subtotal': $totals.find('tbody td:contains(Subtotal)').next().find('.price').text(),
            'discount': $totals.find('tbody td:contains(Desconto)').next().find('.price').text(),
            'total': $totals.find('tfoot .price').text()
          };
          callback({
            items: items,
            totals: totals
          });
        });
      }
    }, {
      key: "getCart",
      value: function getCart(callback) {
        jQuery('<div />').load('/checkout/cart .cart-ajax-case', function () {
          callback($j(this));
        });
      }
    }]);

    return CartElement;
  }(_wrapNativeSuper(HTMLElement));

  var CartTotals =
  /*#__PURE__*/
  function (_CartElement) {
    _inherits(CartTotals, _CartElement);

    function CartTotals(opts) {
      var _this3;

      _classCallCheck(this, CartTotals);

      // Always call super first in constructor
      _this3 = _possibleConstructorReturn(this, (CartTotals.__proto__ || Object.getPrototypeOf(CartTotals)).call(this));
      var data = Object.assign({
        total: _this3.getAttribute('total')
      }, opts);
      _this3.innerHTML = _this3.render(data);
      return _this3;
    }

    _createClass(CartTotals, [{
      key: "render",
      value: function render(data) {
        return "\n        <div class=\"mycart__totals\">\n            <div class=\"title title--sm\">\n                <span>Total</span>\n            </div>\n\n            <div class=\"regular-price\">\n                <span class=\"label\">Por:</span>\n                <span class=\"price\">".concat(data.total, "</span>\n            </div>\n            <!---\n            <div class=\"price-box-parcelado\">\n                em at\xE9\n                <span class=\"num\">\n                    <span class=\"parcels\">5x</span>\n                </span> de\n                <span class=\"value\">\n                    <span class=\"price\">R$21,76</span>\n                </span>\n                <span class=\"juros\">2,84% a.m. </span>\n            </div>\n            -->\n        </div>\n        ");
      }
    }]);

    return CartTotals;
  }(CartElement);

  customElements.define('cart-totals', CartTotals);

  var CartList =
  /*#__PURE__*/
  function (_CartElement2) {
    _inherits(CartList, _CartElement2);

    function CartList(items) {
      var _this4;

      _classCallCheck(this, CartList);

      // Always call super first in constructor
      _this4 = _possibleConstructorReturn(this, (CartList.__proto__ || Object.getPrototypeOf(CartList)).call(this));
      _this4.innerHTML = _this4.render(items);
      return _this4;
    }

    _createClass(CartList, [{
      key: "render",
      value: function render(items) {
        var itemsTemplates = items.map(function (item) {
          return "\n            <cart-item name=\"".concat(item.name, "\" link=\"").concat(item.link, "\" img=\"").concat(item.img, "\" qty=\"").concat(item.quantity, "\" price=\"").concat(item.price, "\" remove=\"").concat(item.removeUrl, "\">\n            </cart-item>\n        ");
        });
        return "\n            <ul class=\"mycart__list list level0\">\n                ".concat(itemsTemplates.join(''), "\n            </ul>\n        ");
      }
    }]);

    return CartList;
  }(CartElement);

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

  var CartContent =
  /*#__PURE__*/
  function (_CartElement3) {
    _inherits(CartContent, _CartElement3);

    function CartContent() {
      _classCallCheck(this, CartContent);

      return _possibleConstructorReturn(this, (CartContent.__proto__ || Object.getPrototypeOf(CartContent)).call(this));
    }

    _createClass(CartContent, [{
      key: "emptyContent",
      value: function emptyContent(text) {
        return "\n            <div class=\"title title--sm\">\n                <slot name=\"empty-title\"></slot>\n            </div>\n            <div class=\"std\">\n                <slot name=\"empty\"></slot>\n            </div>\n        ";
      }
    }, {
      key: "fullContent",
      value: function fullContent(items, totals) {
        var cartListHTML = new CartList(items).innerHTML;
        return "\n            <div class=\"title title--sm\">\n                <div class=\"title title--sm title-cart\">resumo da compra</div>\n            </div>\n            ".concat(cartListHTML, "\n            <cart-totals total=\"").concat(totals.total, "\"></cart-totals>\n            <div class=\"mycart__actions\">\n                <a href=\"/checkout/cart/\" class=\"editar\" title=\"Editar Carrinho\">\n                    <span>Editar Carrinho</span>\n                </a>\n                <a href=\"/checkout/onepage/\" class=\"finalizar\" title=\"Finalizar\">\n                    <span>Finalizar</span>\n                </a>\n            </div>\n        ");
      }
    }, {
      key: "render",
      value: function render(items, totals) {
        var empty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.innerHTML;

        if (!items.length) {
          return "\n                <div class=\"mycart__content\">\n                    <link rel=\"stylesheet\" type=\"text/css\" href=\"/media/interface/0/neon/css/one.css\" media=\"all\" />\n                    ".concat(this.emptyContent(empty), "     \n                </div>\n            ");
        } else {
          return "\n                \n                <div class=\"mycart__content\">\n                    <link rel=\"stylesheet\" type=\"text/css\" href=\"/media/interface/0/neon/css/one.css\" media=\"all\" />\n                    ".concat(this.fullContent(items, totals), "     \n                </div>\n            ");
        }
      }
    }]);

    return CartContent;
  }(CartElement);

  customElements.define('cart-content', CartContent);

  var CartHeader =
  /*#__PURE__*/
  function (_CartElement4) {
    _inherits(CartHeader, _CartElement4);

    function CartHeader() {
      _classCallCheck(this, CartHeader);

      return _possibleConstructorReturn(this, (CartHeader.__proto__ || Object.getPrototypeOf(CartHeader)).call(this));
    }

    _createClass(CartHeader, [{
      key: "render",
      value: function render(items) {
        return "\n            <div class=\"mycart__header\">\n                <a href=\"/checkout/cart/\" title=\"Ver carrinho\">\n                    <slot name=\"icon\"></slot>\n                    <span class=\"qtd cart__info\">".concat(items.length, "</span>\n                    <span class=\"text\">Meu Carrinho</span>\n                </a>\n            </div>\n        ");
      }
    }]);

    return CartHeader;
  }(CartElement);

  customElements.define('cart-header', CartHeader);
  alert('ok');

  var CartComponent =
  /*#__PURE__*/
  function (_CartElement5) {
    _inherits(CartComponent, _CartElement5);

    function CartComponent() {
      var _this5;

      _classCallCheck(this, CartComponent);

      // Always call super first in constructor
      _this5 = _possibleConstructorReturn(this, (CartComponent.__proto__ || Object.getPrototypeOf(CartComponent)).call(this));

      _this5.run();

      return _this5;
    }

    _createClass(CartComponent, [{
      key: "run",
      value: function run() {
        var _this6 = this;

        this.load(function (data) {
          //https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots
          //https://alligator.io/web-components/composing-slots-named-slots/
          var items = data.items,
              totals = data.totals;
          var template = document.createElement('template');
          template.innerHTML = _this6.render(items, totals);

          try {
            _this6.attachShadow({
              mode: 'open'
            });
          } catch (error) {
            var root = _this6.shadowRoot.querySelector('.mycart');

            _this6.shadowRoot.removeChild(root);
          }

          _this6.shadowRoot.appendChild(template.content.cloneNode(true));
        });
      }
    }, {
      key: "render",
      value: function render(items, totals) {
        var main = new CartHeader().render(items, totals) + new CartContent().render(items, totals);
        return "\n            <section class=\"mycart mycart--empty drop--right drop--top\" id=\"carrinho\">\n                ".concat(main, "\n            </section>\n        ");
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        console.log('Connected');
      }
    }]);

    return CartComponent;
  }(CartElement);

  customElements.define('cart-component', CartComponent);
  return CartComponent;
});
