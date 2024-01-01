let btnOpen3 = document.querySelector('.open_modal3')
let mymodal3 = document.querySelector('.mymodal3')
let iconClose = document.querySelector('.mymodal3 .modal_header .close i')
let btnClose = document.querySelector('.mymodal3 .modal_footer .no')

function toggleModal3(){
    mymodal3.classList.toggle('hide')
}

btnClose.addEventListener('click', toggleModal3)
iconClose.addEventListener('click', toggleModal3)
btnOpen3.addEventListener('click', toggleModal3)
mymodal3.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal3()
    }
})