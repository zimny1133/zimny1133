

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

//Bobometr skrypty

const radioButtons = document.getElementsByTagName("input");

const milkCounter =  ()  => {

    window.alert("puciu")

};

for (var i = 0; i < radioButtons.length; i++){

    radioButtons[i].addEventListener("click", milkCounter);
}





radioButtons.addEventListener("click", milkCounter);
