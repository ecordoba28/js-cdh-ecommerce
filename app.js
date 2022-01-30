

const productContainer = document.getElementById('productContainer');
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

        productContainer.appendChild(div)

        let addButton = document.getElementById(`${products.id}`)
        addButton.addEventListener('click', () => {
            addToCart();
        })
    });
}




function addToCart(id){
    let add = productStock.find(product => product.id == id)

    cart.push(add)

    let div = document.createElement('div')
    div.classList.add('productOnCart')
    div.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>`

}

