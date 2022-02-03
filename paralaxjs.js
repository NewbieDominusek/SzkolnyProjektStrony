function wysokosc(){
    var body = document.body, html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    document.getElementById("tlo").style.height = height+"px";
    setTimeout("wysokosc()", 1000);
}

function paralax(){
    var scroll = Math.round(window.scrollY)*0.5;
    document.getElementById("body").style.backgroundPosition = "0px "+-scroll+"px";
}