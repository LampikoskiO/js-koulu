// luodaan perus leiska sivulle. css säätöä
document.body.style.background = "yellow";

let yladiv = document.getElementById("yladiv");
    yladiv.style.background = "red";
    yladiv.style.height = "150px";
    yladiv.style.marginTop = "100px";

let tekstiosa = document.getElementById("tekstiosa");
    tekstiosa.style.background = "white";
    tekstiosa.style.height = "100px";
    tekstiosa.style.width = "300px";


let aladivit = document.getElementById("aladivit");

let aladiv1 = document.getElementById("aladiv1");
    aladiv1.style.background = "red";
    aladiv1.style.height = "300px";
    aladiv1.style.marginTop = "10px";
    aladiv1.style.marginLeft = "auto";
    aladiv1.style.marginRight = "52%";
let aladiv2 = document.getElementById("aladiv2");
    aladiv2.style.background = "red";
    aladiv2.style.height = "300px";
    aladiv2.style.marginTop = "-300px";
    aladiv2.style.marginLeft = "52%";
    aladiv2.style.marginRight = "auto";
//aletaan koodaamaan


let nappi = document.getElementById("nappi");                   //nappi
let tekstiosaenter = document.getElementById("tekstiosa");      //tekstiosa mihin annetaan komennot
tekstiosaenter.addEventListener("keyup", function(event) {      //nappi toiminta ja enter toiminta
    if (event.key === 'Enter') {
        nappi.click(); 
    }
});

var number = 0;
nappi.onclick = function aloitusfunktio(){                          //ohjelma joka ajetaan kun klikataan nappia/enter
    var textfield = document.getElementById("tekstiosa").value;
    console.log(textfield);
        //if else else kaikki komennot tähän.                       //kaikki komennot toteutettu if else lauseilla
        if (textfield === "google"){
            google();
        }           
        else if (textfield === "listaa"){
            aladiv2.innerHTML = "Kaikki komennot: \n " + "<a href='#' onclick='onni();'>'onni'</a> " + "\n" + "<a href='#' onclick='textspam();'>'Numbers'</a> "+ "\n" + "<a href='#' onclick='google();'>'google'</a> "; //miten saa toimimaan ilman että poistaa aiemman aladiv innerhtml
        }
        else if (textfield === "onni"){
            onni();
            }
        else if (textfield >= 1 && textfield <= 999){
            number = textfield;
            textspam();
        }
//        else if (textfield = "piirrä"){ //ei toimi
//            canvas();
//        }
        else if (textfield === "tee popup"){
            popup();
        }
        else {
        aladiv2.innerHTML = "Komentoa ei tunnistettu!";
        }
    document.getElementById("tekstiosa").value = null;
    var textfield = null;
};

//funktiot jotka if else lauseet toteuttaa, tehtiin näin että 'listaa' funktio toimii.

function google(){
    aladiv2.innerHTML = "<a href ='https://www.google.com' target = '_blank'>Siirrytäänkö googleen?</a>";
}

function onni(){
    aladiv2.innerHTML = "Oon tää kissa" + "<img src='./onnikissa.jpg' height = '150px' width = 'auto'/>";
}


function textspam (){
    if (number === 0){
        aladiv2.innerHTML = "laita numero tekstikenttään";
    }
    else {
        aladiv2.innerHTML = "";
    for (let i = 0; i < number; i++) {
        aladiv2.innerHTML += (i+1) + ".  " + Math.random().toString(36).slice(2) + '</br>';
    }};
}

//var Canvas;
//function canvas(){
//    Canvas.createElement('canvas');
//circle();
//}

//function circle(){
//    var ympyra = Canvas.getContext("2d");
//    ympyra.beginPath();
//    ympyra.arc(100, 75, 50, 0, 2 * Math.PI);
//    ympyra.stroke();
//}

var newDiv;
function popup(){
    newDiv.createElement("<div id='ilmestynyt'>'Tässä pyydetty popup'</div>");
}