/**
*
* JavaScript Editável
* Tema:     Selenium
* Arquivo:  editable.js
*
* Use este arquivo para remover ou alterar
* partes do JavaScript do tema atual que você
* precisa personalizar
*
* Este JavaScript controla apenas elementos visuais e
* elementos relativos ao layout responsivo,
* excluí-lo não afetará o funcionamento do site.
*
* jQuery       $j
* Prototype:   $
*
*/

$j(document).ready(function(){
    // Document Ready

    // .home-grid fix
    var home_grid = $j('.home-grid');
    if(home_grid.length){
        home_grid.find('.main-banner, .banner-regua').wrapAll('<div class="home-banners" />');

        // sem banner full, retira .main-banner o menu lateral
        if(!$j.trim(home_grid.find('.main-banner').html())){
            home_grid.find('.main-banner, .home-side-menu').remove();
        }

        // sem banner régua, remove .banner-regua
        if(!$j.trim(home_grid.find('.banner-regua .widget').html())){
            home_grid.find('.banner-regua').remove();
        }

        // sem menu lateral, deixa os banners full
        if(home_grid.find('.home-side-menu').length == 0){
            home_grid.find('.home-banners').addClass('full');
        }

        // se está sem nada, remove o home-grid
        if(home_grid.find('.home-side-menu').length == 0 && home_grid.find('.main-banner').length == 0 && home_grid.find('.banner-regua').length == 0){
            home_grid.remove();
        }
    }

    $j('.header .main-menu nav').click(function(){
        // Arruma o click no menu para o mobile

        if(isSmall()){
            if($j('.header .main-menu').hasClass('open')){
                $j('.header .main-menu').removeClass('open');
                $j('.wrapper-container').css('height','auto');
            }else{
                $j('.header .main-menu').addClass('open');
                $j('html,body').scrollTop(0);
                var altura = parseInt($j('.header .main-menu.open nav').css('height'));
                $j('.wrapper-container').css('height',altura+'px');
            }
        }
    });

    $j('.header .main-menu.normal:not(.open) a.level0').click(function(e){
        // Não acessa o link ao clicar via mobile

        if(isMobile() && !isSmall()){
            e.preventDefault();
            $j(this).parent().addClass('hover');
        }
    });

    addSVG([{
        /**
         * Função do sistema que adiciona tags SVG no DOM
         * Para cada SVG adicionado, adicione um novo array de parametros:

         addSVG([{
             svg:           *ID do <symbol> no seu SVG sprite, ex.: 'ico-busca'

             selector: 		*Seletor CSS do elemento onde inserir o SVG, ex.: '.header .search-button'

             append_mode:	Modo de inserção do SVG, você pode optar por:
                            'append'    - modo padrão - adiciona o <svg> no fim do elemento
                            'prepend'   - adiciona o <svg> no início do elemento
                            'html'      - sobrescreve todo o conteúdo do elemento pelo <svg>

             ratio: 		true || false
                            Adiciona ou não o parâmetro preserveAspectRatio na tag SVG
         },{
            svg: 			'ico-menu',
            selector: 		'.meu-menu-header'
         }]}
         */

        svg: 			'img-truck',
        selector: 		'.simulador-frete .title',
        append_mode:	'append',
        ratio: 			false
    },{
        svg: 			'img-truck',
        selector: 		'.cart-boxes .shipping .title'
    },{
        svg: 			'img-cupon',
        selector: 		'.discount-coupon-form .title'
    },{
        svg: 			'img-os-new',
        selector: 		'.order-status.state-new, .order-status.state-pending_payment, .order-status.state-payment_review'
    },{
        svg: 			'img-os-ok',
        selector: 		'.order-status.state-processing'
    },{
        svg: 			'img-os-sent',
        selector: 		'.order-status.state-complete'
    },{
        svg: 			'img-os-hold',
        selector: 		'.order-status.state-holded'
    },{
        svg: 			'img-os-cancel',
        selector: 		'.order-status.state-closed, .order-status.state-canceled'
    },{
        svg: 			'img-bill',
        selector: 		'.addresses-primary ol li:first-child h3, .order-info-box .billing-address h2',
        append_mode:	'prepend'
    },{
        svg: 			'img-truck',
        selector: 		'.addresses-primary ol li:last-child h3, .order-info-box .shipping-address h2',
        append_mode:	'prepend'
    },{
        svg: 			'img-track',
        selector: 		'.order-items  *:not(.order-links) a[onclick*=track]',
        append_mode:	'prepend'
    },{
        svg: 			'img-facebook',
        selector: 		'.sc-bt.facebook'
    },{
        svg: 			'img-twitter',
        selector: 		'.sc-bt.twitter'
    },{
        svg: 			'img-googleplus',
        selector: 		'.sc-bt.google'
    },{
        svg: 			'img-linkedin',
        selector: 		'.sc-bt.linkedin'
    }]);

    if(isMobile()){
        // Se for mobile

        /**
         * Chamada da função que arruma
         * os elementos para o
         * layout responsivo
         */
        rearrange();
    }
});

$j(window).on('delayed-resize', function (e, resizeEvent) {
    // Window Resize

    /**
     * Chamada da função que arruma
     * os elementos para o
     * layout responsivo
     */
    if (!isMobile()) {
        rearrange();
    }
});

$j(document).on('click', function(e){
    // Document click

    /**
     * Remove a classe 'on' da busca ou clicar fora dela
     */
    var container = $j('.header .search-container');
    if(!container.is(e.target) && container.has(e.target).length === 0){
        container.removeClass('on');
    }
});

// FUNÇÕES

function rearrange(){
    /**
     * Função que arruma os elementos para
     * o layout responsivo
     */

    if($j('.product-essential').length > 0){
        // Página: Detalhe do Produto

        var name = $j('.product-essential .product-name'),
            rating = $j('.product-essential .product-rate'),
            short_desc = $j('.product-essential .std.short-desc'),
            parcelamento = $j('.product-essential .parcelamento'),
            col2 = $j('.product-essential .product-shop .col2'),
            col1 = $j('.product-essential .product-shop .col1'),
            imgbox = $j('.product-essential .product-img-box'),
            pshop = $j('.product-essential .product-shop');

        if($j('.configurable-options-dl').length > 0){
            // Produto - Configurável

            var configs = $j('.product-options');
            if(isSmall()){
                col2.prepend(rating);
                col2.prepend(name);
                imgbox.append(configs);
                imgbox.append(short_desc);
                imgbox.append(parcelamento);
            }else{
                col1.prepend(configs);
                col1.prepend(rating);
                col1.prepend(name);
                col1.append(short_desc);
                col1.append(parcelamento);
            }
        }else if($j('.bundle-options-dl').length > 0){
            // Produto Empacotado

            var bundle = $j('.product-options');
            if(isSmall()){
                col2.prepend(rating);
                col2.prepend(name);
                imgbox.append(bundle);
                imgbox.append(short_desc);
                imgbox.append(parcelamento);
            }else{
                col1.prepend(bundle);
                col1.prepend(rating);
                col1.prepend(name);
                col1.append(short_desc);
                col1.append(parcelamento);
            }
        }else if($j('.custom-options-dl').length > 0){
            // Produto com Opções Customizadas

            var customs = $j('.product-options');
            if(isSmall()){
                col2.prepend(rating);
                col2.prepend(name);
                imgbox.append(customs);
                imgbox.append(short_desc);
                imgbox.append(parcelamento);
            }else{
                col1.prepend(customs);
                col1.prepend(rating);
                col1.prepend(name);
                col1.append(short_desc);
                col1.append(parcelamento);
            }
        }else if($j('.downloadable-dl').length > 0){
            // Produto Baixável

            var downs = $j('.product-options');
            if(isSmall()){
                col2.prepend(rating);
                col2.prepend(name);
                imgbox.append(downs);
                imgbox.append(short_desc);
                imgbox.append(parcelamento);
            }else{
                col1.prepend(downs);
                col1.prepend(rating);
                col1.prepend(name);
                col1.append(short_desc);
                col1.append(parcelamento);
            }
        }else if($j('.grouped-items-dl').length > 0){
            // Produto Agrupado

            var group = $j('.grouped-items-wrapper');
            if(isSmall()){
                col2.prepend(rating);
                col2.prepend(name);
                imgbox.append(group);
                imgbox.append(short_desc);
                imgbox.append(parcelamento);
            }else{
                col1.prepend(group);
                col1.prepend(rating);
                col1.prepend(name);
                col1.append(short_desc);
                col1.append(parcelamento);
            }
        }else{
            // Produto Simples

            if(isSmall()){
                console.log('hey!');
                col2.prepend(rating);
                col2.prepend(name);
                imgbox.append(short_desc);
                imgbox.append(parcelamento);
            }else{
                col1.prepend(rating);
                col1.prepend(name);
                col1.append(short_desc);
                col1.append(parcelamento);
            }
        }

        if(isSmaller()){
            // tela menor que 500px

            imgbox.before(name);
            pshop.append(parcelamento);
        }else if(isSmall()){
            // tela menor que 768px

            col2.prepend(name);
            imgbox.append(parcelamento);
        }else{
            // tela maior que 500px e 768px

            col1.prepend(name);
            col1.append(parcelamento);
        }

    }else if($j('#my-orders-table').length > 0){
        // Página: Meu Pedido

        if(isSmall()){
            $j('#my-orders-table tfoot table th:first-child, #my-orders-table tfoot table td:first-child').attr('colspan','2');
        }else{
            $j('#my-orders-table tfoot table th:first-child, #my-orders-table tfoot table td:first-child').attr('colspan','4');
        }
    }

    // CLICKS

    $j('.block-account .block-title').click(function(){
        // Menu no painel do Cliente

        if(isSmall()){
            $j(this).parent().toggleClass('on');
        }
    });
    $j('.header .search-container').click(function(){
        // Busca do Topo

        if(isSmaller()){
            $j(this).addClass('on');
            $j(this).find('.search-input').focus();
        }
    });
    $j('.block-layered-nav .block-title').click(function(){
        // Filtros da Categoria

        if(isSmaller()){
            $j(this).parent().toggleClass('on');
        }
    });
    $j('.box-reviews .form-add .subtitle').click(function(){
        // Avaliações de Produto
        $j(this).parent().toggleClass('on');
    });

    if($j('.block-account a').length > 0){
        // Oculta alguns botões do menu do painel do cliente

        var review = $j('.block-account a[href*="/review"]'),
            wish = $j('.block-account a[href*="/wishlist"]');
        if(isMediumSmall()){
            review.parent().hide();
            wish.parent().hide();
        }else{
            review.parent().show();
            wish.parent().show();
        }
    }
}

function isMobile(){
    // Retorna true se acessado via mobile

    return ($j('body').hasClass('mobile'))
}

function isSmall(){
    // Retorna true se a tela for menor que 992px

    return ($j(window).width() < 992)
}

function isMediumSmall(){
    // Retorna true se a tela for menor que 768px

    return ($j(window).width() < 768)
}

function isSmaller(){
    // Retorna true se a tela for menor que 500px

    return ($j(window).width() < 500)
}
