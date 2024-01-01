let btnOpen4 = document.querySelector('.open_modal4')
let mymodal4 = document.querySelector('.mymodal4')
let iconClose4 = document.querySelector('.mymodal4 .modal_header .close i')

function toggleModal4(){
    mymodal4.classList.toggle('hide')
}

iconClose4.addEventListener('click', toggleModal4)
btnOpen4.addEventListener('click', toggleModal4)
mymodal4.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal4()
    }
})

let btnOpen5 = document.querySelector('.open_modal5')
let mymodal5 = document.querySelector('.mymodal5')
let iconClose5 = document.querySelector('.mymodal5 .modal_header .close i')
let btnClose5 = document.querySelector('.mymodal5 .modal_footer .close_modal5')

function toggleModal5(){
    mymodal5.classList.toggle('hide')
    mymodal4.classList.toggle('hide')
}

btnClose5.addEventListener('click', toggleModal5)
iconClose5.addEventListener('click', toggleModal5)
btnOpen5.addEventListener('click', toggleModal5)
mymodal5.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal5()
    }
})