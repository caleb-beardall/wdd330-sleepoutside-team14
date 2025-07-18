// Template function for a product card
function productCardTemplate(product) {
    const price = typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : 'Price not available';
    const image = product.image ? product.image : './images/default.jpg'; // Use a default image if missing
    return `<li class="product-card">
    <a href="product_pages/?product=${product.id}">
      <img src="${image}" alt="Image of ${product.name}">
      <h3 class="card__brand">${product.brand}</h3>
      <h2 class="card__name">${product.name}</h2>
      <p class="product-card__price">${price}</p>
    </a>
  </li>`;
}

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const list = await this.dataSource.getData();
        this.renderList(list);
    }

    renderList(list) {
        // Use the productCardTemplate function to generate HTML for each product
        this.listElement.innerHTML = list.map(productCardTemplate).join('');
    }
}