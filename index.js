const table_body = document.querySelector('.table_body');

//get data from api
const getResponse = async () => {
    const response = await fetch('https://dummyjson.com/products');
    let content = await response.json();
    return content.products;
}

//fill table with data
const fillTable = (products) => {
    products.forEach(product => {
        table_body.innerHTML += `<div class="table_body_td"   
                      product_id = "${product.id}"                    
                     <p>${product.brand}</p>
                     </div>`

    })
}

//fill pop-up panel
const fillPanel = (table_p, products) => {
    table_p.innerHTML = `<div class="table_p_panel">
                         <div class="table_p_panel_title">
                                 <p>${products.title}</p>                                 
                             </div>
                             <p>${products.description}</p>
                             <p>Discount: ${products.discountPercentage}%</p>
                             <p>Price: ${products.price}$</p>
                             <img src = "${products.thumbnail}" >
                         </div>`

}

//show pop-up panel
const showPanel = (products) => {
    table_body.addEventListener('mousemove', evt => {
        if (evt.target.className === 'table_body_td' ) {
            let product_id = evt.target.getAttribute('product_id')
            product_id = parseInt(product_id)
            const product = products.find(item => item.id === product_id)
            fillPanel(evt.target, product);

        }
    })
}

getResponse().then(products => {
    fillTable(products)
    showPanel(products)
});




