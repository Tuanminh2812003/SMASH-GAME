let list = document.getElementById('list');
let filter = document.querySelector('.filter');

let listProducts = [
    {
        id: 1,
        name: 'White Sport Cap',
        price: '10.95$',
        price2: '2',
        image: 'images/mockup/cap 3/3.png',
        link: 'sp1.html',
        category: 'hat',
    },
    {
        id: 2,
        name: '“Roguelands” Black Sport Cap',
        price: '10.95$',
        price2: '2',
        image: 'images/mockup/cap 1/Isolated_Black_Cap_Mockup.png',
        link: 'sp2.html',
        category: 'hat',
    },
    {
        id: 3,
        name: '“Roguelands” Matte Black Sport Cap',
        price: '10.95$',
        price2: '2',
        image: 'images/mockup/cap 2/85.png',
        link: 'sp3.html',
        category: 'hat',
    },
    {
        id: 4,
        name: '“Welcome to Littlewood” Print ',
        price: '29.95$',
        price2: '6',
        image: 'images/mockup/Poster 1/2.png',
        link: 'sp4.html',
        category: 'poster',
    },
    {
        id: 5,
        name: '“Littlewood” Print',
        price: '29.95$',
        price2: '6',
        image: 'images/mockup/Poster 2/1.png',
        link: 'sp5.html',
        category: 'poster',
    },
    {
        id: 6,
        name: '“Smash Games” Print',
        price: '24.95$',
        price2: '5',
        image: 'images/mockup/Poster 3/1.png',
        link: 'sp6.html',
        category: 'poster',
    },
    {
        id: 7,
        name: '“Magicite” Print',
        price: '24.95$',
        price2: '5',
        image: 'images/mockup/Poster 4/1.png',
        link: 'sp7.html',
        category: 'poster',
    },
    {
        id: 8,
        name: '“Smash Games” Plain Black T-Shirt',
        price: '22.95$',
        price2: '4',
        image: 'images/mockup/shirt 1/2.png',
        link: 'sp8.html',
        category: 'shirt',
    },
    {
        id: 9,
        name: '“Smash Games” White T-Shirt - Roguelands Variant',
        price: '22.95$',
        price2: '4',
        image: 'images/mockup/shirt 1/1.png',
        link: 'sp9.html',
        category: 'shirt',
    },
    {
        id: 10,
        name: '“Sean Young Avatar” Cup',
        price: '14.95$',
        price2: '3',
        image: 'images/mockup/cup 1/OQ3A6W1.png',
        link: 'sp10.html',
        category: 'cup',
    },
    {
        id: 11,
        name: '“Littlewood” Card',
        price: '4.95$',
        price2: '1',
        image: 'images/mockup/card 1/1.png',
        link: 'sp11.html',
        category: 'card',
    },
    {
        id: 12,
        name: '“Roguelands” Card',
        price: '4.95$',
        price2: '1',
        image: 'images/mockup/card 1/2.png',
        link: 'sp12.html',
        category: 'card',
    },
];

let productFilter = listProducts;

productFilter.sort(function(a,b){
    if (a.name.toLowerCase() < b.name.toLowerCase()) {return -1;}
    if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1;}
    return 0;
});

showProcduct(productFilter);

function showProcduct(productFilter){
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('a');
        newItem.href= item.link;
        newItem.classList.add('item');

        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);

        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);

        let newPrice = document.createElement('div');
        newPrice.classList.add('price');
        newPrice.innerText = item.price;
        newItem.appendChild(newPrice);

        list.appendChild(newItem);
    });
}

filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    console.log(valueFilter.sort.value);

    if(valueFilter.sort.value == 'atoz'){
        productFilter = listProducts;
        productFilter.sort(function(a,b){
            if (a.name.toLowerCase() < b.name.toLowerCase()) {return -1;}
            if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1;}
            return 0;
        });
    }else if(valueFilter.sort.value == 'ztoa'){
        productFilter = listProducts;
        productFilter.sort(function(a,b){
            if (a.name.toLowerCase() < b.name.toLowerCase()) {return 1;}
            if (a.name.toLowerCase() > b.name.toLowerCase()) {return -1;}
            return 0;
        });
    }else if(valueFilter.sort.value == 'pricehigh'){
        productFilter = listProducts;
        productFilter.sort(function(a,b){
            if (a.price2.toLowerCase() < b.price2.toLowerCase()) {return 1;}
            if (a.price2.toLowerCase() > b.price2.toLowerCase()) {return -1;}
            return 0;
        });
    }else if(valueFilter.sort.value == 'pricelow'){
        productFilter = listProducts;
        productFilter.sort(function(a,b){
            if (a.price2.toLowerCase() < b.price2.toLowerCase()) {return -1;}
            if (a.price2.toLowerCase() > b.price2.toLowerCase()) {return 1;}
            return 0;
        });
    }

    productFilter = listProducts.filter(item => {
        if(valueFilter.category.value != ''){
            if(item.category != valueFilter.category.value){
                return false;
            }
        }
        return true;
    })
    showProcduct(productFilter);
})

