(function(){


    var myButton = document.getElementById("colorChange");
    myButton.addEventListener('click', function(e){
        e = e || window.event;
        var target = e.target;
        if(target.style.backgroundColor == "yellow"){
            target.style.backgroundColor = "blue"
        }else{
            target.style.backgroundColor = "yellow";
        }
    })



})();
