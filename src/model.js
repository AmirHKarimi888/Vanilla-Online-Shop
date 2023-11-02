import { url } from "../api"

export const state = {
    products: [],
    product: {},
    carts: []
}

class Actions {

    async getProducts() {
        await fetch(`${url}products`)
        .then(res => res.json())
        .then(data => state.products = data);
    }
}

export const Action =  new Actions();