import ProductList from './ProductList.mjs';
import DataSource from './ProductData.mjs'; // Adjusted to import from ProductData.mjs

const dataSource = new DataSource('tents'); // Replace 'tents' with your category
const listElement = document.querySelector('.product-list');

const productList = new ProductList('tents', dataSource, listElement);
productList.init();