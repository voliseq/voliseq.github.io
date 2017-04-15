(function () {

// $("#content").load("templates/portfolio.html");


    $('header .box a').bind('click', function (e) {
        e.preventDefault();
        $("#content").finish();
        var template = $(this).attr('href');
        $("#content").fadeTo(0, 0);
        $("#content").load(template, function(){
            $("#content").fadeTo('slow', 1);
        });

    })

    $('footer .box a').bind('click', function (e) {
        e.preventDefault();
        $("#content").finish();
        var template = $(this).attr('href');
        $("#content").fadeTo(0, 0);
        $("#content").load(template, function(){
            $("#content").fadeTo('slow', 1);
            $("html, body").animate({scrollTop: 0}, 600);
        });

    })

})();
