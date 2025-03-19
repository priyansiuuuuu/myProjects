const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = '0123456789';
const symbolSet = '~!@#$%^&*()_+/';

const totalChar = document.getElementById('total-char');
const upperInput = document.getElementById('upper-case');
const lowerInput = document.getElementById('lower-case');
const numberInput = document.getElementById('numbers');
const symbolInput = document.getElementById('symbols');
const passbox = document.getElementById('pass-box');


const getRandomData = (dataset)=>{
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const generatePassword = (password='') => {
    if(upperInput.checked){
        password += getRandomData(upperSet);
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet);
    }
    if(numberInput.checked){
        password += getRandomData(numberSet);
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet);
    }
    if(password.length<totalChar.value){
        return generatePassword(password);
    }
    passbox.textContent=password;
}

document.getElementById('btn').addEventListener('click',()=>{
    generatePassword();
})