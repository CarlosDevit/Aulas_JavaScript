window.onload = function(){
    var nome = "Devitm";

    if(nome == "Devit"){
        alert("Verdadeiro\n" + "Olá " + nome);
    }
    else if (nome != "Devitm"){
        nome = "devit";
        alert("Falso\n" + "Olá Visitante!" + "Onde está o " + nome);
    }
    else{
        alert("intruso");
    }
}