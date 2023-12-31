let listProducts = [
    {
        id: 1,
        name: 'White Sport Cap',
        price: '10.95$',
        price2: '10.95',
        image: 'images/mockup/cap 3/3.png',
        link: 'sp1.html',
        category: 'hat',
    },
    {
        id: 2,
        name: '“Roguelands” Black Sport Cap',
        price: '10.95$',
        price2: '10.95',
        image: 'images/mockup/cap 1/Isolated_Black_Cap_Mockup.png',
        link: 'sp2.html',
        category: 'hat',
    },
    {
        id: 3,
        name: '“Roguelands” Matte Black Sport Cap',
        price: '10.95$',
        price2: '10.95',
        image: 'images/mockup/cap 2/85.png',
        link: 'sp3.html',
        category: 'hat',
    },
    {
        id: 4,
        name: '“Welcome to Littlewood” Print',
        price: '29.95$',
        price2: '29.95',
        image: 'images/mockup/Poster 1/2.png',
        link: 'sp4.html',
        category: 'poster',
    },
    {
        id: 5,
        name: '“Littlewood” Print',
        price: '29.95$',
        price2: '29.95',
        image: 'images/mockup/Poster 2/1.png',
        link: 'sp5.html',
        category: 'poster',
    },
    {
        id: 6,
        name: '“Smash Games” Print',
        price: '24.95$',
        price2: '24.95',
        image: 'images/mockup/Poster 3/1.png',
        link: 'sp6.html',
        category: 'poster',
    },
    {
        id: 7,
        name: '“Magicite” Print',
        price: '24.95$',
        price2: '24.95',
        image: 'images/mockup/Poster 4/1.png',
        link: 'sp7.html',
        category: 'poster',
    },
    {
        id: 8,
        name: '“Smash Games” Plain Black T-Shirt',
        price: '22.95$',
        price2: '22.95',
        image: 'images/mockup/shirt 1/2.png',
        link: 'sp8.html',
        category: 'shirt',
    },
    {
        id: 9,
        name: '“Smash Games” White T-Shirt - Roguelands Variant',
        price: '22.95$',
        price2: '22.95',
        image: 'images/mockup/shirt 1/1.png',
        link: 'sp9.html',
        category: 'shirt',
    },
    {
        id: 10,
        name: '“Sean Young Avatar” Cup',
        price: '14.95$',
        price2: '14.95',
        image: 'images/mockup/cup 1/OQ3A6W1.png',
        link: 'sp10.html',
        category: 'cup',
    },
    {
        id: 11,
        name: '“Littlewood” Card',
        price: '4.95$',
        price2: '4.95',
        image: 'images/mockup/card 1/1.png',
        link: 'sp11.html',
        category: 'card',
    },
    {
        id: 12,
        name: '“Roguelands” Card',
        price: '4.95$',
        price2: '4.95',
        image: 'images/mockup/card 1/2.png',
        link: 'sp12.html',
        category: 'card',
    },
];

let imageSmall = document.querySelectorAll('.imageSmall img')
let imageBig = document.querySelector('.imageBig')

let productIncart = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []

function saveToLocalStorage(){
    console.log(productIncart);
    localStorage.setItem('products', JSON.stringify(productIncart));
}

for(let index=0; index < imageSmall.length; index++){
    imageSmall[index].addEventListener('mouseover', ()=>{
        imageBig.src = imageSmall[index].src;
    })
}

function addtoCart(id){
    let checkProduct = productIncart.some(value => value.id === id)
    if(!checkProduct){
        let product = listProducts.find(value => value.id === id)
        productIncart.unshift({
            ...product,
            quantity: 1
        })
        saveToLocalStorage();
    }else{
        let getIndex = productIncart.findIndex(value => value.id === id)
        let product = productIncart.find(value => value.id === id)
        productIncart[getIndex] = {
            ...product,
            quantity: ++product.quantity
        }
        saveToLocalStorage();
    }
}



function renderProductsToCart(){
    let data = ``
    productIncart.map((value, index) =>{
        data += `
        <div class="pro">
            <div class="img">
                <img src='${value.image}' alt="">
            </div>
            <div class="id"> #${value.id}</div>
            <div class="info">
                <div class="title">${value.name}</div>
                <div class="quantity">
                    <button onclick='plusQuanity(${index})'>+</button>
                    <span>${value.quantity}</span>
                    <button onclick='minusQuanity(${index}, ${value.quantity})'>-</button>
                </div>
                <div class="price">${value.price}</div>
                <button class="btn btn-danger" onclick='deleteProductInCart(${index})'>Delete</button>
            </div>
        </div>`
    })
    document.getElementById("product-cart").innerHTML = data;
}

function plusQuanity(index){
    productIncart[index] = {
        ...productIncart[index],
        quantity: ++productIncart[index].quantity
    }
    saveToLocalStorage()
    renderProductsToCart()
}

function minusQuanity(index, quantity){
    if(quantity > 1){
        productIncart[index] = {
            ...productIncart[index],
            quantity: --productIncart[index].quantity
        }
        saveToLocalStorage()
        renderProductsToCart()
    }else{
        alert("Quantity min is 1")
    }
}

function deleteProductInCart(index){
    productIncart.splice(index, 1)
    saveToLocalStorage()
    renderProductsToCart()
}

function cartLoadPage(){
    renderProductsToCart();
}