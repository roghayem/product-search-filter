const clothes = [
    {name: "Black T-shirt" , price: 15 , image: "black t-shirt.png" , catagory: "men"},
    {name: "women's knit sweater" , price: 10 , image: "women's knit sweater.png" , catagory: "women"},
    {name: "Hoodi" , price: 12 , image: "Hoodi.png" , catagory: "men"},
    {name: "Cap" , price: 9 , image: "cap.png" , catagory: "accessories"}
]

const searchInput = document.querySelector("#searhcInput");
const filterBtn = document.querySelectorAll(".filter-btn");
const sort = document.querySelector("#sort");
const message = document.querySelector(".message");
const cards = document.querySelector(".cards");

function showProducts(productCards){

    cards.innerHTML = "";
    productCards.forEach(function(productCard){
        const card = document.createElement("div");
        card.classList.add("card");

        const imageProduct = document.createElement("img");
        imageProduct.classList.add("imageProduct");
        imageProduct.src =productCard.image;

        const productName = document.createElement("h3");
        productName.classList.add("productName");
        productName.textContent = productCard.name;

        const productPrice = document.createElement("h4");
        productPrice.classList.add("productPrice");
        productPrice.textContent ="$"+ productCard.price; 

        const purchesBtn = document.createElement("button");
        purchesBtn.classList.add("buy-btn");
        purchesBtn.textContent = "Add to Cart";
        
        card.append(imageProduct , productName, productPrice , purchesBtn);
        cards.append(card);
    })

    if(productCards.length === 0){
        message.textContent = "The product not founded";
    }else{
        message.textContent = "";
    }
}
showProducts(clothes)


let activeFilter = "all";
let deafultSort = "";


function filterProduct(){
    let result =clothes;
    
    if(activeFilter === "men"){
        result= result.filter(function(p){
           return p.catagory === activeFilter;
        })
    }else if(activeFilter === "women"){
        result= result.filter(function(p){
             return p.catagory === activeFilter;
        })
    }else if(activeFilter === "accessories"){
        result= result.filter(function(p){
           return p.catagory === activeFilter;
        })
    }

    let productSearch = searchInput.value.trim();

    if(productSearch){
        result =result.filter(function(p){
            return p.name.toLowerCase().includes(productSearch);
        })
    }

    if(sort.value === "low"){
        result.sort(function(a,b){
            return a.price - b.price
        });
    } if(sort.value === "high"){
        result.sort(function(a,b){
            return b.price - a.price
        })
    }
    showProducts(result)
}

filterBtn.forEach(function(button) {

    button.addEventListener("click", function() {

        // دریافت مقدار data-filter دکمه کلیک شده
        // اصلاح HTML: قبلاً data-fillter نوشته بودی
        activeFilter = button.dataset.filter;

        // اجرای دوباره فیلتر
        filterProduct();

    });

});
searchInput.addEventListener("input",()=>{
    filterProduct()
})
sort.addEventListener("change",()=>{
    filterProduct()
})