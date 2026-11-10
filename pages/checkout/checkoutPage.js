import { expect } from '@playwright/test';
export class CheckoutPage {
    constructor(page) {
        this.page = page;
    }

    async shoppingCart() {
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }
    async removeFromCart() {
        await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    }
    async continueShopping() {
        await this.page.locator('[data-test="continue-shopping"]').click();
    }

    async checkout() {
        await this.page.locator('[data-test="checkout"]').click();
    }

    async inventoryCartItems() {
        return this.page.locator('[data-test="inventory-item"]');
    }
}