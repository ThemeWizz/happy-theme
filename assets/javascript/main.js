$(document).ready(function () {

    // You can delete this function, it's only used for demo purposes to get a future date
    function futureDate() {
        var futureDate, dd, mm, y;

        futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 60);

        dd = futureDate.getDate();
        mm = futureDate.getMonth() + 1;
        y = futureDate.getFullYear();

        futureFormattedDate = mm + '/'+ dd + '/'+ y;

        return futureFormattedDate;
    }

    // Change the 'date' variable value to your desierd future date
    $('#countdown').downCount({
        date: futureDate()+' 12:00:00', // CHANGE THE DATE
        offset: -4 // CHANGE UTC OFFSET
    });

    $(".fadein, .fadein-move-up").each(function(){
        var $elem = $(this);
        var delay = $elem.data('animation-delay') || 0;
        $elem.css('-webkit-transition-delay', delay + 'ms')
            .css('-moz-transition-delay', delay + 'ms')
            .css('-ms-transition-delay', delay + 'ms')
            .css('-o-transition-delay', delay + 'ms')
            .css('transition-delay', delay + 'ms');
    });

    $('.fadein, .fadein-move-up').waypoint(function(){
        var $elem = $(this);
        var animDelay = $elem.data('animation-delay') || 0;

        if(Modernizr.csstransitions){
            // Adding the animate class, triggers the css animation
            // Animation styles are in the style sheet
            $elem.addClass('animate');

            // reset delay when the animation is done.
            setTimeout(function(){
                $elem.css('-webkit-transition-delay', '0ms')
                    .css('-moz-transition-delay', '0ms')
                    .css('-ms-transition-delay', '0ms')
                    .css('-o-transition-delay', '0ms')
                    .css('transition-delay', '0ms');
            }, animDelay);

        }else{
            // js fallback for older browsers
            setTimeout(function(){
                $elem.animate({
                    opacity : 1
                }, 450 );
            }, animDelay);
        }
    }, { offset: '75%' });
});