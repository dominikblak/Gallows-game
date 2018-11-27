

var haslo = "Java";
var kategoria = '<span class = "cate">Przysłowie</span>';
var czas = document.getElementById("czas");

var dlugosc= haslo.length;
var ile_bled=0;


var yes=new Audio("yes.wav");
var no=new Audio("no.mp3");
var winner=new Audio("winner.mp3")
var fail =new Audio("fail.mp3")
var haslo1="";



for (i=0; i<dlugosc;i++)
{

	if (haslo.charAt(i)==" ")haslo1=haslo1+" ";
	else haslo1=haslo1+"-";
}


haslo = haslo.toUpperCase();

function show_password() 
{
	
	document.getElementById("category").innerHTML = "Kategoria :" + "<br>" + kategoria;
	document.getElementById("plansza").innerHTML = haslo1;
	
}	

window.onload = start;


var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";






function start() 
{

var tresc_diva="";


for (i=0;i<=34; i++) 
{


var element = "lit" + i;


tresc_diva=tresc_diva +'<div class="litera" onclick="sprawdz('+i+')"id="'+element+'">'+litery[i]+'</div>';



if ((i+1) %7==0) tresc_diva=tresc_diva +'<div style="clear:both;"></div>'
}

document.getElementById("alfabet").innerHTML=tresc_diva;

show_password();
}



String.prototype.setSign=function(miejsce,znak)


{
if(miejsce>this.length-1) return this.toString();

else return this.substr(0,miejsce)+znak+this.substr(miejsce+1);
}



function sprawdz(nr)
{



var trafiona=false;


for (i=0; i<dlugosc;i++)
{

	if (haslo.charAt(i)==litery[nr])
	{
		
		haslo1=haslo1.setSign(i,litery[nr]);
		trafiona=true;
	}
}	


if(trafiona==true) 
{


yes.play()
var element = "lit"+ nr;

	document.getElementById(element).style.background = "#003300";
	document.getElementById(element).style.color = "#00C000";
	document.getElementById(element).style.border = " 3px solid #00C000";
	document.getElementById(element).style.cursor = "default";



show_password();
}
else
{
no.play()	
var element = "lit"+ nr;
document.getElementById(element).style.background = "#330000";
document.getElementById(element).style.color = "#C00000";
document.getElementById(element).style.border = "3px solid #C00000";
document.getElementById(element).style.cursor = "default";




document.getElementById(element).setAttribute("onclick",";");

ile_bled++;
var obraz="img/s"+ile_bled+".png";
document.getElementById("szubienica").innerHTML='<img src="'+obraz+'" alt=""/>'
}
if(haslo==haslo1)

document.getElementById("alfabet").innerHTML="Tak jest ! Podano prawidłowe hasło: " +haslo+'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ ?</span>';

if(haslo==haslo1)

winner.play();

  

if (ile_bled>=9) 
document.getElementById("alfabet").innerHTML="Przegrana ! Prawidłowe hasło: " +haslo+'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ ?</span>';
if (ile_bled>=9) 

 fail.play();

}

var timeleft = 60;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    if(haslo==haslo1)
    	clearInterval(downloadTimer);
    if (ile_bled>=9) 
    	clearInterval(downloadTimer);
   if(timeleft === 0)
   document.getElementById("alfabet").innerHTML="Koniec czasu ! Prawidłowe hasło: " +haslo+'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ ?</span>';
  if(timeleft === 0)
   document.getElementById("timer").innerHTML="<p id=tim>Koniec czasu ! </p>" ;
 if(timeleft === 0)
 	 fail.play();
    },1000);




