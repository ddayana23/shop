const productData = [
    {
        index: '01',
        name: 'yellow tracksuit',
        image: 'img1.jpg',
        des: 'Dieser Trainingsanzug eignet sich perfekt zum Layering auf dem Weg ins Fitnessstudio, joggen, spazieren gehen oder beim lässigen Anziehen etwas stilvolles tragen. <br> Dieser mit einem leichten, atmungsaktiven Material gefertigte Trainingsanzug ist das perfekte Kompliment zu jeder aktiven Kleidergarderobe.'
    },
    {
        index: '02',
        name: 'designer outfit',
        image: 'img2.jpg',
        des: 'Der größte Marketplace für Luxusmode. Designer-Kleidung für Damen online bei Farfetch shoppen. Alle Top Marken & neuen Kollektionen.'
    },
    {
        index: '03',
        name: 'chilling mood',
        image: 'img3.jpg',
        des: ' Entdecke Dein nächstes Outfit bei uns: ob lässig und locker mit Denim Jeans, T-Shirt und Tuniken oder feminin verspielt und elegant mit Kleidern, Röcken und Blusen und einem tollen Schal dazu. Jede Kundin findet bei uns ihr neues Lieblingsteil, das sie am liebsten nicht mehr ausziehen will.  '
    }
]

const nxtBtn = document.querySelector('.nxt-btn');

let smImgContainer = document.querySelector('.sm-product-img-container');
let smImg = document.querySelector('.sm-product-img');
let productIndex = document.querySelector('.product-index');
let smProductDes = document.querySelector('.sm-product-des');

let productImgContainer = document.querySelector('.product-img-container');
let productImg = document.querySelector('.product-img');
let backdropImg = document.querySelector('.backdrop-img');

let productDetail = document.querySelector('.product-detail');
let productName = document.querySelector('.product-name');
let productDes = document.querySelector('.product-des');

let currentProduct = 0;

nxtBtn.addEventListener('click', () => {

    if(currentProduct >= productData.length - 1){
        currentProduct = 0;
    } else{
        currentProduct++;
    }

    productIndex.innerHTML = productData[currentProduct].index;
    smProductDes.innerHTML = productData[currentProduct].des.slice(0, 80);

    smImgContainer.classList.add('slide');
    productImgContainer.classList.add('slide');
    backdropImg.classList.add('fade');
    productDetail.classList.add('fade');

    setTimeout(() => { // in the mid of animation, changing the contents
        productName.innerHTML = productData[currentProduct].name;
        productDes.innerHTML = productData[currentProduct].des;
        smImg.src = productImg.src = backdropImg.src = `img/${productData[currentProduct].image}`;
    }, 500);

    setTimeout(() => { // removing all animation classes
        smImgContainer.classList.remove('slide');
        productImgContainer.classList.remove('slide');
        backdropImg.classList.remove('fade');
        productDetail.classList.remove('fade');
    }, 1000);

})