/*function verificador() {
    var numero = prompt("Digite o Numero:");
    if (numero == 10) {
        alert("X e maior que 10");
    } else {
        alert("x e menor que 10");
    }
}*/
/*x = prompt("Qual eh o numero:");
switch (x) {
    case "0":
        alert("x eh zero");
        break;
    case "1":
        alert("x eh um");
        break;
    case "2":
        alert("x eh dois");
        break;
    default:
        alert("Ninguem foi satisfeto");
        break;
}*/
function verificar() {
    var n1 = document.getElementById("n1").innerHTML;
    var n2 = document.getElementById("n2").value;
    var res = document.getElementById("resultado");
    var certo = "Voce Acertou!";
    var errado = "Voce Errou!";
    if (n1 == n2) {
        /*window.location.href = window.location;*/
        res.innerHTML = certo;
        res.style.backgroundColor = "green";
        res.style.color = "#fff";
    } else {
        res.innerHTML = errado;
        res.style.animation = "errou 2s alternate";
        res.style.backgroundColor = "red";
        res.style.color = "#fff";
        /*window.location.href = window.location;*/
    }
}
resetar();

function resetar() {
    document.getElementById("n2").value = "";
    var aleatorio = Math.floor(Math.random() * 100);
    document.getElementById("n1").innerHTML = aleatorio;
}

function actualizar() {
    var n1 = document.getElementById("n1").innerHTML;
    var n2 = document.getElementById("n2").value;
    update = document.getElementById("actualizar");
    if (n1 != n2) {
        update.style.animation = "errou 2s alternate";
        window.location.href = window.location;
    } else {
        window.location.href = window.location;
    }
}