//code

//adding list element

/*function Puciu(){

var myFinishedGames = document.getElementById('game-list');

var newElementList = document.createElement('li')

var fusion = myFinishedGames.appendChild(newElementList);

var namingList = document.getElementsByTagName('li').item(9);

namingList.innerHTML = ('Mario Odysey');
};

window.onload = Puciu();*/

//adding list element



window.document.onload = function(){displayButtonTop()};

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






    
    
