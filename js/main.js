( function( $ ) {

    //popover click to open
    //=====================================================
    $('.popover_parent').on('click touchstart', function(e){
        e.stopPropagation();
        $(this).toggleClass('active');
    });
    $('html').on('click touchstart', function(){
        $('.popover_parent').removeClass('active');
    });
    $('.pop_over').on('click', function(ee){
        ee.stopPropagation();
    });


    // click more to expand content
    //=====================================================
    $('.more_link').on('click touchstart',function(e){
        e.preventDefault();
        $(this).parent().toggleClass('show_content').find('.mor_container').toggleClass('show_content').find('.mor_content').toggleClass('show_content');
    });



    //create stars randomly
    //=====================================================
    var starContainer = $('.starContainer'),
        xmlns = "http://www.w3.org/2000/svg",
        starColorsArray = ['#737CB7', '#ffe603', '#CB83C6', '#DED7DE', '#EAC0B0'];

    //randomize
    function randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    //Generate stars
    function makeStars() {
        for (var i = 0; i < 100; i++) {
            var star = document.createElementNS(xmlns, 'circle');
            starContainer.append(star);
        }
    }
    makeStars();
    //set attr to stars randomly
    function starsAttr (){
        var stars = $('.starContainer circle');
        for ( var n=0; n<stars.length; n++){
            TweenMax.set(stars[n], {
                fill: starColorsArray[n % starColorsArray.length],
                alpha: randomBetween(2, 10) / 10,
                attr: {
                    r: randomBetween(2, 10) / 10,
                    cx: randomBetween(1, 800),
                    cy: randomBetween(1, 700)
                }
            });
        }
    }
    starsAttr ();


} )( jQuery );