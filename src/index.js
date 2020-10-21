import {Site} from "./classes/site";

import {model} from './model'
const site = new Site('#site')
site.render(model)

import {model2} from './model'
const site2 = new Site('#site2')
site2.render(model2)

import {model3} from './model'
const site3 = new Site('#site3')
site3.render(model3)


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-slider').owlCarousel({
    items: 1,
    loop: true,

    nav: true,
    smartSpeed: 900,
    navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],

    touchDrag: false,
    mouseDrag: false,

    autoplay:true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
})

$('.owl-items').owlCarousel({
    loop  : true,
    nav: true,
    smartSpeed: 900,
    navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],

    responsive: {
        0: {
            items: 1,
            // margin: 0
        },
        500: {
            items: 2,
            // margin: 0
        },
        750: {
            items: 3,
            // margin: 30
        },
        980: {
            items: 4,
            // margin: 10
        }
    }
})
// $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
// $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');

$('.owl-brands').owlCarousel({
    loop  : true,
    navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],
    smartSpeed: 900,

    responsive: {
        750: {
            items: 5,
            nav: true,
            // margin: 50
        },
        980: {
            items: 7,
            nav: true,
            // margin: 20
        },
        1140: {
            items: 9,
            touchDrag: false,
            mouseDrag: false
        }
    }
})

$('.owl-numbers').owlCarousel({
    loop  : true,
    navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],
    smartSpeed: 900,

    responsive: {
        750: {
            items: 4,
            nav: true,

        },
        980: {
            items: 6,
            touchDrag: false,
            mouseDrag: false
        }
    }
})