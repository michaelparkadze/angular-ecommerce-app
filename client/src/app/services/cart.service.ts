import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartData = {
    products: [
      {
        id: undefined,
        price: 0,
        quantity: 0,
      },
    ],
    total: 0,
  };

  constructor() {}

  addProduct(id: number, price: number, quantity: number): void {
    let product = { id, price, quantity };
    if (!this.isProductInCart(id)) {
      this.cartData.products.push(product);
    } else {
      let updatedProducts = [...this.cartData.products];
      let productIndex = updatedProducts.findIndex((prod) => prod.id === id);
      let product = updatedProducts[productIndex];
      updatedProducts[productIndex] = {
        ...product,
        quantity: product.quantity + 1,
      };
      this.cartData.products = updatedProducts;
    }

    this.cartData.total = this.getCartTotal();
    console.log(this.cartData);
  }

  getCartTotal(): number {
    let totalSum = 0;
    this.cartData.products.forEach(
      (prod) => (totalSum += prod.price * prod.quantity)
    );

    return totalSum;
  }

  isProductInCart(id: number): boolean {
    return this.cartData.products.findIndex((prod) => prod.id === id) !== -1;
  }
}
