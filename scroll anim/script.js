$(function () {  // $(document).ready shorthand
    /* Every time the window is scrolled */
    $(window).scroll(function () {
        /* Check the location of each art */
        $('.artContainer').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object - 200) {

                $(this).animate({ 'opacity': '1' }, 3000);

            }

        });

    });
});