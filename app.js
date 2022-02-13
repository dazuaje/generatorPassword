//Options Values

/*Funcion para mostrar lonitud de contrasena */
/*
function showTextFieldLength(){
    const rangeField = document.querySelector("#rangeField");
    const rangeFieldLength = parseInt(rangeField.value);
    let showPassword = document.querySelector(".inputResultLength");
    return showPassword.textContent = rangeFieldLength;
}
rangeField.addEventListener("change", () => showTextFieldLength())

    



const generatePassword = (base, length) => {
    let password = "";
    for (let x = 0; x < length; x++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
};

const generate = () => {
    let length = parseInt(inputLength.value);

    let base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = ".?,;-_¡!¿*%&$/()[]{}|@><";

    if (checkbox1.checked) base += numbers;

    if (checkbox2.checked) base += symbols;

    generatedPassword.innerText = generatePassword(base, length);
};

window.addEventListener("DOMContentLoaded", () => {
    btnGenerate.addEventListener("click", () => {
        generate();
    });
}); */



/*


const ulFather = document.querySelector('ul');

ulFather.addEventListener('change', (e) => {
    
    if (e.target.type === 'checkbox') { 
        const checked = document.querySelectorAll('input[type="checkbox"]:checked')
        e.preventDefault();
        checked.forEach((e) => {
            console.log(e)
        })
        
    }
    
})
ulFather.addEventListener('change', e => {
    if (e.target.type === 'checkbox') {
        const checked = document.querySelectorAll('input[type="checkbox"]:checked')
        selected = Array.from(checked).map(x => x);
        console.log(selected);
    }
})
/*

function getRandomSymbol() {
    for (let i = 0; i < 3; i++) {
        const symbols = ['!@#$%*&(){}[]=<>/,.'];
        let longitud = symbols.length;
        
        let randon = symbols[Math.floor(Math.random() * longitud)];
        let rando = symbols[Math.floor(Math.random() * longitud)];
        let rand = symbols[Math.floor(Math.random() * longitud)];
        
        
        
        return randon[i], rando[i], rand[i]
        //console.log(randon[i]);
        
        
    }
}
*/



//console.log(getRandomSymbol());
//console.log(symbols.slice(0, 4));

/*
let i = "12";

let longitudInput = i / 2;
//console.log(longitudInput)

const uppercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZGDJD';//
*/

//let logitudDeString = text.length;
//console.log(logitudDeString);



//console.log(randon);
/*
let text = "davidazuaje";
let result = '';
text.split('').forEach(letter => {
    const randon = Math.floor(Math.random() * text.length);  
    result += letter[randon];
    console.log(result);
});
/*
[...text].forEach(c => 
    let t = c[randon];
    console.log(t);
    
    )
    
    */
    
   
// With the `of` operator
//for (const c of text) {
   // console.log(c)
//}


/*
uppercaseStr.Array.from();
uppercaseStr.forEach(x => {
    console.log(x);
    
});
*/

//let u = uppercaseStr.split("", longitudInput);
//console.log(u);







//const symbolstr = '&_)$*%^!=-/<>(@``ç#|@=&abcdefghijklmnopqrstuvwxyzhgsfd';
//let i = `${12}`

/*
let i = 5;
const numberFieldRamdon = (y = `${i}`) =>{
    const numbersStr = '0123456789';
    let savePasswordNumber = "";
    let length = numbersStr.length
    
    for(let i = 0; i < y; i++ ){
        savePasswordNumber += numbersStr.charAt(Math.floor(Math.random() * length));
    }
    console.log(savePasswordNumber)
}
//for (let i = 0; i < 6; i++){numberFieldRamdon();}
numberFieldRamdon()




const stringFieldRamdon = (y = 12) =>{
    const string = 'abcdefghijklmnopqrstuvwxyzhgsfd';
    let savePasswordSring = "";
    let length = string.length
    
    for(let i = 0; i < y; i++ ){
        savePasswordSring += string.charAt(Math.floor(Math.random() * length));
    }
    console.log(savePasswordSring)
}
stringFieldRamdon()
//for (let i = 0; i < 4; i++){stringFieldRamdon();}


function randonAll ()   {
    return console.log(savePasswordNumber + savePasswordSring)
}
randonAll()


*/
/*
console.log(y)
//10
//5U
//5L
//Find o IndexOf





//Pedir al usuario que ingrese 2 número y mostrar en pantalla la suma, resta, multiplicación y división 

var num1 = parseInt(prompt("ingresa el primer numero"));
var num2 = parseInt(prompt("Ingresa el segundo numero"));

var resultado = confirm('El resultado de la suma es ' + (num1 + num2));
var resultado = confirm('El resultado de la resta es ' + (num1 - num2))
var resultado = confirm('El resultado de la multiplicacion ' + (num1 * num2))
var resultado = confirm('El resultado de la division ' + (num1 / num2))
//console.log(typeof(num1));

//Realizar una calculadora que permita obtener el promedio entre la nota de 3 alumnos 


let student1 = parseInt(prompt("ingresa el primer numero de tu nota"));
let student2 = parseInt(prompt("Ingresa el segundo numero de tu nota"));
let student3 = parseInt(prompt("Ingresa el tercer numero de tu nota"));

let result = (student1 + student2 + student3) / 3;

confirm(result.toFixed(2))
*/


const cuadrado = document.querySelector(".text");
console.log(cuadrado);
cuadrado.style.backgroundColor = 'cyan';
cuadrado.style.width = '200px';
cuadrado.style.height = '200px';
cuadrado.style.margin = '50px'

cuadrado.addEventListener('click', () =>{alert("Excelente")});

var dato1 = 1;
var dato2 = '1';
/*
if(!(dato1 === dato2)){
    console.log('Condicion 1 true');
} else{
    console.log('Condicion False');
    
}
// IF - ELSE IF

if(!(dato1 === dato2)){
    console.log('Condicion 1 true');
} else if(dato == dato2){
    console.log('Condicion False');
    
} else{
    console.log('Condicion False');
}
*/



//Al ingresar una edad debemos informar si la persona es mayor de edad (>18) o no
let edad = parseInt(prompt('Digite su edad'));

(edad >= 18) ?  alert(`Eres mayor de edad`) : alert(`Eres menor de edad`);



const birthday = new Date();
const date1 = birthday.getDate();

console.log(date1);
// expected output: 19

//Login. Si nombre de usuario es Pepe, otorgarle el role Admin; Si es Pepa, el role Editor; y si es Pepito el role Usuario. Armar una pantalla distinta para cada role 


//crear variable role //almacenar nombre de usuario //if para verificar nombre === 'Pepe' //asignar role //switch con role //armamos las pantallas 


let userData = prompt('Ingresa tu rol');
if(userData === 'Pepe'){
    alert('Admin')
}else if (userData === 'Pepa'){
    alert('Editor')
} else if(userData === 'Pepito'){
    alert('User')
}

//Login. Si nombre de usuario es Pepe, otorgarle el role Admin; Si es Pepa, el role Editor; y si es Pepito el role Usuario. Armar una pantalla distinta para cada role 









/*



function getValue () {
    let newValue = rangeField.value;
    textcontent.textContent = newValue;
}

let test = rangeField.addEventListener("input", getValue)
console.log(test);


/*Get value of rage in input


//Copiar clipboard
*/
