( function( $ ) {

    // Window width
    var $window_width = window.innerWidth;

    // Load page from bottom
    $(window).on('load', function () {
        $('html, body').animate({scrollTop: $(document).height()-$(window).height()}, 1);
    });


    // setTimeout Preloader
    setTimeout(function(){
        $('.preloader').fadeOut('500');
    }, 3000);

    //refresh when window is resized
    //$(window).on('resize',function(){location.reload();});


    /**
     * This part causes smooth scrolling using scrollto.js
     * We target all a tags inside the nav, and apply the scrollto.js to it.
     */
        //=====================================================
    $("nav a, .scrl_to").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
    });


    //scroll classes
    //=====================================================
    $(window).scroll(function(){
        var window_top = $(window).scrollTop(),
            section_top = $('.m_sec'),
            progress_top = $('#sec2').offset().top,
            progress_bottom = $(document).height(),
            rocket = $('.rocket'),
            nav = $('nav'),
            vpText = $('.vp');

        //slide in navigation when reach section 2
        if (window_top <= progress_top+200) {
            nav.removeClass('collapse');
        }else{
            nav.addClass('collapse');
        }

        section_top.each(function(){
            var $this = $(this);
            if (window_top >= $this.offset().top - 200 &&  window_top <= $this.offset().top + ($this.height() /2)) {
                $this.find('.planet').addClass('active');
            }else{
                $this.find('.planet').removeClass('active');
            }
        });

        //small rocket size
        if (window_top <= progress_top + 1000) {
            rocket.addClass('shrink');
        }else{
            rocket.removeClass('shrink');
        }

        //start fire and fade text
        if (window_top+window.innerHeight+2 < progress_bottom) {
            rocket.addClass('launch');
            vpText.addClass('fade');
        }else{
            rocket.removeClass('launch');
            vpText.removeClass('fade');
        }

    });



    if( !/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)  &&  $(window).width() >= 768) {

        /**
         * This part handles the highlighting functionality.
         * We use the scroll functionality again, some array creation and
         * manipulation, class adding and class removing, and conditional testing
         */
        //=====================================================
        var aChildren = $("nav li").children(); // find the a children of the list items
        var aArray = []; // create the empty aArray
        for (var i=0; i < aChildren.length; i++) {
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        } // this for loop fills the aArray with attribute href values

        $(window).scroll(function(){
            var windowPos = $(window).scrollTop()+2; // get the offset of the window from the top of page
            var windowHeight = $(window).height(); // get the height of the window
            var docHeight = $(document).height();

            for (var i=0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = $(theID).offset().top; // get the offset of the div from the top of page
                var divHeight = $(theID).height(); // get the height of the div in question
                if (windowPos >= divPos && windowPos <= (divPos + divHeight)) {
                    $("a[href='" + theID + "']").addClass("active");
                } else {
                    $("a[href='" + theID + "']").removeClass("active");
                }
            }

            //if(windowPos + windowHeight == docHeight) {
            //    if (!$("nav li:last-child a").hasClass("active")) {
            //        var navActiveCurrent = $(".active").attr("href");
            //        $("a[href='" + navActiveCurrent + "']").removeClass("active");
            //        $("nav li:last-child a").addClass("active");
            //    }
            //}
        });



        // Clouds animation
        // Get clouds
        var $cloud_1 = $('.cloud--1');
        var $cloud_2 = $('.cloud--2');
        var $cloud_3 = $('.cloud--3');
        // Cloud 1
        TweenMax.fromTo( $cloud_1, 30, { x:$window_width, ease: Linear.easeNone }, { x:-10, repeat: -1, ease: Linear.easeNone });
        // Cloud 2
        TweenMax.fromTo( $cloud_2, 20, { x:-10, ease: Linear.easeNone }, { x:$window_width, repeat: -1, ease: Linear.easeNone, delay: 4 });
        // Cloud 3
        TweenMax.fromTo( $cloud_3, 40, { x:-10, ease: Linear.easeNone }, { x:$window_width, repeat: -1, ease: Linear.easeNone, delay: 8 });


        //Balloon animation
        var $balloon = $('.balloon');
        // Animation
        TweenMax.to( $balloon, 35, { bezier:{ type:'quadratic', values:[ {x:-100, y:0}, {x:100, y:100}, {x:200, y:0}, {x:300, y:-100}, {x:400, y:0}, {x:500, y:100}, {x:600, y:0}, {x:700, y:-100},{x:800, y:0},{x:900, y:100},{x:1000, y:0}, {x:1100, y:-100},{x:$window_width + 200, y:0} ] }, ease: Linear.easeNone, repeat: -1 } );

        //wind bower animation
        var rotate = $('g#rotate');
        // Cloud 1
        TweenMax.to( rotate, 3, {rotation:360, transformOrigin:"50% 65%",repeat: -1, ease: Linear.easeNone });


        // shooting stars animations
        var shootingStar_1 = $('.shootingStar_1');
        var shootingStar_2 = $('.shootingStar_2');

        // shooting star 1
        TweenMax.fromTo( shootingStar_1, 5, { opacity:1,x:-30, y: 0, ease: Linear.easeNone }, {opacity:0, x:$window_width, y:($window_width/2)+700, repeat: -1, ease: Linear.easeNone, delay: 5 });

        // shooting star 2
        TweenMax.fromTo( shootingStar_2, 8, {opacity:1, x:0, y: 0,ease: Linear.easeNone }, {opacity:0, x:-$window_width, y: ($window_width/2)+700, repeat: -1, ease: Linear.easeNone, delay: 8 });


        // satellite animation
        var satellite = $('.satellite');
        var waves = $('.wave');
        // Animation
        TweenMax.to( satellite, 20, { bezier:{ type:'quadratic', values:[ {x:0, y:0}, {x:50, y:0}, {x:50, y:50}, {x:50, y:100}, {x:0, y:100}, {x:-50, y:100}, {x:-50, y:50}, {x:-50, y:0},{x:0, y:0} ] }, ease: Linear.easeNone, repeat: -1 } );
        TweenMax.staggerFrom( waves, 1, { opacity:0,ease: Linear.easeNone, repeat: -1 },.15 );


        //ufo animation
        var ufo = $('.ufo');
        var lights = $('#lights circle');
        // Animation
        TweenMax.to( ufo, 10, { bezier:{ type:'quadratic', values:[ {x:0, y:0}, {x:100, y:100}, {x:200, y:0}, {x:300, y:-100}, {x:400, y:0}, {x:500, y:100}, {x:600, y:0}, {x:700, y:-100},{x:800, y:0},{x:900, y:100},{x:1000, y:0}, {x:1100, y:-100},{x:$window_width + 100, y:0} ] }, ease: Linear.easeNone, repeat: -1,delay: 7 } );
        TweenMax.fromTo(ufo,1.5, {rotation:'-=20',ease: Power1.easeInOut}, {rotation: '+=40', repeat: -1,yoyo: true,ease: Power1.easeInOut, delay:5 });
        TweenMax.staggerFrom( lights, 1, { opacity:0,ease: Linear.easeNone, repeat: -1 },.15 );


    }

} )( jQuery );