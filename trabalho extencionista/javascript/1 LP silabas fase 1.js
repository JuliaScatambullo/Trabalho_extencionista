function pega_id(clicked_id){
    var letra = clicked_id;

    switch(letra) {
         case "ba":
            document.getElementById("faltando").style.backgroundColor = 'green';
            document.getElementById("faltando").innerHTML = "BA";
            document.getElementById("textinho").innerHTML = "PARABÉNS VOCÊ ACERTOU !!!";
            document.getElementById("textinho").style.backgroundColor = 'green';
            document.getElementById("proceed").style.display = 'block';

            document.getElementById("re").disabled = 'true';
            document.getElementById("la").disabled = 'true';
            document.getElementById("so").disabled = 'true';
            break

            case "re":
            document.getElementById("faltando").style.backgroundColor = 'red';
            document.getElementById("faltando").innerHTML = "RE"
            document.getElementById("textinho").innerHTML = "RESPOSTA ERRADA";
            document.getElementById("textinho").style.backgroundColor = 'red';
            break

            case "so":
            document.getElementById("faltando").style.backgroundColor = 'red';
            document.getElementById("faltando").innerHTML = "SO"
            document.getElementById("textinho").innerHTML = "RESPOSTA ERRADA";
            document.getElementById("textinho").style.backgroundColor = 'red';
            break

            case "la":
            document.getElementById("faltando").style.backgroundColor = 'red';
            document.getElementById("faltando").innerHTML = "LA"
            document.getElementById("textinho").innerHTML = "RESPOSTA ERRADA";
            document.getElementById("textinho").style.backgroundColor = 'red';
            break

         default:
            document.getElementById("faltando").style.backgroundColor = 'blue';
            document.getElementById("faltando").innerHTML = "PÃO DE BATATA"
            break   
    }
}