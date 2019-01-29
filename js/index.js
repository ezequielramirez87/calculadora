//variables
let operacion;
let valorResultado;
let valorAuxiliar;
let valorFinal=0;
let resultado=document.getElementById("resultado");
let uno=document.getElementById("uno");
let dos=document.getElementById("dos");
let tres=document.getElementById("tres");
let cuatro=document.getElementById("cuatro");
let cinco=document.getElementById("cinco");
let seis=document.getElementById("seis");
let siete=document.getElementById("siete");
let ocho=document.getElementById("ocho");
let nueve=document.getElementById("nueve");
let cero=document.getElementById("cero");
let sumar=document.getElementById("sumar");
let restar=document.getElementById("restar");
let dividir=document.getElementById("dividir");
let multiplicar=document.getElementById("multiplicar");
let igual=document.getElementById("igual");
let resetiar=document.getElementById("resetiar");
let punto=document.getElementById("punto");

//evventos numeros

uno.addEventListener ("click", function(){
    resultado.textContent+=1
    valorResultado=resultado.textContent;
});
dos.addEventListener ("click", function(){
    resultado.textContent+=2
    valorResultado=resultado.textContent;
});
tres.addEventListener ("click", function(){
    resultado.textContent+=3
    valorResultado=resultado.textContent;
});
cuatro.addEventListener ("click", function(){
    resultado.textContent+=4
    valorResultado=resultado.textContent;
});
cinco.addEventListener ("click", function(){
    resultado.textContent+=5
    valorResultado=resultado.textContent;
});
seis.addEventListener ("click", function(){
    resultado.textContent+=6
    valorResultado=resultado.textContent;
});
siete.addEventListener ("click", function(){
    resultado.textContent+=7
    valorResultado=resultado.textContent;
});
ocho.addEventListener ("click", function(){
    resultado.textContent+=8
    valorResultado=resultado.textContent;
});
nueve.addEventListener ("click", function(){
    resultado.textContent+=9
    valorResultado=resultado.textContent;
});
cero.addEventListener ("click", function(){
    resultado.textContent+=0
    valorResultado=resultado.textContent;
});

//eventos operaciones

sumar.addEventListener ("click", function(){
    valorAuxiliar=valorResultado;
    resultado.textContent="";
    operacion="+"
});
restar.addEventListener ("click", function(){
    valorAuxiliar=valorResultado;
    resultado.textContent="";
    operacion="-"
});
dividir.addEventListener ("click", function(){
    valorAuxiliar=valorResultado;
    resultado.textContent="";
    operacion="/"
});
multiplicar.addEventListener ("click", function(){
    valorAuxiliar=valorResultado;
    resultado.textContent="";
    operacion="*"
});


igual.addEventListener ("click", function(){
switch(operacion){
    case "+":
    valorFinal+=parseInt(valorAuxiliar)+parseInt(valorResultado);
    resultado.textContent=valorFinal;
    valorAuxiliar=0;
    valorResultado=0;
    break;
    case "-":
    valorFinal+=parseInt(valorAuxiliar)-parseInt(valorResultado);
    resultado.textContent=valorFinal;
    valorAuxiliar=0;
    valorResultado=0;
    break;
    case "/":
    valorFinal+=parseInt(valorAuxiliar)/parseInt(valorResultado);
    resultado.textContent=valorFinal;
    valorAuxiliar=0;
    valorResultado=0;
    break;
    case "*":
    valorFinal+=parseInt(valorAuxiliar)*parseInt(valorResultado);
    resultado.textContent=valorFinal;
    valorAuxiliar=0;
    valorResultado=0;
}
});

resetiar.addEventListener ("click", function(){
    resultado.textContent="";
    valorAuxiliar=0;
    valorResultado=0;
    valorFinal=0;
});
