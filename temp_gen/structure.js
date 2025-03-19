const con_from = document.querySelector('.convert-from select');
const con_into = document.querySelector('.convert-into select');
const input = document.querySelector('.input input[type=number]');
const output = document.querySelector('.output');
const button = document.querySelector('.btn');
const value = con_from.value;
const convert = () =>{
    if(con_from.value === 'celsius'){
        const c=input.value;
        const fahrenheit = (9/5*c)+32;
        output.textContent = fahrenheit+' °F';
    }
    if(con_from.value === 'fahrenheit'){
        const f = input.value;
        const celsius = (5/9*(f-32));
        output.textContent = celsius+' °C';
    }
}

button.addEventListener('click',()=>{
    if(con_from.value === con_into.value){
        output.textContent = 'same unit chosen,choose another unit'
    }
    else if(!input.value){
        output.textContent = 'input a value'
    }
    else{
        convert();
    }
})