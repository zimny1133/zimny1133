

var myButton = document.getElementById('totop');


myButton.addEventListener("scroll", displayButton());

function displayButton() {
   
    if (document.body.scrollTop > 20){
        
        myButton.style.display = "block";
    } else {
        
        myButton.style.display = "none";
    }
    
};


function toTop(){
    
    document.body.scrollTop = 0;
};
