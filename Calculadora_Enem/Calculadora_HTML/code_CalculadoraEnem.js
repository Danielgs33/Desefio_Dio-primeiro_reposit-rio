function Resultado() {
    var notaRedação = document.getElementById("redação");
    var nota1 = parseFloat(notaRedação.value);
    var notaMatematica = document.getElementById("matemática");
    var nota2 = parseFloat(notaMatematica.value); 
     var notaNatureza = document.getElementById("ciências");
    var nota3 = parseFloat(notaNatureza.value);
    var notaHumanas = document.getElementById("tecnologia");
    var nota4 = parseFloat(notaHumanas.value); 
     var notaTecnologia = document.getElementById("humanas");
    var nota5 = parseFloat(notaTecnologia.value);
    
    var mediaEnem = (nota1+nota2+nota3+nota4+nota5) / 5;
    console.log(mediaEnem.toFixed(2));
    var elementoValorResultado = document.getElementById("ResultadoFinal");
    var resultado = mediaEnem.toFixed(2);
    elementoValorResultado.innerHTML = resultado;
  }
  