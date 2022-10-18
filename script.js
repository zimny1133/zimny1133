

/*var myButton = document.getElementById('totop');




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
}; */

//Bobometr skrypty

const radioButtons = document.getElementsByTagName("input");

const tableMilk = document.createElement("table");

tableMilk.innerHTML = `


<thead>
<tr>

<th><strong>Ilość Mleczka</strong></th>

<th><strong>Data</strong></th>
</tr>
</thead>

<tbody id="tablebody">

</tbody>

`;




const milkCounter =  ()  => {

    

};

for (var i = 0; i < radioButtons.length; i++){

    radioButtons[i].addEventListener("click", milkCounter, false);
   
   if (radioButtons.checked == true) {
   
      
       document.getElementById("table").appendChild(tableMilk);
   const tableBody = document.getElementById("tablebody");
   
   const d = new Date();
d.getHours();
   
   tablebody.innerHTML += `
<tr>
<td>${radioButtons[i].value}</td>
<td>${d.getHours() + ":" + d.getMinutes()}</td>
</tr>


`;
   
} else {

console.log("nic nie wybrane")
}
   };
  






