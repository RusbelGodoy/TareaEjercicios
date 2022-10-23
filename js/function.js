function Basicas(){
    alert("vamos a hacer todas las operacion basica de 2 valores (numeros)")
    var A  = parseInt(prompt('ingrese valor 1 a calcular '));
    var B  = parseInt(prompt('ingrese valor 2 a calcular '));

var Suma = A + B ;
var Resta = A - B ;
var multiplicacion = A * B;
var Divi = A / B ;
alert("el resultados e las operaciones basicas de " + A + "y" + B +" son: ")
alert( "Suma = " +  Suma  + " Resta = " + Resta + "Multiplicacion = " + "Divicion = " + Divi)

};


function AreaTriangulo (){
    var Base  = parseInt(prompt('ingrese la base del triangulo '));
var Altura = parseInt(prompt('ingrese la Altura del triangulo '));
var Resultado = ((Base * Altura) / 2 );
alert('el area del triangulo  a calcular es ' + Resultado);
};

function cuadradoNumero (){
    var A  = parseInt(prompt('Ingresa al numero para hallar el cuadrado '));
var Res = A*A    
alert('el cuadrado del numero '+ A + "es" + Res);
};

function ConvertiUnidades (){
var Pulgadas = parseInt(prompt('íngresa las pulgadas a calcular en centimetros y en kilometros'));
var centimetros = Pulgadas *  2.54;
var Kilometros = Pulgadas * 0.00002540000;
alert(Pulgadas + 'en centimetros son '+ centimetros + "en Kilometros son" + Kilometros);
};

function SMilitar(){
    var Edad = parseInt(prompt('Que edad tienes '));
    var Genero =  prompt('Ingresa Tu Genero - Masculino o Femenino') ;
    if (Genero == "Femenino" || "femenino"){
        alert('Las mujeres no presentn el servicio militar');
    }else if(Genero == "Masculino" || "masculino"){
        if(Edad<=18){
            alert("Usted debe presentar el servicio militar");
        }
    }else if(Genero != 'Femenino' && 'Masculino'){
        alert("ingresa un genero valido");
        SMilitar();
    }
}

function ANacimiento(){
    var Edad = parseInt(prompt(' Ingresa tu edad Que edad tienes '));
    var NAcimiento = 2022-Edad ;
    alert("su año de nacimiento es " + NAcimiento )
}


function Promedio(){
    Suma = 0 ;
    i = 1 ;
    while (i <= 7){
        var Nota = parseInt(prompt(" ingrese Nota Numero " + i));
        Suma = Suma + Nota ;
        i = i + 1 ;
    }
    var Promedio = Suma/i ;
    if (Promedio < 3){
        alert("Usted APROBO su denitiva es " + Promedio)
    }else{
        alert("Usted REPROBO su denitiva es " + Promedio)
    }

}

function Invercion (){

  var TiempoA = parseInt(prompt(' Cuantos Años Tiene pensado invertir en pesos '));
  var Capital = parseInt(prompt('cuanto Capital Desea invertir')) ;

  var Tiempo = TiempoA * 12 ;
  var Porsentaje = Capital * 0.08
  var Beneficio = Porsentaje * Tiempo
  alert("su beneficio Por " + Capital + " por " +TiempoA + " Años Es : " + Beneficio + " pesos")

}