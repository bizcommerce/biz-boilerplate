/**
* JavaScript Geral
* Arquivo:	general.js
*
* Use este editor para criar o seu Javascript
* Este arquivo é o último arquivo .js chamado
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

      // Compartilhar com amigos
    	var $email = $j('.email-to-friend');
	    if($email.length){
          $email.appendTo($j('.add-to-links'));
      }

    	// Menu de consultoria
    	var $link = $j('#consultoria-instalacao .consultoria-instalacao');
		  $j('.header-container .ul--1').append($link);

      // Instalacao
      $j('#consultoria-instalacao .ul--0 > li').each(function(){
        var $item = $j(this);
        $item.remove('parent').removeClass('li--0').removeClass('parent');
        var className = $item.attr('class');
        var $categMenu = $j('.' + className + ' .ul--1', '.header-container .categories');
        var $categ = $item.find('.li--1').appendTo($categMenu);
      });

    })
    .on('resizeStop', function(e){
        // Safe window.resize
    	// Dispara após o último movimento de resize parar no navegador.
    })
    .on('scrollStop', function(e){
        // Safe window.scroll
    	// Dispara após o último movimento de scroll parar no navegador.
    })
    .on('ajaxComplete', function(resp){
    	// Safe ajax completed
    	// Dispara após completar com sucesso qualquer requisição Ajax, e trás a resposta do Ajax.
	  });
