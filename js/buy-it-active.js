let btnOpen3 = document.querySelector('.open_modal3')
let mymodal3 = document.querySelector('.mymodal3')
let iconClose = document.querySelector('.mymodal3 .modal_header .close i')


function toggleModal3(){
    mymodal3.classList.toggle('hide')
}

iconClose.addEventListener('click', toggleModal3)
btnOpen3.addEventListener('click', toggleModal3)
mymodal3.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal3()
    }
})