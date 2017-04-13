(function(){

$("#content").load("templates/portfolio.html");


$('a').click(function(e){
    e.preventDefault();
    var template = $(this).attr('href');
    $("#content").load(template);

})

})();
