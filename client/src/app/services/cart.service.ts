import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartData = {
    products: [],
    total: 0,
  };

  cartDataObs$ = new BehaviorSubject(this.cartData);

  constructor() {
    this.cartDataObs$.next(this.cartData);
  }

  addProduct(params): void {
    const { id, price, quantity, image, title } = params;
    let product = { id, price, quantity, image, title };
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
    this.cartDataObs$.next({ ...this.cartData });
  }

  removeProduct(id: number): void {
    let updatedProducts = this.cartData.products.filter(
      (prod) => prod.id !== id
    );
    console.log(updatedProducts);
    this.cartData.products = updatedProducts;
    this.cartDataObs$.next({ ...this.cartData });
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
