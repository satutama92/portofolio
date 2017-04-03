var productNav = (function($) {

  var nav = {
    wrapper: $('body'),
    productNav: [],
    productOverview: [],
    headerHeight: 0,
    y: 0,
    showOn: $('body.node-type-productinfo, body.node-type-productpage'),
    top: {
      page: $('.productoverview')
    },
    bottom: {
      page: $('.modular-product:last').closest('.color-bg').next()
    }
  };

  nav.init = function() {
    if( nav.showOn.length > 0 ){
      productNavGenerate();
      productNavToggle();
      productNavBuild();
      productNavScroll();
      productNavAnchor();
      nav.top.arrow.click(function(e){
        productNavGoTo( e, nav.top.page );
      });
      nav.bottom.arrow.click(function(e){
        productNavGoTo( e, nav.bottom.page  );
      });
      nav.wrapper.scrollspy({ target: '#ProductSectionNavi' });
      nav.wrapper.scrollspy('refresh');
    }
  };

  var productNavGenerate = function(){
    nav.template = [
      '<div id="ProductSectionNavi" class="m-product-section-navi state--hidden">',
        '<ul class="m-product-section-navi__dots-container js-m-product-section-navi__dots-container">',
          '<li class="m-product-section-navi__item m-product-section-navi__item--arrow m-product-section-navi__item--arrow-top js-m-product-section-navi__item--arrow-top">',
            '<a href="#" class="m-product-section-navi__link">',
              '<span class="m-product-section-navi__link-part m-product-section-navi__link-part--label">'+language.get().productNav.top+'</span>',
            '</a>',
          '</li>',
          '<li class="m-product-section-navi__item m-product-section-navi__item--arrow m-product-section-navi__item--arrow-bottom js-m-product-section-navi__item--arrow-bottom">',
            '<a href="#" class="m-product-section-navi__link">',
              '<span class="m-product-section-navi__link-part m-product-section-navi__link-part--label">'+language.get().productNav.bottom+'</span>',
            '</a>',
          '</li>',
        '</ul>',
      '</div>'
    ].join("\n");

    // Add to body and object
    nav.wrapper.append(nav.template);
    nav.top.arrow = $('.m-product-section-navi__item--arrow-top');
    nav.bottom.arrow = $('.m-product-section-navi__item--arrow-bottom');
  }

  var productNavBuild = function(){
    nav.productPos      = nav.productNav.find('li:last-child');
    nav.productOverview = $( '.productoverview' );
    nav.productBtn      = nav.productOverview.find('.contentWrapper .block-block');
    nav.productItem     = $('.modular-product');

    nav.productBtn.each(function(){
      $(this).click(function(e){
        var $title = $(this).find('h2.block-title').text();
        var $container = $('.contextual-links');
        var $location = $('.modular-product .block-title:contains("'+$title+'")').closest('.modular-product');
  	    if( (!$container.is(e.target) && $container.has(e.target).length === 0) )
  	      productNavGoTo(e, $location );
      });
    });

    nav.productItem.each(function(i){
      var $title    = $(this).find('.block-title').text(),
          $category = $(this).find('.category-title').text();

      if( $category === '' || $category === null || $category === undefined  ){
        var $anchor = $title.toLowerCase().replace(/[^A-Z0-9]+/ig, '');
      }else{
        var $cleanCat   = $category.toLowerCase().replace(/[^A-Z0-9]+/ig, '');
        var $cleanTitle = $title.toLowerCase().replace(/[^A-Z0-9]+/ig, '');
        var $anchor     = $cleanCat+'-'+$cleanTitle;
      }

      var $item = $(
        '<li class="m-product-section-navi__item js-m-product-section-navi__item">'+
          '<a href="#product-'+$anchor+'" class="m-product-section-navi__link">'+
            '<span class="m-product-section-navi__link-part m-product-section-navi__link-part--label">'+
              $title +
            '</span>'+
          '</a>'+
        '</li>'
      );

      nav.productPos.before($item);
      $('#ProductSectionNavi [href="#product-'+$anchor+'"]').parent().click(function(e){
        productNavGoTo( e, $('#product-'+$anchor) );
      });
    });
  }

  var productNavAnchor = function(){
    $('body.node-type-productpage a.anchor').click(function(e){
      var $dest = $(this).attr('href');
      productNavGoTo( e, $( $dest ) );
    });
  }

  var productNavToggle = function(){
    nav.productNav      = $('.m-product-section-navi');
    nav.productNav.list = nav.productNav.find('ul');

    nav.productNav.on('mouseenter', function(evt){
      nav.productNav.list.addClass('state--open');
    });
    nav.productNav.on('mouseleave', function(){
      nav.productNav.list.removeClass('state--open');
    });
  }

  var productNavShow = function(){
    nav.productNav.removeClass('state--hidden');
  }

  var productNavHide = function(){
    nav.productNav.addClass('state--hidden');
  }

  var productNavGoTo = function(e, dest){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: dest.offset().top-nav.headerHeight
    },400);
  }

  var productNavScroll = function(){
    $(window).scroll(function(){
      nav.headerHeight = $('.header-inner').outerHeight();
      y             = $(window).scrollTop()+nav.headerHeight;

      if( y+5 >= nav.productOverview.offset().top && y < $('.modular-product:last').offset().top+$('.modular-product:last').outerHeight() ){
        productNavShow();
      }else{
        productNavHide();
      }
      productNavSelected();
    });
  }

  var productNavSelected = function(){
    nav.productItem .each(function(i){
      var thisID = $(this).attr('id');
      if( y >= $(this).offset().top && y < $(this).offset().top+$(this).outerHeight() ){
        $('[href="#part'+(i+1)+'"]').parent().addClass('state--selected');
        $('[href="#'+thisID+'"]').parent().addClass('state--selected');
      }else{
        $('[href="#part'+(i+1)+'"]').parent().removeClass('state--selected');
        $('[href="#'+thisID+'"]').parent().removeClass('state--selected');
      }
    });
  }

  $(function() {
    nav.init();
  });

}(jQuery));
