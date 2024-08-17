let listProducts = [];
let listProductsHTML = document.querySelector('.listProduct');

const addProductToHTML = () =>{
    listProductsHTML.innerHTML='';
    if(listProducts.length>0){
        console.log("hello");
        listProducts.forEach(product => {
            let newProduct= document.createElement('div');
            newProduct.classList.add('col');
            newProduct.dataset.id= product.id;
            newProduct.innerHTML=`
            <span class="badge text-bg-danger normalMenu">Bán chạy</span>
            <span class="badge text-bg-success normalMenu Left">Món mới</span>
            <div class="card Menu">
            <img class="${product.style}" src="static/${product.image}">
            <div class="card-body">
              <h6 class="card-title"><b id="Name">${product.name}</b></h6>
              <p class="card-describe">${product.describe}</p>
              <p class="prices"><b>${product.prices}.000đ</b></p>
              <a class="btn btn-outline-success order-btn">Đặt Hàng</a>
            </div>
          </div>
            `;
            listProductsHTML.appendChild(newProduct);
        })
    }
}
listProductsHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('order-btn')){
        let product_id = positionClick.parentElement.dataset.id;
        console.log(product_id);
    }
})


const initApp = () => {
    fetch('static/script/products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        addProductToHTML();
    })
}
initApp();