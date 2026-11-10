import { expect } from '@playwright/test';
export class InventoryPage {
    
    constructor(page) {
        this.page = page;
        this.sortValues = {
            nameAsc: 'az',
            nameDesc: 'za',
            priceAsc: 'lohi',
            priceDesc: 'hilo',
        };

        this.shoppingCartIcon = page.locator('[data-test="shopping-cart-link"]');
        this.inventoryItem = page.locator('[data-test="inventory-item"]');
        this.inventoryItemDetails = page.locator('[data-test="inventory-item"]');
        this.filterDropdown = page.locator('[data-test="product_sort_container"]');

        this.addToCartSauceLabsBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.removeFromCartSauceLabsBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.titleSauceLabsBackpackLink = page.locator('[aria-label="View details for Sauce Labs Backpack"]').first();
        this.imageSauceLabsBackpackImage = page.locator('[data-test="inventory-item-sauce-labs-backpack-img"]');

        this.addToCartSauceLabsBikeLightButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.removeFromCartSauceLabsBikeLightButton = page.locator('[data-test="remove-sauce-labs-bike-light"]');

        this.addToCartProductDetailsButton = page.locator('[data-test="add-to-cart"]');
        this.removeFromCartProductDetailsButton = page.locator('[data-test="remove"]');
        this.backToProductsButton = page.locator('[data-test="back-to-products"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    }

    async addToCartSauceLabsBackpack() {
        await this.addToCartSauceLabsBackpackButton.click();
    }

    async removeFromCartSauceLabsBackpack() {
        await this.removeFromCartSauceLabsBackpackButton.click();
    }

    async addToCartSauceLabsBikeLight() {
        await this.addToCartSauceLabsBikeLightButton.click();
    }

    async removeFromCartSauceLabsBikeLight() {
        await this.removeFromCartSauceLabsBikeLightButton.click();
    }

    async titleSauceLabsBackpack() {
        await this.titleSauceLabsBackpackLink.click();
    }

    async imageSauceLabsBackpack() {
        await this.imageSauceLabsBackpackImage.click();
    }

    async addToCartProductDetails() {
        await this.addToCartProductDetailsButton.click();
    }

    async removeFromCartProductDetails() {
        await this.removeFromCartProductDetailsButton.click();
    }

    async backToProducts() {
        await this.backToProductsButton.click();
    }

    async filterOptions(option) {
        await this.filterDropdown.selectOption(option);
    }

    async shoppingCart() {
        await this.shoppingCartIcon.click();
    }

    get cartItems() {
        return this.page.locator('[data-test="inventory-item"]');
    }
    
    async expectItemInCart(name) {
        await expect(this.cartItems.filter({ hasText: name })).toBeVisible();
    }
}