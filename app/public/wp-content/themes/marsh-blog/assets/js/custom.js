jQuery(document).ready(function($) {

    var menu_toggle         = $('.menu-toggle');
    var nav_menu            = $('.main-navigation ul.nav-menu');

    // Primary Menu
    menu_toggle.click(function() {
        $(this).toggleClass('active');
        nav_menu.slideToggle();
        $('.main-navigation .sub-menu').slideUp();
        $('.main-navigation .dropdown-toggle').removeClass('toggled-on');
    });

    $('.main-navigation .nav-menu .menu-item-has-children > a').after( $('<button class="dropdown-toggle"><i class="fas fa-caret-down"></i></button>') );

    $('.main-navigation .dropdown-toggle').keyup(function(event) {
        if( event.keyCode == 9 ) {
            $(this).parent().find('.sub-menu').first().slideDown();
            $(this).addClass('toggled-on');
        }
    });
    
    $('button.dropdown-toggle').click(function() {
        $(this).toggleClass('active');
       $(this).parent().find('.sub-menu').first().slideToggle();
    });

    // Keyboard Navigation
    if( $(window).width() < 1024 ) {
        nav_menu.find("li").last().bind( 'keydown', function(e) {
            if( !e.shiftKey && e.which === 9 ) {
                e.preventDefault();
                $('#masthead').find('.menu-toggle').focus();
            }
        });
    }
    else {
        nav_menu.find("li").unbind('keydown');
    }

    $(window).resize(function() {
        if( $(window).width() < 1024 ) {
            nav_menu.find("li").last().bind( 'keydown', function(e) {
                if( !e.shiftKey && e.which === 9 ) {
                    e.preventDefault();
                    $('#masthead').find('.menu-toggle').focus();
                }
            });
        }
        else {
            nav_menu.find("li").unbind('keydown');
        }
    });

    menu_toggle.on('keydown', function (e) {
        var tabKey    = e.keyCode === 9;
        var shiftKey  = e.shiftKey;

        if( menu_toggle.hasClass('active') ) {
            if ( shiftKey && tabKey ) {
                e.preventDefault();
                nav_menu.find("li:last-child > a").focus();
                nav_menu.find("li").last().bind( 'keydown', function(e) {
                    if( !e.shiftKey && e.which === 9 ) {
                        e.preventDefault();
                        $('#masthead').find('.menu-toggle').focus();
                    }
                });
            };
        }
    });

    $('.grid').imagesLoaded( function() {
        $('.grid').packery({
            itemSelector: '.grid-item'
        });
    });

});