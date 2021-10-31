

var myButton = document.getElementById('totop');


window.onload = myButton.style.display = "block";

function displayButtonTop(){
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        
        document.getElementById('totop').style.display = "block";
    } else {
        
        document.getElementById('totop').style.display = "none";
    }    
};

function toTop(){
    
    document.body.scrollTop = 0;
};






    
    
