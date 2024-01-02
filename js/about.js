let modal_about = document.querySelector('.modal_about')

function toggleModal(){
    modal_about.classList.toggle('hide')
}

modal_about.addEventListener('click', toggleModal)