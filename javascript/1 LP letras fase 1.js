function pega_id(clicked_id){
    var letra = clicked_id;

    switch(letra) {
         case "o":
            document.getElementById("faltando").style.backgroundColor = 'green';
            document.getElementById("faltando").innerHTML = "O";
            document.getElementById("textinho").innerHTML = "PARABÉNS VOCÊ ACERTOU !!!";
            document.getElementById("textinho").style.backgroundColor = 'green';
            document.getElementById("proceed").style.display = 'block';

            document.getElementById("a").disabled = 'true';
            document.getElementById("e").disabled = 'true';
            document.getElementById("u").disabled = 'true';
            break

            case "i":
            document.getElementById("faltando").style.backgroundColor = 'red';
            document.getElementById("faltando").innerHTML = "I"
            document.getElementById("textinho").innerHTML = "RESPOSTA ERRADA";
            document.getElementById("textinho").style.backgroundColor = 'red';
            break

            case "u":
            document.getElementById("faltando").style.backgroundColor = 'red';
            document.getElementById("faltando").innerHTML = "U"
            document.getElementById("textinho").innerHTML = "RESPOSTA ERRADA";
            document.getElementById("textinho").style.backgroundColor = 'red';
            break

            case "e":
            document.getElementById("faltando").style.backgroundColor = 'red';
            document.getElementById("faltando").innerHTML = "E"
            document.getElementById("textinho").innerHTML = "RESPOSTA ERRADA";
            document.getElementById("textinho").style.backgroundColor = 'red';
            break

         default:
            document.getElementById("faltando").style.backgroundColor = 'blue';
            document.getElementById("faltando").innerHTML = "PÃO DE BATATA"
            break   
    }
}