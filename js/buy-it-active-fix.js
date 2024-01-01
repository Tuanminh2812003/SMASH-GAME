let btnOpen3 = document.querySelector('.open_modal3')
let mymodal3 = document.querySelector('.mymodal3')

function toggleModal3(){
    mymodal3.classList.toggle('hide')
}

btnOpen3.addEventListener('click', toggleModal3)
mymodal3.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal3()
    }
})