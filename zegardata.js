function data(){
    var data = new Date();
    var dzien = data.getDay();
    var miesiac = data.getMonth()+1;
    switch(miesiac){
            case 1:
                miesiac="Styczeń";
            break;
        
            case 2:
                miesiac="Luty";
            break;
        
            case 3:
                miesiac="Marzec";
            break;
        
            case 4:
                miesiac="Kwiecień";
            break;
        
            case 5:
                miesiac="Maj";
            break;
        
            case 6:
                miesiac="Czerwiec";
            break;
        
            case 7:
                miesiac="Lipiec";
            break;
        
            case 8:
                miesiac="Sierpień";
            break;
        
            case 9:
                miesiac="Wrzesień";
            break;
        
            case 10:
                miesiac="Październik";
            break;
        
            case 11:
                miesiac="Listopad";
            break;

            case 12:
                miesiac="Grudzień";
            break;
    }
    var rok = data.getFullYear();
    document.getElementById("data").innerHTML = "Data:<br>"+dzien+". "+miesiac+" "+rok;
}

function zegar(){
    var data = new Date();
    var sekunda = data.getSeconds();
    if(sekunda <10) sekunda = "0"+sekunda;
    var godzina = data.getHours();
    if(godzina <= 9) godzina = "0"+godzina;
    var minuta = data.getMinutes();
    if(minuta <= 9){
        minuta = "0"+minuta;
    }
    document.getElementById("czas").innerHTML = "Godzina:<br>"+godzina+":"+minuta+":"+sekunda;
    setTimeout("zegar()", 1000);
}