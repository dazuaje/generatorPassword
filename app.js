// DarkMode/ Modo Oscuro


const changeTheme = document.getElementById('changeTheme');

changeTheme.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});


const showPassword = document.querySelector('.showPassword');

/*Obtener el valor de la longitud de la cadena */
const rangeField = document.querySelector("#rangeField");

rangeField.addEventListener("change",() => {
    let rangeFieldLength = parseInt(rangeField.value);
    let showPassword = document.querySelector(".inputResultLength");
    showPassword.innerHTML = rangeFieldLength;
    //return rangeFieldLength
});
//console.log(rangeFieldLength);

//Clipboard copyClipboard

const copy = document.querySelector('.copyClipboard').addEventListener("click", (e) => {
   
    const useRange = document.createRange();
    const useSelection = window.getSelection();
    useRange.selectNodeContents(showPassword);
    useSelection.removeAllRanges();
    useSelection.addRange(useRange);
    document.execCommand("copy");
    alert(`Copiado`)
})



const Checks = document.querySelectorAll(type="checkbox");
//console.log(Checks);

const upperCaseSelection = document.querySelector('#uppercase');
const lowerCaseSelection = document.querySelector('#lowercase');
const numberCaseSelection = document.querySelector('#numbers');
const symbolCaseSelection = document.querySelector('#symbols');


const btn = document.querySelector('.btn');

//randomLowerCase(5)


function randomUpperCaseStr(){
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return uppercase.charAt(Math.floor(Math.random() * uppercase.length)); 
}
function randomLowerCaseStr(){
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    return lowerCase.charAt(Math.floor(Math.random() * lowerCase.length)); 
}
function randomSymbolsStr(){
    let symbols = `!%/(){}#+-:_$=*?&`; 
    return symbols.charAt(Math.floor(Math.random() * symbols.length));
}
function randomNumbersStr(){
    let number = `1234567890`;
    return number.charAt(Math.floor(Math.random() * number.length))
}


let opciones = [];


lowerCaseSelection.addEventListener("click", (e) => {
   if(!lowerCaseSelection.checked){
       opciones.splice(opciones.indexOf("lowercase"),1)
   }else{
        opciones.push("lowercase");
   }
   console.log(opciones);

})
symbolCaseSelection.addEventListener("click", (e) => {
    if(!symbolCaseSelection.checked){
        opciones.splice(opciones.indexOf("simbol"),1)
    }else{
         opciones.push("simbol");
    }
    console.log(opciones);
})
numberCaseSelection.addEventListener("click", (e) => {
    if(!numberCaseSelection.checked){
        opciones.splice(opciones.indexOf("number"),1)
    }else{
         opciones.push("number");
    }
    console.log(opciones);
})
upperCaseSelection.addEventListener("click", (e) => {
    if(!upperCaseSelection.checked){
        opciones.splice(opciones.indexOf("uppercase"),1)
    }else{
         opciones.push("uppercase");
    }
    console.log(opciones);
})
function generatePassword(){
    //Ternary Operator If opciones iS Empty
    /*
    if(opciones.length === 0) {
        showPassword.innerHTML = 'Vacio'
        let generateField = document.querySelector('.generateField');
        generateField.style.border = '2px solid red';
        alert('Introduce a caracter')
        // generateField.classList.toggle('activado')
        console.log('Vacio') 
        
        
    }
    */
    //else{console.log('nothing');}
        
    //}
            
        let getRandomString = '';
        
        let random;
        let rangeLength = rangeField.value;
        for(let i = 0; i<rangeLength;i++){

            random = Math.floor(Math.random() * opciones.length);
            //console.log(random)
            
            /*
            if(opciones.length === 0) {
                showPassword.innerHTML = 'Vacio'
                let generateField = document.querySelector('.generateField');
                generateField.style.border = '2px solid red';
                alert('Introduce a caracter')
                // generateField.classList.toggle('activado')
                console.log('Vacio');                
                */
               switch (opciones[random]) {
                   case "uppercase":
                    getRandomString += randomUpperCaseStr();
                    break;
                    case "lowercase":
                    getRandomString += randomLowerCaseStr();
                    break;
                case "number":
                    getRandomString += randomNumbersStr();
                    break;
                case "simbol":
                    getRandomString += randomSymbolsStr();
                    break;
                default:
                    break;
                }
                
            }
            //&& rangeField.value === 0rangeField.value === 0 && opciones.length === 0
            let generateField = document.querySelector('.generateField');
            console.log(generateField);
               if (getRandomString.length === 0) {
                   alert('Include a checkbox or give a length for the password')
                   generateField.classList.add('activado')
                   
                   //showPassword.innerHTML = 'vacio';
                }else{
                    generateField.classList.remove('activado')
                    showPassword.innerHTML = getRandomString;
                }
                
              //  console.log(getRandomString);
            }
            //showPassword.textContent = 'The password Generate ....'

btn.addEventListener('click', generatePassword)

