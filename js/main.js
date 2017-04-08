(function(){

$("#content").load("templates/resume.html");


$('a').click(function(e){
    e.preventDefault();
    var template = $(this).attr('href');
    $("#content").load(template);

})

})();
