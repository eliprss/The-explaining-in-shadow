function btn_shadow() {
  location.href="https://eliprss.github.io/The-explaining-in-shadow/shadow.html";
}

function btn_auteur() {
   location.href="https://eliprss.github.io/The-explaining-in-shadow/auteur.html";
}

function note() {
  var reponse = document.getElementById("Id_Reponse").value;
  const selecteur = document.getElementById("choix");
  const monChoix=selecteur[selecteur.selectedIndex];
if (monChoix.value=="0"){
  document.getElementById("avis").innerHTML+="<tr><td> 0/5</td><td>"+reponse+"</td></tr>";
}
else if (monChoix.value=="1"){
  document.getElementById("avis").innerHTML+="<tr><td> 1/5</td><td>"+reponse+"</td></tr>";
}  
else if (monChoix.value=="2"){
  document.getElementById("avis").innerHTML+="<tr><td> 2/5</td><td>"+reponse+"</td></tr>";
}
else if (monChoix.value=="3"){
  document.getElementById("avis").innerHTML+="<tr><td> 3/5</td><td>"+reponse+"</td></tr>";
}
else if (monChoix.value=="4"){
  document.getElementById("avis").innerHTML+="<tr><td> 4/5</td><td>"+reponse+"</td></tr>";
}
else if (monChoix.value=="5"){
  document.getElementById("avis").innerHTML+="<tr><td> 5/5</td><td>"+reponse+"</td></tr>";
}

  
}

