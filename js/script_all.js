$(document).ready(function() {

    var $html = $('body,html'),
        $body = $('body');
    var win = $(window);
    var FullH = $('.fullH'),
        tabletAutoH = $('.fullH.autoH-tablet'),
        mobileAutoH = $('.fullH.autoH-mobile'),
        $btnToggleHalf = $('.drawer-toggle-half')
        $headerT = $('#headerT'),
        $toTop = $('.toTop'),
        $scrollD = $('.scroll_down'),
        $goTo = $('.goTo');

    // var $boxNews = $('.news_box'),
    // rowIndexH = $('.wrap_index .sec_index .container.flex > .row').height();


    // headroom
    var header = document.querySelector('body');
    var headroom = new Headroom(header);
    headroom.init();

    var $menu = $('.drawer');
    $menu.drawer({
        iscroll: {
            // bounce: true,
            mouseWheel: true,
            click: true,
            tap: true,
        },
    });

    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body.pace-done', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function(url) { window.location.href = url; }
    });

    var $imgLazy = $('.lazy');
    $imgLazy.Lazy({
        // your configuration goes here
        // scrollDirection: 'vertical',
        effect: 'fadeIn',
        // visibleOnly: true,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
    });

    $btnToggleHalf.on('click', function(e) {
        e.preventDefault();
        $body.toggleClass('drawer--menu--icon');
    });
    // win.on('load scroll resize orientationchange', function() {
    win.on('load resize', function() {
        var winW = $(this).width(),
            winT = $(this).scrollTop(),
            winH = $(this).innerHeight();
        if (winW <= 767) {
            if (FullH.hasClass('autoH-mobile')) {
                mobileAutoH.height('auto');
            } else {
                FullH.height(winH);
            }
        } else if (winW <= 1199) {
            if (FullH.hasClass('autoH-tablet')) {
                tabletAutoH.height('auto');
            } else {
                FullH.height(winH);
            }
        } else {
            FullH.height(winH);
        }
    });

    win.on('load scroll', function() {
        var winW = $(this).width(),
            winT = $(this).scrollTop(),
            winH = $(this).innerHeight();
        if (winT > 200) {
            $toTop.addClass('show');
            $scrollD.removeClass('show');
        } else {
            $toTop.removeClass('show');
            $scrollD.addClass('show');
        }
        if (winT >= winH) {
            $headerT.addClass('fixedT')
            // alert(winT)
        } else {
            if ($headerT.hasClass('fixedT')) {
                $headerT.removeClass('fixedT');
            }
        }
    });

    $goTo.on('click', function(e) {
        e.preventDefault();
        $html.stop(false, false).animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, 800);
        return false;
    });

    $toTop.on('click', function(e) {
        e.preventDefault();
        // var is_safari = navigator.userAgent.indexOf('Safari') > -1;
        // if (is_safari) {
        //     $body.animate({
        //         scrollTop: -50
        //     }, 800, function() {
        //         $body.clearQueue();
        //     });
        // } else {
            $html.animate({
                scrollTop: 0
            }, 800, function() {
                $html.clearQueue();
            });
        // }
        return false;
    });




    // firefoxResizeCommon();
});

// $(window).load();

// function firefoxResizeCommon() {
//     win.on('load scroll resize', function() {});
// }