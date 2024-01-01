let background = document.querySelectorAll('.background .back')
let livebackground = document.querySelector('.background .active')
let backgroundClick = document.querySelector('.background')

let index = 0;
function changeImage(){
    index++;
    if(index > 3)
    {
        index =0;
    }
    livebackground.classList.remove('active')
    console.log(livebackground)
    background[index].classList.add('active')
    console.log(background[index])
    livebackground = document.querySelector('.background .active')
    console.log(livebackground)
}
let refreshSlider = setInterval(()=>{changeImage()}, 10000);