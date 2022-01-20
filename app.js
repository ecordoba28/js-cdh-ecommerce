

const productContainer = document.getElementById('productContainer');





function showProducts(array){
    productContainer.innerHTML = ''

    array.forEach(products => {
        let div = document.createElement('div')
        div.classList.add('product')
        div.innerHTML += `
        <div class="card container" style="width: 18rem;">
            <img src="${products.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${products.name}</h5>
                <p class="card-text">${products.desc}</p>
                <p class="card-text">Talle: ${products.size}</p>
                <p class="card-text">$${products.price}</p>
                <a href="#" class="btn btn-primary">Añadir al carrito</a>
            </div>
        </div>
        `

        productContainer.appendChild(div)
    });
}


showProducts(productStock);