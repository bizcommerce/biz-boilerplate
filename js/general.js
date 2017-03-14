$j(document).ready(function(){

  $j(window).scroll(function(event){
    var top = $j(window).scrollTop();
    if(!isSmall()){
      // Header Fixo
      if( top >= 111 ){
       jQuery('.wrapper').addClass('scrolling');
      } else{
        jQuery('.wrapper').removeClass('scrolling');
      }
    }
  });

   //$j('.product-collection-container .title').lettering();
	$j('.box-reviews .reviews-list').owlCarousel({
        itemsScaleUp:   true,
        navigation:     true,
        items:1,
    		itemsCustom: [
    	    [0, 1],
	      	[568, 1],
        	[768, 1]
    		],
        navigationText: ['?','?'],
        pagination:     false
	});

  // tabs produto
  var tabs = $j('.collateraltabs');
  tabs.each(function(){
    var $tab = $j(this);
    if($tab.length > 0){
        console.log($tab.find('dt').first().text());
        $tab.find('dt').first().addClass('on');
        $tab.find('dd').first().addClass('on');

        $tab.find('dt').click(function(){
          if(!$j(this).hasClass('on')){
            $tab.find('dt, dd').removeClass('on');
            $j(this).addClass('on');
            $j(this).next('dd').addClass('on');
          }
        });
    }
  });

});
