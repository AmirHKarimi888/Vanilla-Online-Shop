import './src/style/style.css';
import './src/views/template';
import Header from './src/views/Header';
import Products from './src/views/Products';
import { Action, state } from './src/model';

Header.render();

const getProducts = async () => {
  Products.renderProductsSkeleton();
  await Action.getProducts()
  .then(() => {
    Products.render(state.products);
  })
}

const init = () => {
  ["load", "hashchange"].map(e => {
    window.addEventListener(e, getProducts);
  })
}

init();