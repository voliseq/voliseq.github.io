(function(){

$("#content").load("templates/home.html");


$('a').click(function(e){
    e.preventDefault();
    var template = $(this).attr('href');
    $("#content").load(template);

})

})();
