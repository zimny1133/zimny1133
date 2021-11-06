

var myButton = document.getElementById('totop');




function displayButton() {
   
    if (document.body.scrollTop > 20){
        
        myButton.style.display = "block";
    } else {
        
        myButton.style.display = "none";
    }
    
};

window.onscroll = function() {displayButton()};


function toTop(){
    
    document.body.scrollTop = 0;
};
