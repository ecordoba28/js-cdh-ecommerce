

const productContainer = document.getElementById('productContainer');
const modalCart = document.getElementById('modal-body')
let cart = [];

const cartCounter = document.getElementById('cartCounter')
const total = document.getElementById('totalPrice')

const sizeSelect = document.getElementById('sizeSelect')

sizeSelect.addEventListener('change', ()=> {
    console.log(sizeSelect.value);
    if(sizeSelect.value == 'all'){
        showProducts(productStock)
    } else {
        showProducts(productStock.filter(element => element.size == sizeSelect.value))
    }
})



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
            addToCart(products.id);
            Toastify({
                text: "🤑Producto Agregado",
                className: "info",
                style: {
                  background: "green",
                }
              }).showToast();
        })
    });
}




function addToCart(id){
    let verify = cart.find(element => element.id == id)
    if (verify){
        verify.cant = verify.cant + 1
        cartUpdate();
    }else{
        let add = productStock.find(product => product.id == id)
        cart.push(add)
    
        cartUpdate();
    
        let div = document.createElement('div')
        div.classList.add('productOnCart')
        div.innerHTML = `
                          <h4>${add.name}</h4>
                          <p>$${add.price}</p>
                          <button class="delete-button" id='delete${add.id}'>quitar</button><hr>
                          
        `
        modalCart.appendChild(div)
    
        let deleteBtn = document.getElementById(`delete${add.id}`)
        deleteBtn.addEventListener('click', () =>{
            deleteBtn.parentElement.remove()
            cart = cart.filter(element => element.id != add.id)
            cartUpdate();
            Toastify({
                text: "💀Producto Eliminado",
                className: "info",
                style: {
                background: "red",
                }
            }).showToast();
        } )
        
    }

    
}



function cartUpdate(){
    cartCounter.innerText = cart.reduce((acc, el) => acc + el.cant, 0 )
    total.innerText = cart.reduce((acc, el) => acc + (el.price * el.cant), 0)
}

showProducts(productStock);