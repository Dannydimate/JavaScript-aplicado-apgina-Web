const menuEmail = document.querySelector('.navbar-email');
const menuIcono = document.querySelector('.menu')
const menuIconoCarrito = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcono = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')
const cantidadProductos = document.querySelector('.cantidad-productos')
const botonAgregar = document.querySelector('.add-to-cart-button')
let carrito = []


menuEmail.addEventListener('click', toggleDesktopMenu );
menuIcono.addEventListener('click', toggleMobileMenu );
menuIconoCarrito.addEventListener('click', toggleCarritoAside);
productDetailCloseIcono.addEventListener('click', closeProductDetailAside);
botonAgregar.addEventListener('click', agregarProducto )

function agregarProducto(){
    
}

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Flor-stelar',
    price: 50000,
    image: 'https://media.istockphoto.com/id/155161126/es/foto/rosa-hortensia-en-amarillo-taza-aislado-en-blanco.webp?s=612x612&w=is&k=20&c=AR7iiutVLqiE5A_ufzrDfxIpnQlbeLH676vdvGIzIdk=',
});
productList.push({
    name:'Flor-luz',
    price:50000,
    image:'https://media.istockphoto.com/id/517676530/es/foto/hortensia-rosa-flores.webp?s=612x612&w=is&k=20&c=tliRdRC2JJNPxoiXF48fQRLkamkVD79tQfsQM__TlIg=',

});
productList.push({
    name: 'Flor-Eterna',
    price: 50000,
    image:'https://media.istockphoto.com/id/641136304/es/foto/hortensia.webp?s=612x612&w=is&k=20&c=vjbWi7hrXIuRdl5ccK5xAerSUJqrDuIuaVbPAv-L7Uw=',

});
productList.push({
    name: 'Flor-celeste',
    price: 50000,
    image: 'https://media.istockphoto.com/id/509343262/es/foto/rojo-glox%C3%ADnea-en-una-olla-en-blanco.webp?s=612x612&w=is&k=20&c=Sm3t0DgpdjKjldVyJkdd3z7SUrjiml6cm8p2otbGsBE=',

});
productList.push({
    name:'Flor-destello',
    price:50000,
    image:'https://media.istockphoto.com/id/1397686772/es/foto/hermosa-planta-de-hortensia-en-maceta-con-flores-rosadas-aisladas-sobre-blanco.webp?s=612x612&w=is&k=20&c=7CLZ1rdreaEXYfrduayibKJ-BA39QWE0E1jcvdalEUc=',

});
productList.push({
    name: 'Flor-amanecer',
    price: 50000,
    image:'https://media.istockphoto.com/id/1203019162/es/foto/flor-de-onagra-rosa-aislada-en-una-maceta.webp?s=612x612&w=is&k=20&c=LLbuFA-ckNpHKvwiJ0wWt-XFv1k2wfkY271i1BStjkA=',

});

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name,price,image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice,productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart .setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.append(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.append(productCard);
    
    }
}
    
renderProducts(productList);


   
