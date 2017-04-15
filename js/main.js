(function () {

// $("#content").load("templates/portfolio.html");


    $('.box a, .technology a').bind('click', function (e) {
        console.log("aa");
        e.preventDefault();
        var template = $(this).attr('href');
        $("#content").load(template);
    })

})();
