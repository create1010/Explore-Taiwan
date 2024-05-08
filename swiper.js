const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    effect: 'fade',
    loop: true,
    
        pagination: {
        el: '.swiper-pagination',
        },
    
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
        scrollbar: {
        el: '.swiper-scrollbar',
        enabled:false,
        },

        autoplay: {
            delay: 3000, 
            disableOnInteraction: false,
        },
                // effect: 'flip',
                // flipEffect: {
                // slideShadows: false,
                // }
    });