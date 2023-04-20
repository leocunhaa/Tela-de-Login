const input = document.querySelector('.control');
const button = document.querySelector('.button1');

function validateInput({ target }){
    if(targer.value.length > 2){
        button.removeAttribute('disabled');
    } else{
        button.setAttribute('disabled');
    }
}
input.addEventListener('input', validateInput);
