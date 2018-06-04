/**
 * Tema:     Neon
 * Versão:   1.0
 * Update:   05/2016
 */

;(function ($) {

  $.fn.neonTheme = function (options) {

      var neon = $.extend({}, $.fn.neonTheme.custom, options);

      /**
       * dropFrom()
       */
      if (neon.default_dropFrom !== false) {
          var drops = ['.mywish', '.mycart', '.myaccount', '.categories:not(.categories--carrossel) .li--0', '.search__filter'];
          $j(document)
              .ready(function (e) {
                  drop_from(drops)
              });
          $j(window)
              .on('resizeStop', function (e) {
                  drop_from(drops)
              })
              .on('scrollStop', function (e) {
                  drop_from(drops)
              });
      }
      if (neon.dropFrom !== false) {
          $j(document)
              .ready(function (e) {
                  drop_from(neon.dropFrom)
              });
          $j(window)
              .on('resizeStop', function (e) {
                  drop_from(neon.dropFrom)
              })
              .on('scrollStop', function (e) {
                  drop_from(neon.dropFrom)
              });
      }

      /**
       * fix_IE_SVGs()
       */
      if (neon.fix_IE_SVGs !== false) {
          $j(document)
              .ready(function (e) {
                  fix_IE_SVGs()
              });
          $j(window)
              .on('resizeStop', function (e) {
                  fix_IE_SVGs()
              });
      }

      /**
       * default_categories_justify()
       */
      if (neon.default_categories_justify !== false) {
          $j(document)
              .ready(function (e) {
                  default_categories_justify()
              });
          $j(window)
              .on('resizeStop', function (e) {
                  default_categories_justify()
              });
      }

      /**
       * default_categories_mini()
       */
      if (neon.default_categories_mini !== false) {
          $j(document)
              .ready(function (e) {
                  default_categories_mini()
              });
      }

      /**
       * default_carrossel_produtos()
       */
      if (neon.default_carrossel_produtos !== false) {
          $j(document)
              .ready(function (e) {
                  default_carrossel_produtos()
              });
      }

      /**
       * fix_zoomHeader()
       */
      if (neon.fix_zoomHeader !== false) {
          $j(document)
              .ready(function (e) {
                  fix_zoomHeader()
              });
      }

      /**
       * addSVG() - defaults
       */
      if (neon.default_SVGs !== false) {
          var truck = {
              'img-truck': {
                  selector: '.frete__title',
                  mode: 'append'
              }
          };
          var svgs = {
              'img-truck': {
                  selector: '.addresses-primary ol li:last-child h3, .order-info-box .shipping-address h2',
                  mode: 'prepend'
              },
              'img-os-new': {selector: '.order-status.state-new, .order-status.state-pending_payment, .order-status.state-payment_review'},
              'img-os-ok': {selector: '.order-status.state-processing'},
              'img-os-sent': {selector: '.order-status.state-complete'},
              'img-os-hold': {selector: '.order-status.state-holded'},
              'img-os-cancel': {selector: '.order-status.state-closed, .order-status.state-canceled'},
              'img-bill': {
                  selector: '.addresses-primary ol li:first-child h3, .order-info-box .billing-address h2',
                  mode: 'prepend'
              },
              'img-track': {
                  selector: '.order-items *:not(.order-links) a[onclick*=track]',
                  mode: 'prepend'
              },
              'img-facebook': {selector: '.socialconnect__facebook a, .socialaccount__facebook a'},
              'img-twitter': {selector: '.socialconnect__twitter a, .socialaccount__twitter a'},
              'img-googleplus': {selector: '.socialconnect__google a, .socialaccount__google a'},
              'img-linkedin': {selector: '.socialconnect__linkedin a, .socialaccount__linkedin a'},
              'i-grid': {
                  selector: '.toolbar .view-mode .grid',
                  mode: 'html'
              },
              'i-list': {
                  selector: '.toolbar .view-mode .list',
                  mode: 'html'
              }
          };
          $j(document)
              .ready(function () {
                  addSVG(svgs);
                  addSVG(truck);
              });
      }
      if (neon.addSVG !== false) {
          $j(document)
              .ready(function () {
                  addSVG(neon.addSVG)
              });
      }

      /**
       * default_categories_carrossel()
       */
      if (neon.default_categories_carrossel !== false) {
          $j(document)
              .ready(function (e) {
                  default_categories_carrossel()
              });
      }

      /**
       * default_carrossel_brands()
       */
      if (neon.default_carrossel_brands !== false) {
          $j(document)
              .ready(function (e) {
                  default_carrossel_brands()
              });
      }

      /**
       * default_carrossel_jointsales()
       */
      if (neon.default_carrossel_jointsales !== false) {
          $j(document)
              .ready(function (e) {
                  default_carrossel_jointsales()
              });
      }

      /**
       * fix_category_description()
       */
      if (neon.fix_category_description !== false) {
          $j(document)
              .ready(function (e) {
                  fix_category_description()
              });
      }

      /**
       * default_tabs()
       */
      if (neon.default_tabs !== false) {
          $j(document)
              .ready(function (e) {
                  default_tabs()
              });
      }

      /**
       * fix_address_phone()
       */
      if (neon.fix_address_phone !== false) {
          $j(document)
              .ready(function (e) {
                  fix_address_phone()
              });
      }

      /**
       * fix_catalog_flexbox()
       */
      if (neon.fix_catalog_flexbox !== false) {
          $j(document)
              .ready(function (e) {
                  fix_catalog_flexbox()
              });
      }

      /**
       * orderStatus()
       */
      //if(neon.orderStatus !== false){
      $j(document)
          .ready(function (e) {
              orderStatus()
          });
      //}

      /**
       * m_categories()
       */
      if (neon.m_categories !== false) {
          $j(document)
          // observer para abrir e fechar o menu
              .on('click', '.categories__show', function () {
                  var menu = $j('#' + $j(this).attr('data-menu'));
                  menu.addClass('on');
                  lockBody(true);
              })
              .on('click', '.categories__hide', function () {
                  var menu = $j('#' + $j(this).attr('data-menu'));
                  menu.removeClass('on');
                  lockBody(false);
              });
      }

      /**
       * m_search()
       */
      if (neon.m_search !== false) {
          $j(document)
          // observers para abrir e fechar a busca
              .on('click', '.header .search__button', function (e) {
                  if ($j(this).closest('.search').find('.search__hide').length == 0) {
                      // se não tiver sido criado o botão de fechar
                      $j(this).closest('.search').find('.search__input').after('<div class="search__hide btn btn--close"><span>Fechar</span></div>');
                  }
                  if (is568() && !$j(this).closest('.search').hasClass('on')) {
                      // se a tela for <= que 568px e for a primeira vez que ele é clicado
                      $j(this).closest('.search').addClass('on').find('.search__input').focus()
                      return false;
                  } // se não for a primeira vez, ele não interrompe a ação e deixa o form ser enviado
              })
              .on('click', '.search__hide', function () {
                  $j(this).closest('.search').removeClass('on');
                  $j(this).remove();
              })
              .ready(function () {
                  m_search()
              });
          $j(window)
              .on('resizeStop', function () {
                  m_search()
              });
      }

      /**
       * m_filters()
       */
      if (neon.m_filters !== false) {
          $j(window)
          // observer para ocultar o botão de filtro ao rolar sobre o .footer-container
              .scroll(function (e) {
                  if (is992() && $j('.filters').length) {
                      var scrolled = $j(window).scrollTop() + $j(window).height(),
                          limit = $j('.footer-container').offset().top - parseInt($j('.filters > .title').css('bottom'));

                      if (scrolled >= limit) {
                          $j('.filters > .title').addClass('scrolled');
                      } else {
                          $j('.filters > .title').removeClass('scrolled');
                      }
                  }
              })
              .on('resizeStop', function () {
                  m_filters()
              });
          $j(document)
          // observer para mostrar e ocultar os filtros
              .on('click', '.filters > .title', function (e) {
                  if (is992()) {
                      if ($j(this).closest('.filters').hasClass('on')) {
                          $j(this).closest('.filters').removeClass('on');
                          hideHeader(false);
                          lockBody(false);
                      } else {
                          $j(this).closest('.filters').addClass('on');
                          hideHeader(true);
                          lockBody(true);

                          if ($j('.header .search').hasClass('on')) {
                              $j('.header .search').removeClass('on');
                              $j('.header .search__hide').remove();
                          }
                      }
                      e.preventDefault();
                  }
              })
              .ready(function () {
                  m_filters()
              });
      }

      /**
       * m_myaccount()
       */
      if (neon.m_myaccount !== false) {
          $j(document)
              .on('click', '.myaccount__header', function (e) {
                  if (is992()) {
                      $j(this).parent().addClass('on');
                      hideHeader(true);
                      lockBody(true);

                      if ($j(this).parent().find('.myaccount__hide').length == 0) {
                          $j(this).parent().find('.myaccount__content').prepend('<div class="myaccount__hide btn btn--back"><span>Fechar</span></div>');
                      }

                      e.preventDefault();
                      return false;
                  }
              })
              .on('click', '.myaccount__hide', function () {
                  $j(this).closest('.myaccount').removeClass('on');
                  hideHeader(false);
                  lockBody(false);
              })
              .ready(function () {
                  m_myaccount()
              });
          $j(window).on('resizeStop', function () {
              m_myaccount()
          });
      }

      /**
       * m_mycart()
       */
      if (neon.m_mycart !== false) {
          $j(document)
              .on('click', '.mycart__header', function () {
                  if (is992()) {
                      $j(this).parent().addClass('on');
                      hideHeader(true);
                      lockBody(true);

                      if ($j(this).parent().find('.mycart__hide').length == 0) {
                          $j(this).parent().find('.mycart__content').prepend('<div class="mycart__hide btn btn--back"><span>Fechar</span></div>');
                      }

                      return false;
                  }
              })
              .on('click', '.mycart__hide', function () {
                  $j(this).closest('.mycart').removeClass('on');
                  hideHeader(false);
                  lockBody(false);
              })
              .ready(function () {
                  m_mycart()
              });
          $j(window).on('resizeStop', function () {
              m_mycart()
          });
      }

      /**
       * m_parcelamento()
       */
      if (neon.m_parcelamento !== false) {
          $j(document)
              .on('click', '.parcelamento .title', function () {
                  if (is992()) {
                      $j(this).parent().addClass('on');
                      hideHeader(true);
                      lockBody(true);

                      if ($j(this).next('ul').find('.parcelamento__hide').length == 0) {
                          $j(this).next('ul').prepend('<div class="btn btn--back parcelamento__hide"><span>Fechar</span></div>');
                      }
                  }
              })
              .on('click', '.parcelamento__hide', function () {
                  if (is992()) {
                      $j(this).closest('.parcelamento').removeClass('on');
                      hideHeader(false);
                      lockBody(false);
                  }
              })
              .ready(function () {
                  m_parcelamento()
              });
          $j(window).on('resizeStop', function () {
              m_parcelamento()
          });
      }

      /**
       * m_frete()
       */
      if (neon.m_frete !== false) {
          $j(document)
              .on('click', '.frete__title', function () {
                  if (is992()) {
                      setTimeout(function () {
                          if ($j(this).closest('.frete').hasClass('frete--open')) {
                              hideHeader(false);
                              lockBody(false);
                          } else {
                              hideHeader(true);
                              lockBody(true);

                              if ($j('.frete__hide').length == 0) {
                                  $j('.frete__content').prepend('<div class="frete__hide btn btn--back"><span>Fechar</span></div>');
                              }
                          }
                      }, 100);
                  }
              })
              .on('click', '.frete__hide', function () {
                  $j(this).closest('.frete').removeClass('frete--open');
                  hideHeader(false);
                  lockBody(false);
              })
              .ready(function () {
                  m_frete()
              });
          $j(window).on('resizeStop', function () {
              m_frete()
          });
      }

      /**
       * m_produto()
       */
      if (neon.m_produto !== false) {
          $j(document)
              .on('click',
                  '.related__title, .recommended__title, .whosaw__title, .jointsales__title, .upsell__title, .reviews__title',
                  function () {
                      if (is568()) {
                          if ($j(this).parent().hasClass('on')) {
                              $j(this).parent().removeClass('on');
                              hideHeader(false);
                              lockBody(false);
                          } else {
                              $j(this).parent().addClass('on');
                              hideHeader(true);
                              lockBody(true);
                          }
                      }
                  })
              .on('click',
                  '.related__hide, .recommended__hide, .whosaw__hide, .jointsales__hide, .upsell__hide, .reviews__hide',
                  function () {
                      $j(this).parent().parent().removeClass('on');
                      hideHeader(false);
                      lockBody(false);
                  })
              .ready(function () {
                  m_produto()
              });
          $j(window).on('resizeStop', function () {
              m_produto()
          });
      }

      /**
       * m_tabs()
       */
      if (neon.m_tabs !== false) {
          $j(document)
              .on('click', '.tabs__tab', function () {
                  if (is568()) {
                      if ($j(this).next('dd').hasClass('open')) {
                          $j(this).next('dd').removeClass('open');
                          hideHeader(false);
                          lockBody(false);
                      } else {
                          $j(this).next('dd').addClass('open');
                          hideHeader(true);
                          lockBody(true);

                          if ($j(this).next('dd').find('.tabs__hide').length == 0) {
                              $j(this).next('dd').prepend('<div class="tabs__hide btn btn--back"><span>Fechar</span></div>');
                          }
                      }
                  }
              })
              .on('click', '.tabs__hide', function () {
                  $j(this).parent().removeClass('open');
                  hideHeader(false);
                  lockBody(false);
              })
              .ready(function () {
                  m_tabs()
              });
          $j(window).on('resizeStop', function () {
              m_tabs()
          });

      }

      /**
       * m_painelCliente()
       */
      if (neon.m_painelCliente !== false) {
          $j(document)
              .on('click', '.block-account .block-title', function () {
                  if (is992()) {
                      if ($j('.block-account').hasClass('on')) {
                          $j('.block-account').removeClass('on');
                          hideHeader(false);
                          lockBody(false);
                      } else {
                          $j('.block-account').addClass('on');
                          hideHeader(true);
                          lockBody(true);
                      }
                  }
              })
              .ready(function () {
                  m_painelCliente()
              });
          $j(window).on('resizeStop', function () {
              m_painelCliente()
          });
      }

  };

  $.fn.neonTheme.custom = {
      // defaults
      default_categories_justify: true,
      default_categories_mini: true,
      default_categories_carrossel: true,
      default_carrossel_produtos: true,
      default_carrossel_jointsales: true,
      default_carrossel_brands: true,
      default_dropFrom: true,
      default_SVGs: true,
      default_tabs: true,
      // fixes
      fix_IE_SVGs: true,
      fix_zoomHeader: true,
      fix_address_phone: true,
      fix_category_description: true,
      fix_catalog_flexbox: true,
      // responsive
      m_categories: true,
      m_search: true,
      m_filters: true,
      m_myaccount: true,
      m_mycart: true,
      m_parcelamento: true,
      m_frete: true,
      m_produto: true,
      m_tabs: true,
      m_painelCliente: true,
      // funcionalidades
      dropFrom: false, // [array]
      addSVG: false // {svg: { options }}
  };

}(jQuery));

/**
* Adiciona classes para posicionar dropdowns
* @param dropdowns
*/
function drop_from(dropdowns) {

  var h_middle = $j(window).width() / 2,
      v_middle = $j(window).height() / 2;

  $j.each(dropdowns, function (i, el) {
      var drop = $j('' + el);
      if (drop.length) {
          drop.each(function (i, drop) {

              var top = $j(drop).offset().top - $j(window).scrollTop(),
                  left = $j(drop).offset().left - $j(window).scrollLeft();

              if (left > h_middle) {
                  $j(drop).addClass('drop--right').removeClass('drop--left');
              } else {
                  $j(drop).addClass('drop--left').removeClass('drop--right');
              }

              if (top > v_middle) {
                  $j(drop).addClass('drop--bottom').removeClass('drop--top');
              } else {
                  $j(drop).addClass('drop--top').removeClass('drop--bottom');
              }

          });
      }
  });

}

/**
* Arruma o width dos SVGs de pagtos, envios e redes sociais para o IE
*/
function fix_IE_SVGs() {
  var SVGs = $j('.pays__svg, .ships__svg, .socials__svg');
  if (SVGs.length) {
      SVGs.each(function (i, el) {

          var svg_class = $j(el).attr('class').replace(/light|dark|onecolor|pays__svg|\s/g, '');
          var svgHTML = $j(el).parent().html();
          var regex = /viewBox\=[\"\'](.*?)[\"\']/g;
          var viewbox = regex.exec(svgHTML);

          if (typeof viewbox != "undefined" && viewbox) {
              viewbox = viewbox[1].split(' ');

              var h = $j(el).height();
              var boxWidth = viewbox[2];
              var boxHeight = viewbox[3];
              var newWidth = (boxWidth * h) / boxHeight;

              newWidth = newWidth.toFixed(3);

              if ($j(el).parent().find('style').length) {
                  $j(el).parent().find('style').remove();
              }
              $j(el).after('<style>svg.pays__svg.' + svg_class + '{ width: ' + newWidth + 'px }</style>');
          }

      });
  }
}

/**
* Menu de Categorias - Modo Justify
*/
function default_categories_justify() {
  var menu = $j('.categories--justify');
  if (menu.length) {
      menu.each(function (i, menu) {

          var limit = $j('> .ul--0', menu).width(),
              menu_id = $j(menu).attr('id'),
              width = 0;

          $j('> .ul--0 > .li--0', menu).removeClass('removed').each(function (i, el) {
              width += $j(el).width();

              if (width > limit) {
                  $j('#' + menu_id + ' > .ul--0 > .li--0').slice(i).addClass('removed');
                  return false;
              }
          });

      });
  }
}

/**
* Menu de Categorias - Modo Mini
*/
function default_categories_mini() {
  // menu mini
  $j('.categories__header, .categories__close').click(function () {
      if ($j('.categories__content').hasClass('open')) {
          $j('.categories__content').first().removeClass('open');
          lockBody(false);
      } else {
          $j('.categories__content').first().addClass('open');
          lockBody(true);
      }
  });
  if ($j('.categories__content').length && $j('body > .categories__content').length == 0) {
      $j('body').append('.categories__content');
      $j('.categories__content .ul--0').append('<li class="li--0 li--fix" /><li class="li--0 li--fix" /><li class="li--0 li--fix" /><li class="li--0 li--fix" /><li class="li--0 li--fix" />');
  }
}

/**
* Menu de Categorias - Modo Carrossel
*/
function default_categories_carrossel() {
  var menu = $j('.categories--carrossel');

  if (menu.find('.li--0').length > 0) {
      menu.find('.ul--0').owlCarousel({
          navigation: true,
          navigationText: ['?', '?'],
          pagination: false,
          afterInit: function () {
              menu.addClass('loaded');
          }
      });
  }
}

/**
* Ativa o carrossel na Coleção de Produtos
*/
function default_carrossel_produtos() {
  var carrossel = $j('.carrossel .products__list');
  if (carrossel.length) {
      carrossel.each(function (i, el) {
          if ($j(el).parent().hasClass('categories__products')) {
              // se for um carrossel em um menu

              $j(el).owlCarousel({
                  singleItem: true,
                  itemScaleUp: true,
                  autoPlay: 3000,
                  stopOnHover: true,
                  navigation: false,
                  beforeMove: function () {
                      if (typeof $j.fn.lazyload != "undefined") {
                          $j(el).find('img').lazyload();
                      }
                  }
              });
          } else {
              // se for em uma listagem normal

              $j(el).owlCarousel({
                  navigation: true,
                  navigationText: ['?', '?'],
                  items: 5,
                  itemsCustom: [[0, 1],
                      [568, 2],
                      [768, 3],
                      [1024, 4],
                      [1270, 5]],
                  beforeMove: function () {
                      if (typeof $j.fn.lazyload != "undefined") {
                          $j(el).find('img').lazyload();
                      }
                  }
              });
          }

      });
  }
}

/**
* Arruma o hover do Zoom x Header
*/
function fix_zoomHeader() {
  $j('.header-container').hover(function () {
      if ($j('.zoomContainer').length) {
          $j('.zoomContainer').hide();
      }
  }, function () {
      if ($j('.zoomContainer').length) {
          $j('.zoomContainer').show();
      }
  });
}

/**
* Adiciona SVGs do sprite no DOM
* @param elements
*/
function addSVG(svgs) {
  $j.each(svgs, function(svg,opt){
      var svg = svg,
          selector = $j(opt.selector);

      if($j('#'+svg).length){
          if(selector.length > 0 && selector.find('.'+svg).length == 0){
              var mode = (typeof opt.mode != 'undefined' ) ? opt.mode : 'append',
                  ratio = (typeof opt.ratio != 'undefined' ) ? opt.ratio : true,
                  aspect = '';

              if(ratio === false){
                  aspect = ' preserveAspectRatio="none"';
              }

              var ready_svg = '<svg class="ico '+svg+'"'+aspect+'><use xlink:href="#'+svg+'" /></svg>';

              selector.each(function(i,el){
                  if(mode === 'prepend'){
                      $j(el).prepend(ready_svg);
                  }else if(mode === 'html'){
                      $j(el).html(ready_svg);
                  }else{
                      $j(el).append(ready_svg);
                  }
              });
          }
      }else{
          console.error('Interface - o SVG sprite #'+svg+' não existe.');
      }
  });
}

/**
* Ativa o carrossel na listagem de marcas
*/
function default_carrossel_brands() {
  var marcas = $j('.brands--carrossel .brands__list');

  if (marcas.length) {
      marcas.each(function (i, el) {
          $j(el).owlCarousel({
              itemsScaleUp: true,
              navigation: true,
              navigationText: ['?', '?'],
              pagination: false
          });
      });
  }
}

/**
* Ativa o Carrossel do @compre-junto
*/
function default_carrossel_jointsales() {
  var jointsales = $j('.jointsales__items');

  if (jointsales.length) {
      jointsales.each(function (i, el) {
          $j(el).owlCarousel({
              singleItem: true,
              itemScaleUp: true,
              navigation: true,
              navigationText: ['?', '?'],
              autoHeight: true,
              beforeMove: function () {
                  if (typeof $j.fn.lazyload != "undefined") {
                      $j(el).find('img').lazyload();
                  }
              }
          });
      });
  }
}

/**
* Troca a descrição da categoria de lugar
*/
function fix_category_description() {
  // category description
  if ($j('.category-description').length > 0 && $j('.toolbar').length > 0) {
      $j('.toolbar').first().after($j('.category-description'));
      $j('.category-description').show();
  }
}

/**
* Ativa o componente .tabs{}
*/
function default_tabs() {
  // tabs
  var tabs = $j('.tabs');
  if (tabs.length > 0) {
      tabs.find('.tabs__tab').first().addClass('on');
      tabs.find('.tabs__content').first().addClass('on');

      tabs.on('click', '.tabs__tab', function () {
          if (!$j(this).hasClass('on')) {
              tabs.find('.tabs__tab, .tabs__content').removeClass('on');

              $j(this).addClass('on');
              $j(this).next('.tabs__content').addClass('on');
          }
      });
  }
}

/**
* Adiciona um ícone de telefone aos endereços
*/
function fix_address_phone() {
  // address phone
  var address = $j('address');
  if (address.length > 0) {
      address.each(function (i, el) {
          var html = $j(el).html(),
              ico = '<svg class="ico" viewBox="0 0 16 16"><path d="M3.7,10.2c1,2.1,2.1,3.4,3.5,4.5c2.4,1.9,3.8,1.3,5.1,0.7c1.9-0.9,1.5-1.5,0.6-3.4 c-0.9-1.9-1.3-2.5-3.2-1.6c-1.9,0.9-1.2,2.2-1.2,2.2L4.9,5.1c0,0,0.7,1.2,2.6,0.3C9.4,4.5,9.1,3.9,8.2,2C7.4,0.1,7.1-0.5,5.2,0.4 C3.9,1,2.5,1.7,2.4,4.8C2.4,6.6,2.7,8.1,3.7,10.2z"/></svg>';
          html = html.replace('T:', ico);
          html = html.replace('F:', ico);
          $j(el).html(html);
      });
  }
}

/**
* Adiciona elementos à listagem para corrigir o flex
*/
function fix_catalog_flexbox() {
  // products flex-fix
  var products = $j('.products__list:not(.carrossel)');
  products.each(function (i, el) {
      $j(el).append('<li class="flex-fix li--0 products__item" /><li class="flex-fix li--0 products__item" /><li class="flex-fix li--0 products__item" /><li class="flex-fix li--0 products__item" /><li class="flex-fix li--0 products__item" />');
  });
}

/**
* Adiciona um strong ao título do status de pedido
*/
function orderStatus() {
  //status title
  var status = $j('.order-status');
  if (status.length > 0) {
      status.each(function (i, el) {
          var text = $j(el).find('span').text();
          text = '<strong>' + text.replace(/\.|\!/g, '.</strong>');
          $j(el).find('span').html(text);
      });
  }
}

/**
* Responsive ifs
*/
function isMobile() {
  return ($j('body').hasClass('mobile'))
}
function is992() {
  return ($j(window).width() <= 992)
}
function is768() {
  return ($j(window).width() <= 768)
}
function is568() {
  return ($j(window).width() <= 568)
}
function is468() {
  return ($j(window).width() <= 468)
}

/**
* Oculta o .header-container
* @param status
*/
function hideHeader(status) {
  if (status) {
      $j('.header-container').animate({
          top: '-' + $j('.header-container').outerHeight() + 'px'
      }, 200);
  } else {
      $j('.header-container').animate({
          top: '0px'
      }, 200);
  }
  return false;
}

/**
* Trava a rolagem do <body>
* @param status
*/
function lockBody(status) {
  if (status) {
      $j('body').css('overflow', 'hidden');
  } else {
      $j('body').css('overflow', 'visible');
  }
  return false;
}

/**
* Responsivo .categories
*/
function m_categories(breakpoint) {
  if ($j(window).width() > breakpoint) {
      // reseta ao passar do breakpoint

      default_categories_carrossel();
      default_categories_justify();
      lockBody(false);
      $j('.categories').removeClass('on');
  }
}

/**
* Responsivo .search
*/
function m_search() {
  if (!is568()) {
      $j('.header .search').removeClass('on');
  }
}

/**
* Responsivo .filters
*/
function m_filters() {
  if (!is992()) {
      $j('.filters').removeClass('on');
      hideHeader(false);
      lockBody(false);
  }
}

/**
* Responsivo .myaccount
*/
function m_myaccount() {
  if (!is992()) {
      $j('.myaccount').removeClass('on');
      hideHeader(false);
      lockBody(false);
  }
}

/**
* Responsivo .mycart
*/
function m_mycart() {
  if (!is992()) {
      $j('.mycart').removeClass('on');
      hideHeader(false);
      lockBody(false);
  }
}

/**
* Responsivo - Produto @parcelamento
*/
function m_parcelamento() {
  if (!is992()) {
      $j('.parcelamento').removeClass('on');
      hideHeader(false);
      lockBody(false);
  }
}

/**
* Responsivo - Produto @simulador-frete
*/
function m_frete() {
  if (!is992()) {
      $j('.frete').removeClass('frete--open');
      hideHeader(false);
      lockBody(false);
  }
}

/**
* Responsivo - Produto
* @relacionados
* @recomendados
* @quemviu
* @compre-junto
* @vendas-acima
*/
function m_produto() {
  if (!is568()) {
      $j('.related, .recommended, .whosaw, .jointsales, .upsell, .reviews').removeClass('on');
      hideHeader(false);
      lockBody(false);
  }
}

/**
* Responsivo - .tabs
*/
function m_tabs() {
  if (!is568()) {
      $j('.tabs__content').removeClass('open');
      hideHeader(false);
      lockBody(false);
  }
}

/**
* Responsivo - Menu Painel do Cliente
*/
function m_painelCliente() {
  if (!is992()) {
      $j('.block-account').removeClass('on');
      hideHeader(false);
      lockBody(false);
  }
}
/* end of custom content */

/**
* JavaScript Editável
* Tema:     Neon
* Arquivo:  editable.js
*
* Use este arquivo para ativar ou desativar as funções do JS do tema.
*
* Este JS controla apenas elementos visuais e elementos relativos ao layout responsivo,
* desátivar todas as funções não impedirá o funcionamento do site, porém
* exigirá que o CSS de alguns elementos seja revisto.
*
* jQuery       $j
* Prototype:   $
*/

$j.fn.neonTheme.custom = {
  /**
   * Opções Padrões do Tema
   * Estas opções podem apenas ser ligadas ou desligadas.
   * ! Cuidado ao desativar estar opções pois elas podem comprometer o funcionamento do tema.
   * ! Desative apenas se você souber o que está fazendo.
   */
  default_categories_justify: true, // modo justify da inserção de Menu de Categorias
  default_categories_mini: true, // modo mini da inserção de Menu de Categorias
  default_categories_carrossel: true, // modo carrossel da inserção de Menu de Categorias
  default_carrossel_produtos: true, // carrossel padrão das Coleções de Produtos
  default_carrossel_jointsales: true, // carrossel dos produtos do Compre Junto @compre-junto
  default_carrossel_brands: true, // modo carrossel da listagem de marcas
  default_dropFrom: true, // ativa o dropFrom para as inserções: Lista de Desejos, Meu Carrinho, Minha Conta, Menu de Categories e Busca com Filtros
  default_SVGs: true, // insere os ícones padrões do SVG sprite
  default_tabs: true, // ativa o componente .tabs do tema
  /* - Fixes */
  fix_IE_SVGs: true, // corrige as dimensões de SVGs inline no IE
  fix_zoomHeader: true, // corrige o z-index do .header e do zoom dos produtos no :hover de cada um
  fix_address_phone: true, // corrige a exibição do ícone de telefone nas listagens de endereços
  fix_category_description: true, // troca a posição padrão da descrição da categoria
  fix_catalog_flexbox: true, // adiciona elementos para arrumar o flexbox do catálogo
  /* - Responsivo */
  m_categories: true, // ativa o responsivo do Menu de Categorias
  m_search: true, // ativa o responsivo da Busca
  m_filters: true, // ativa o responsivo dos Filtros do Catálogo
  m_myaccount: true, // ativa o responsivo da Minha Conta
  m_mycart: true, // ativa o responsivo do Meu Carrinho
  m_parcelamento: true, // ativa o responsivo do parcelamento na página de produto
  m_frete: true, // ativa o responsivo do cálculo de frete na página do produto
  m_produto: true, // ativa o responsivo de cada bloco da página de produto
  m_tabs: true, // ativa o responsivo do componente .tabs do tema
  m_painelCliente: true, // ativa o responsivo do Menu do Painel de Cliente
  /**
   * Funcionalidades do Tema
   */
  dropFrom: false,
  addSVG:
      {
          'img-truck': {
              selector: '.frete .frete__content .input-box label',
              mode: 'prepend',
              ratio: false
          }
      }

};

/**
* Responsive ifs
*
* isMobile()     Retorna true se acessado via mobile
* is992()        Retorna true se a tela for menor que 992px
* is768()        Retorna true se a tela for menor que 768px
* is568()        Retorna true se a tela for menor que 568px
* is468()        Retorna true se a tela for menor que 468px
*/

/**
* dropFrom: [array]
*
* Verifica o posicionamento dos elementos passados e adiciona classes
* indicando à partir de onde é ideal abrir um dropbox.
* Classes adicionadas:
* drop--left | drop--right
* drop--top  | drop--bottom
*/

/*
addSVG: {'svg':{ options }} - Adiciona SVGs de um sprite no DOM
Para cada SVG adicionado, adicione um objeto com os parametros:

{
  'id-svg':
      string  obrigatório
      ID do <symbol> no seu SVG sprite, ex.: 'ico-busca'

  {
      selector: '.header .meu_btn, .footer .meu_box'
          string  obrigatório
          Seletor CSS do(s) elemento(s) onde inserir o SVG

      mode: 'append / prepend / html'
          string  opcional    (default: append)
          Modo de inserir o SVG, você pode optar por:
          'append'    - modo padrão - adiciona o <svg> no fim do elemento
          'prepend'   - adiciona o <svg> no início do elemento
          'html'      - sobrescreve todo o conteúdo do elemento pelo <svg>

      ratio: true / false
          opcional    default: true
          Mantém ou não o ratio do SVG
          Adicionando ou não o parâmetro: preserveAspectRatio="none"
  }
}
*/
/* end of editable */

/**
* JavaScript Geral
* Arquivo:	general.js
*
* Use este editor para criar o seu Javascript
* Este arquivo Ã© o Ãºltimo arquivo .js chamado
*
* jQuery       $j
* Prototype:   $
*
* document.on() safe events:
* 'resizeStop'
* 'scrollStop'
* 'ajaxComplete'
*/

$j(document)
    .ready(function () {
        // document.ready
    })
    .on('resizeStop', function(e){
        // Safe window.resize
    	// Dispara apÃ³s o Ãºltimo movimento de resize parar no navegador.
    })
    .on('scrollStop', function(e){
        // Safe window.scroll
    	// Dispara apÃ³s o Ãºltimo movimento de scroll parar no navegador.
    })
    .on('ajaxComplete', function(resp){
    	// Safe ajax completed
    	// Dispara apÃ³s completar com sucesso qualquer requisiÃ§Ã£o Ajax, e trÃ¡s a resposta do Ajax.
	});
