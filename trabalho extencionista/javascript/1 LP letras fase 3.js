function pega_id(clicked_id){
    var letra = clicked_id;

    switch(letra) {
         case "t":
            document.getElementById("faltando").style.backgroundColor = 'green';
            document.getElementById("faltando").innerHTML = "T";
            document.getElementById("textinho").innerHTML = "PARABÉNS VOCÊ ACERTOU !!!";
            document.getElementById("textinho").style.backgroundColor = 'green';
            document.getElementById("proceed").style.display = 'block';

            document.getElementById("s").disabled = 'true';
            document.getElementById("m").disabled = 'true';
            document.getElementById("g").disabled = 'true';
            document.getElementById("k").disabled = 'true';
            document.getElementById("l").disabled = 'true';
            break

            case "s":
            document.getElementById("faltando").style.backgroundColor = 'red';
            document.getElementById("faltando").innerHTML = "S"
            document.getElementById("textinho").innerHTML = "RESPOSTA ERRADA";
            document.getElementById("textinho").style.backgroundColor = 'red';
            break

            case "m":
            document.getElementById("faltando").style.backgroundColor = 'red';
            document.getElementById("faltando").innerHTML = "M"
            document.getElementById("textinho").innerHTML = "RESPOSTA ERRADA";
            document.getElementById("textinho").style.backgroundColor = 'red';
            break

            case "k":
            document.getElementById("faltando").style.backgroundColor = 'red';
            document.getElementById("faltando").innerHTML = "K"
            document.getElementById("textinho").innerHTML = "RESPOSTA ERRADA";
            document.getElementById("textinho").style.backgroundColor = 'red';
            break

            case "g":
            document.getElementById("faltando").style.backgroundColor = 'red';
            document.getElementById("faltando").innerHTML = "G"
            document.getElementById("textinho").innerHTML = "RESPOSTA ERRADA";
            document.getElementById("textinho").style.backgroundColor = 'red';
            break

            case "l":
            document.getElementById("faltando").style.backgroundColor = 'red';
            document.getElementById("faltando").innerHTML = "L"
            document.getElementById("textinho").innerHTML = "RESPOSTA ERRADA";
            document.getElementById("textinho").style.backgroundColor = 'red';
            break

         default:
            document.getElementById("faltando").style.backgroundColor = 'blue';
            document.getElementById("faltando").innerHTML = "PÃO DE BATATA"
            break   
    }
}