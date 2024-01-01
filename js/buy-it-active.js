let btnOpen3 = document.querySelector('.open_modal3')
let mymodal3 = document.querySelector('.mymodal3')
let iconClose3 = document.querySelector('.mymodal3 .modal_header .close_modal3 i')
let btnclose3 = document.querySelector('.mymodal3 .modal_footer .no')

function toggleModal3(){
    mymodal3.classList.toggle('hide')
}

btnclose3.addEventListener('click', toggleModal3)
iconClose3.addEventListener('click', toggleModal3)
btnOpen3.addEventListener('click', toggleModal3)
mymodal3.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal3()
    }
})