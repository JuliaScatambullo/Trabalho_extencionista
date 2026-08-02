function pega_id(clicked_id){
   var silaba = clicked_id;

   switch(silaba) {
        case "bo":
           document.getElementById("faltando").style.backgroundColor = 'green';
           document.getElementById("faltando").innerHTML = "TA";
           document.getElementById("textinho").innerHTML = "PARABÉNS VOCÊ ACERTOU !!!";
           document.getElementById("textinho").style.backgroundColor = 'green';
           document.getElementById("proceed").style.display = 'block';

           document.getElementById("s").disabled = 'true';
           document.getElementById("m").disabled = 'true';
           document.getElementById("g").disabled = 'true';
           document.getElementById("k").disabled = 'true';
           document.getElementById("l").disabled = 'true';
           break

           case "bra":
           document.getElementById("faltando").style.backgroundColor = 'red';
           document.getElementById("faltando").innerHTML = "BRA"
           document.getElementById("textinho").innerHTML = "RESPOSTA ERRADA";
           document.getElementById("textinho").style.backgroundColor = 'red';
           break

           case "go":
           document.getElementById("faltando").style.backgroundColor = 'red';
           document.getElementById("faltando").innerHTML = "GO"
           document.getElementById("textinho").innerHTML = "RESPOSTA ERRADA";
           document.getElementById("textinho").style.backgroundColor = 'red';
           break

           case "mu":
           document.getElementById("faltando").style.backgroundColor = 'red';
           document.getElementById("faltando").innerHTML = "MU"
           document.getElementById("textinho").innerHTML = "RESPOSTA ERRADA";
           document.getElementById("textinho").style.backgroundColor = 'red';
           break

           case "se":
           document.getElementById("faltando").style.backgroundColor = 'red';
           document.getElementById("faltando").innerHTML = "SE"
           document.getElementById("textinho").innerHTML = "RESPOSTA ERRADA";
           document.getElementById("textinho").style.backgroundColor = 'red';
           break

           case "li":
           document.getElementById("faltando").style.backgroundColor = 'red';
           document.getElementById("faltando").innerHTML = "LI"
           document.getElementById("textinho").innerHTML = "RESPOSTA ERRADA";
           document.getElementById("textinho").style.backgroundColor = 'red';
           break

        default:
           document.getElementById("faltando").style.backgroundColor = 'blue';
           document.getElementById("faltando").innerHTML = "PÃO DE BATATA"
           break   
   }
}