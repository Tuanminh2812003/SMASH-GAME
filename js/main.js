let btnOpen = document.querySelector('.open_modal')
let mymodal = document.querySelector('.mymodal')

let btnOpen2 = document.querySelector('.open_modal2')
let mymodal2 = document.querySelector('.mymodal2')

function toggleModal(){
    mymodal.classList.toggle('hide')
}

function toggleModal2(){
    mymodal2.classList.toggle('hide')
    mymodal.classList.toggle('hide')
}

function toggleModal2_2(){
    mymodal2.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal)
mymodal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})

btnOpen2.addEventListener('click', toggleModal2)
mymodal2.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal2_2()
    }
})