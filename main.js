import './src/style/style.css';
import './src/views/template';
import Header from './src/views/Header';
import Products from './src/views/Products';
import { Action, state } from './src/model';

Header.render(state.cart);

const getProducts = async () => {
  Products.renderProductsSkeleton();
  await Action.getProducts()
  .then(() => {
    Products.render(state.products);
    Products.handleProductsEvents(addToCart);
  })
}

const addToCart = async (id) => {
  await Action.getProduct(id)
  .then(() => {
    state.product = {
      ...state.product,
      count: 1
    }
  })
  .then(() => {
    let repeatitive = state.cart.filter(product => {
      if(product.title == state.product.title) {
        return product;
      }
    })[0]

    if(repeatitive?.title == state.product.title) {
      state.cart.filter(product => {
        if(product.title == state.product.title) {
          product.count = product.count + 1;
        }
      })

    } else {
      state.cart.push(state.product);
    }
    
  })
  .then(() => {
    Header.showAddModal();
  })
  .then(() => {
    console.log(state.cart);
  })
}

const init = () => {
  ["load", "hashchange"].map(e => {
    window.addEventListener(e, getProducts);
  })
}

init();