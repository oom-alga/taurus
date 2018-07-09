// Script
$(document).ready(function() {
  // Header Scroll
    $(window).on('scroll', function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 50) {
        $('#header').addClass('fixed');
      } else {
        $('#header').removeClass('fixed');
      }
    });

  // Page Scroll
    var sections = $('section')
      nav = $('nav');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
          var top = $(this).offset().top - 76
              bottom = top + $(this).outerHeight();
          if (cur_pos >= top && cur_pos <= bottom) {
              nav.find('a').removeClass('active');
              nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
          }
        });
    });
    nav.find('a').on('click', function () {
        var $el = $(this)
          id = $el.attr('href');
      $('html, body').animate({
        scrollTop: $(id).offset().top - 75
      }, 500);
      return false;
    });

  // Mobile Navigation
    $('.nav-toggle').on('click', function() {
      $(this).toggleClass('close-nav');
      nav.toggleClass('open');
      return false;
    });
    nav.find('a').on('click', function() {
      $('.nav-toggle').toggleClass('close-nav');
      nav.toggleClass('open');
    });



  // Ajax
    $(".portfolio-item").click(function(){
        $("#ajax-page").css("top", "0%");
    });
    $(".ajax-page-close").click(function(){
        $("#ajax-page").css("top", "100%");
    });

  // Ajax One
    $(".portfolio-item.satu").click(function(){
      $.ajax({
        type: 'POST',
        url: "ajax1.html",
        data: $("#ajax-page"),
        success: function(data){
          if(!data.error){
            $("#ajax-data").html(data);
          }
          else{
            $("#ajax-data").html();
          }
        }
      });
      return false;
    });

  // Ajax Two
    $(".portfolio-item.dua").click(function(){
      $.ajax({
        type: 'POST',
        url: "ajax2.html",
        data: $("#ajax-page"),
        success: function(data){
            $("#ajax-data").html(data);
        }
      });
      return false;
    });

  // Ajax three
    $(".portfolio-item.tiga").click(function(){
      $.ajax({
        type: 'POST',
        url: "ajax3.html",
        data: $("#ajax-page"),
        success: function(data){
            $("#ajax-data").html(data);
        }
      });
      return false;
    });

});

// niceScroll
$(document).ready(function() {
  $("body").niceScroll({cursorborderradius: "0px",cursorborder: "0px",zindex:"99999",smoothscroll: true});
});

// scroll

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// Api
// function initialize() {
//   var mapOptions = {
//     center: {
//       lat: 40.7499256,
//       lng: -73.9854028
//     },
//     zoom: 15,
//     zoomControl: false,
//     panControl: false,
//     streetViewControl: false
//   };

//   var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

//   var img = "images/pict.png";

//   var NewYork = new google.maps.Marker({
//       position: mapOptions.center,
//       map: map,
//       icon: img
//   });

//   var London = new google.maps.Marker({
//       position: {lat: 51.5106122, lng: -0.1529072},
//       map: map,
//       icon: img
//   });

//   var Paris = new google.maps.Marker({
//       position: {lat: 48.8588589, lng: 2.3470599},
//       map: map,
//       icon: img
//   });

//   var HongKong = new google.maps.Marker({
//       position: {lat: 22.2753729, lng: 114.1757384},
//       map: map,
//       icon: img
//   });

//   var markers = {
//     'NewYork': NewYork,
//     'London': London,
//     'Paris': Paris,
//     'HongKong': HongKong
//   };

//   var styles = [
//    {
//         "featureType": "all",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "saturation": 36
//             },
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 40
//             }
//         ]
//     },
//     {
//         "featureType": "all",
//         "elementType": "labels.text.stroke",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 16
//             }
//         ]
//     },
//     {
//         "featureType": "all",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 20
//             }
//         ]
//     },
//     {
//         "featureType": "administrative",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 17
//             },
//             {
//                 "weight": 1.2
//             }
//         ]
//     },
//     {
//         "featureType": "landscape",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 20
//             }
//         ]
//     },
//     {
//         "featureType": "poi",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 21
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 17
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 29
//             },
//             {
//                 "weight": 0.2
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 18
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 16
//             }
//         ]
//     },
//     {
//         "featureType": "transit",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 19
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#000000"
//             },
//             {
//                 "lightness": 17
//             }
//         ]
//     }
//   ];

//   map.setOptions({styles: styles});

//   function getCoords (position) {
//      var text = position.replace(/[()]/g,'').split(", ");
//      var lat = Number(text[0]);
//      var lng = Number(text[1]);

//      return {
//        lat: lat,
//        lng: lng
//      };
//   }

//   $('.maps .service').on('click', function () {
//       $('.maps .service').removeClass('active');
//      $(this).addClass('active');
//      var id = $(this).attr('id');
//      var position = String(markers[id].getPosition());
//      map.panTo(new google.maps.LatLng(getCoords(position).lat, getCoords(position).lng));
//   });
// }
// google.maps.event.addDomListener(window, 'load', initialize);

// Text Animate
$(function() {
  var textOpts = ["I am Kharisma", "Full Stack Developer", "Knows HTML", "Experiment CSS3", "Loves Elegant UI", "MODERN, MINIMAL & INSPIRING."],
    timeOut,
    len = textOpts.length,
    $writer = $('#writer'),
    currentValue = 0, charVal = 0,
    cursor = '<span class="cursor">|</span>',
    lengths = [];

    $.each(textOpts, function( index, value ) {
         lengths.push( value.length );
      });

    function typeAnimationIt() {
      var humanize = Math.round(Math.random() * (200 - 30)) + 30;
      timeOut = setTimeout(function() {
        charVal++;
        var	txtLen = lengths[currentValue],
          type = textOpts[currentValue].substring(0, charVal);
        $writer.html(type + cursor);
        typeAnimationIt();
        if(charVal == txtLen) {
          clearTimeout(timeOut);
          if(currentValue < len - 1) {
            setTimeout(function() {
              typeAnimationDelete();
            }, 1000);
          }
        }
      }, humanize);
    }

    function typeAnimationDelete() {
      var humanize = Math.round(Math.random() * (200 - 30)) + 30;
      timeOut = setTimeout(function() {
        charVal--;
        var	type = textOpts[currentValue].substring(0, charVal);
        $writer.html(type + cursor);
        typeAnimationDelete();
        if(charVal == 0) {
          clearTimeout(timeOut);
          currentValue++;
          setTimeout(function() {
            typeAnimationIt();
          }, 1000);
        }
      }, humanize);
    }

    typeAnimationIt();
});
