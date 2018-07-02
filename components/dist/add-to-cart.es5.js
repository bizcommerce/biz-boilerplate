"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _gPO(o) { _gPO = Object.getPrototypeOf || function _gPO(o) { return o.__proto__; }; return _gPO(o); }

function _sPO(o, p) { _sPO = Object.setPrototypeOf || function _sPO(o, p) { o.__proto__ = p; return o; }; return _sPO(o, p); }

function _construct(Parent, args, Class) { _construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && Reflect.construct || function _construct(Parent, args, Class) { var Constructor, a = [null]; a.push.apply(a, args); Constructor = Parent.bind.apply(Parent, a); return _sPO(new Constructor(), Class.prototype); }; return _construct(Parent, args, Class); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() {} Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _sPO(Wrapper, _sPO(function Super() { return _construct(Class, arguments, _gPO(this).constructor); }, Class)); }; return _wrapNativeSuper(Class); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global['add-to-cart'] = global['add-to-cart'] || {}, global['add-to-cart'].es6 = global['add-to-cart'].es6 || {}, global['add-to-cart'].es6.js = factory());
})(void 0, function () {
  'use strict';
  /*
  jQuery(() => {
      document.body.appendChild(document.createElement('cart-content'));
  })
  */

  /*
  * @example <add-to-cart><span>Comprar</span></add-to-cart>
  */

  var AddToCart =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(AddToCart, _HTMLElement);

    function AddToCart(id) {
      var _this;

      _classCallCheck(this, AddToCart);

      _this = _possibleConstructorReturn(this, (AddToCart.__proto__ || Object.getPrototypeOf(AddToCart)).call(this));
      _this.id = id || _this.getAttribute('product-id');
      var template = document.createElement('template');
      template.innerHTML = _this.render();

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(template.content.cloneNode(true));

      _this.addEventListener('click', function (event) {
        event.preventDefault();
        jQuery.get('/extendedsales/product/addtocart/product/' + _this.id).then(function (response) {
          jQuery('cart-component').each(function (i, component) {
            component.run();
          });
        });
      });

      return _this;
    }

    _createClass(AddToCart, [{
      key: "render",
      value: function render() {
        return "\n            <button class=\"button btn-cart add-to-cart buy--ajax\">\n                <slot></slot>\n            </button>\n        ";
      }
    }]);

    return AddToCart;
  }(_wrapNativeSuper(HTMLElement));

  customElements.define('add-to-cart', AddToCart);
  return AddToCart;
});
