let visa = document.querySelector('.visa')
let bank = document.querySelector('.bank')
let master = document.querySelector('.master')
let grActive = document.querySelector('.active')

function visaColor(){
    grActive.classList.remove('active')
    visa.classList.toggle('active')
    grActive = document.querySelector('.active')
}
function bankColor(){
    grActive.classList.remove('active')
    bank.classList.toggle('active')
    grActive = document.querySelector('.active')
}
function masterColor(){
    grActive.classList.remove('active')
    master.classList.toggle('active')
    grActive = document.querySelector('.active')
}

visa.addEventListener('click', visaColor)
bank.addEventListener('click', bankColor)
master.addEventListener('click', masterColor)