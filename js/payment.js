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
let productIncart = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []

function saveToLocalStorage(){
    console.log(productIncart);
    localStorage.setItem('products', JSON.stringify(productIncart));
}

function renderProductsToCart(){
    let data = ``
    productIncart.map((value, index) =>{
        data += 
        `
        <tr>
            <td>${value.name}</td>
            <td>${value.quantity}</td>
            <td>${value.price}</td>
            <td>${value.quantity * value.price2}$</td>
        </tr>
        `
    })
    document.getElementById("product-payment").innerHTML = data;
}

function totalMoney(){
    if(productIncart !== []){
        let total =0;
        for(let i=0; i< productIncart.length; i++){
            total += productIncart[i].quantity * productIncart[i].price2
        }
        document.getElementById("total-money").innerHTML = total
    }
}

function cartLoadPage(){
    renderProductsToCart();
    totalMoney();
}