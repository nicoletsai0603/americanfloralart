$(document).ready(function() {
    var win = $(window);
    var rellax = new Rellax('.rellax');
    // $('.parallax-container').parallax();
    $('#packerySizing').packery({
        // use outer width of grid-sizer for columnWidth
        // columnWidth: '.grid-sizer',
        // columnWidth: $grid.find('.grid-sizer')[0],
        // gutter: '.gutter-sizer',
        itemSelector: '.grid-item',
        // rowHeight: 750,
        percentPosition: true,
    });
    $('#kwicksDesktop').kwicks({
        maxSize: '40%',
        behavior: 'menu',
        spacing: 0
    });
    var swiperIg = new Swiper('#swiperIg', {
        navigation: {
            nextEl: '#swiperIg .swiper-button-next',
            prevEl: '#swiperIg .swiper-button-prev',
        },
        pagination: {
            el: '#swiperIg .swiper-pagination',
            clickable: true,
        },
        lazy: {
            loadPrevNext: true,
        },
        observer: true,
        observeParents: true,
        slidesPerView: 6,
        spaceBetween: 10,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 5,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 5,
            }
        }
    });
    win.on('load resize', function() {
        var winW = $(this).width(),
            winT = $(this).scrollTop(),
            winH = $(this).innerHeight();
        var swiperNews = new Swiper('#swiperNews', {
            pagination: {
                el: '#swiperNews .swiper-pagination',
                clickable: true,
            },
            lazy: {
                loadPrevNext: true,
            },
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            spaceBetween: 5,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },
            }
        });
        if (winW >= 991) {
            swiperNews.destroy(false);
        }
    });
});