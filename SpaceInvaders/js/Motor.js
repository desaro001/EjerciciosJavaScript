var c;
var ctx;
var antonio;
var alberto;
function inicializar(){
    console.log("Inicializando...");
    //Obtenemos la referencia al canvas (lienzo)
    c = document.getElementById("pantalla");
    ctx = c.getContext("2d");
    //Pinta de negro la pantalla
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, c.width, c.height);
    //Instanciamos el alien
    antonio = new Invasor("invasor.png",0,0,80,80,10);
    alberto = new Invasor("invasor.png",85,0,80,80,10);
    fernando = new Invasor("invasor.png",170,0,80,80,10);
    monica = new Invasor("invasor.png",255,0,80,80,10);
    //Llamada a jugar
    setInterval(
        function(){
            jugar();
        },
        100);
}
function jugar(){
    console.log("Jugando...");
    ctx.fillRect(0, 0, c.width, c.height);
    antonio.mover();
    alberto.mover();
    fernando.mover();
    monica.mover();
}