

const productContainer = document.getElementById('productContainer');
const modalCart = document.getElementById('modal-body')
const cart = [];



showProducts(productStock);

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
                <a id= "${products.id}" class="btn btn-primary">Añadir al carrito</a>
            </div>
        </div>
        `

        modalCart.appendChild(div)

        let addButton = document.getElementById(`${products.id}`)
        addButton.addEventListener('click', () => {
            addToCart(products.id);
        })
    });
}




function addToCart(id){
    let add = productStock.find(product => product.id == id)
    cart.push(add)

    let div = document.createElement('div')
    div.classList.add('productOnCart')
    div.innerHTML = `
                      <p>${add.name}</p>
                      <p>$${add.price}</p>
                      <button>X</button>
    `
    modalCart.appendChild(div)
}

