//Definindo a variavel do codigoo do usuariovar nome = prompt("Como te chamas");

/*function fazeraccao(nome, idade) {
    var area = document.getElementById("area");
    var text = prompt("Qual seu Sobre nome:");

    area.innerHTML = nome + " " + text + " Tem " + idade + " anos de Idade";
}*/
/*function adicionaringledientes() {
    var ing = document.getElementById("ingredientes").value;
    var listhtml = document.getElementById("lista").innerHTML;

    listhtml = listhtml + "<li>" + ing + "</li>";

    document.getElementById("lista").innerHTML = listhtml;

}*/

function somar() {
    var campo1 = parseInt(document.getElementById("campo1").value);
    var campo2 = parseInt(document.getElementById("campo2").value);
    var res = document.getElementById("resultado");
    /*alert("campo1=" + campo1);
    alert("campo2=" + campo2);*/
    res.innerHTML = campo1 + campo2;
}

function mult() {
    var campo1 = parseInt(document.getElementById("campo1").value);
    var campo2 = parseInt(document.getElementById("campo2").value);
    var res = document.getElementById("resultado");
    res.innerHTML = campo1 * campo2;

}

function div() {
    var campo1 = parseInt(document.getElementById("campo1").value);
    var campo2 = parseInt(document.getElementById("campo2").value);
    var res = document.getElementById("resultado");
    res.innerHTML = campo1 / campo2;
}

function sub() {
    var campo1 = parseInt(document.getElementById("campo1").value);
    var campo2 = parseInt(document.getElementById("campo2").value);
    var res = document.getElementById("resultado");

    if (campo2 && campo1 == "") {
        alert("Os campos estao vazios")
    } else {
        res.innerHTML = ("=" + (campo1 - campo2));
    }
}

//Arrays
//var lista = [
//    "Filipe", "Joao", "Antonio", 80]