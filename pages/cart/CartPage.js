export class CartPage {
    constructor(page) {
        this.page = page;
        this.shoppingCart = page.locator('[data-test="shopping-cart-link"]')
        this.cartItems = page.locator('[data-test="inventory-item"]')
        this.removeCartItem = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.continueShopping = page.locator('[data-test="continue-shopping"]')
        this.checkout = page.locator('[data-test="checkout"]')
    }
}