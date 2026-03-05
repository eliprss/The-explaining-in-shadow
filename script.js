function btn_shadow() {
  location.href="https://eliprss.github.io/The-explaining-in-shadow/shadow.html";
}

function btn_auteur() {
   location.href="https://eliprss.github.io/The-explaining-in-shadow/auteur.html";
}
function btn_quiz(){
  location.href="https://eliprss.github.io/The-explaining-in-shadow/QCM_JavaScript.html";
}

function note() {
  var reponse = document.getElementById("Id_Reponse").value;
  const selecteur = document.getElementById("choix");
  const monChoix=selecteur[selecteur.selectedIndex];
if (monChoix.value=="1"){
  document.getElementById("avis").innerHTML+="<tr><td> <img src=1re.png width=150></td><td>"+reponse+"</td></tr>";
}  
else if (monChoix.value=="2"){
  document.getElementById("avis").innerHTML+="<tr><td> <img src=2re.png width=150></td><td>"+reponse+"</td></tr>";
}
else if (monChoix.value=="3"){
  document.getElementById("avis").innerHTML+="<tr><td> <img src=3re.png width=150></td><td>"+reponse+"</td></tr>";
}
else if (monChoix.value=="4"){
  document.getElementById("avis").innerHTML+="<tr><td> <img src=4re.png width=150></td><td>"+reponse+"</td></tr>";
}
else if (monChoix.value=="5"){
  document.getElementById("avis").innerHTML+="<tr><td> <img src=5re.png width=150></td><td>"+reponse+"</td></tr>";
}

  
}


window.addEventListener("scroll", function() {
  const bar = document.querySelector(".bar");

  if (window.scrollY > 50) {
    bar.classList.add("small");
  } else {
    bar.classList.remove("small");
  }
});

var score=0;

function bout() {
  document.getElementById('Q1').innerHTML="Bonne réponse"
  score=score+1
}

function bon() {
  const select = document.getElementById("qu2");
  const rep = select[select.selectedIndex];
  if  (rep.value=="g" || rep.value=="e" || rep.value=="d"){
      document.getElementById('Q2').innerHTML="Mauvaise réponse"
    }
    if  (rep.value=="a"){
      document.getElementById('Q2').innerHTML="Bonne réponse"
      score=score+1
    }
}
function pas_bon() {
  document.getElementById('Q1').innerHTML="Mauvaise réponse"
}


function valid() {
  var reponse = document.getElementById("reponseq3").value;
  
  if (reponse.toLowerCase() == "shadow") {
    document.getElementById("Q3").innerHTML = "Bonne réponse !";
    score=score+1;
    afficherScore()
  } else {
    document.getElementById("Q3").innerHTML = "Mauvaise réponse !";
    afficherScore()
  }
    }

function afficherScore() {
  document.getElementById('sc').innerHTML = "Score : " + score +"/3";
}








