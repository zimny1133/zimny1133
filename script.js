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

var buttonVideo = document.getElementsByClassName('video-button');

buttonVideo.addEventListener("click", displayVideo());


function displayVideo(){
    
    document.getElementById('video').style.display = 'block';
    document.getElementsByClassName('video-button').style.display = 'none';
    
};
