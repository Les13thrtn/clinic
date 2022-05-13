const slider = new Swiper('.intro__slider', {
    navigation: {
        nextEl: '.intro__arrows-next',
        prevEl: '.intro__arrows-prev',
    },
    spaceBetween: 20,
    pagination: {
        el: '.intro__pagination',
        type: 'fraction',
        formatFractionCurrent: addZero,
        formatFractionTotal: addZero,
        renderFraction: function (currentClass, totalClass, index, total) {
            return '<span class="' + currentClass + '"></span>' +
                ' <div class="control-panel__dash"></div>' +
                '<span class="' + totalClass + '"></span>';
        },
    },
});


const slider4 = new Swiper('.doctors__slider', {

    navigation: {
        nextEl: '.doctors__arrows-next',
        prevEl: '.doctors__arrows-prev',
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    pagination: {
        el: '.doctors__pagination',
        type: 'fraction',
        formatFractionCurrent: addZero,
        formatFractionTotal: addZero,
        renderFraction: function (currentClass, totalClass, index, total) {
            return '<span class="' + currentClass + '"></span>' +
                ' <div class="control-panel__dash"></div>' +
                '<span class="' + totalClass + '"></span>';
        },
    },

    breakpoints: {
        640: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 0,
        }
    }
});

const slider3 = new Swiper('.video-review__items', {
    slidesPerView: 1.36,
    slidesPerGroup: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.video-review__arrows-next',
        prevEl: '.video-review__arrows-prev',
    },
    pagination: {
        el: '.video-review__pagination',
        type: 'fraction',
        formatFractionCurrent: addZero,
        formatFractionTotal: addZero,
        renderFraction: function (currentClass, totalClass, index, total) {
            return '<span class="' + currentClass + '"></span>' +
                ' <div class="control-panel__dash"></div>' +
                '<span class="' + totalClass + '"></span>';
        },
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 86,
        }
    }
});

$('.terms__item').each(function(){
    const slider2 = new Swiper(this.querySelector('.terms__slider'), {
        
    pagination: {
        el: this.querySelector('.terms__pagination'),
        clickable: true,
        touchRatio: 0.2,
    },
    effect: 'fade',
    fadeEffect: {
        crossfade: true
    },
    spaceBetween: 20,
        
    });
});

function addZero(num){
    return (num > 9) ? num : '0' + num;
}

// ----------------------------------------
