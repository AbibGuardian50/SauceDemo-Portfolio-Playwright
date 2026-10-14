export class InventoryPage {
    constructor(page) {
        this.filterOptions = {
            nameAsc: 'az',
            nameDesc: 'za',
            priceAsc: 'lohi',
            priceDesc: 'hilo',
        }
        this.shoppingCart = page.locator('[data-test="shopping-cart-link"]')
        this.addToCartSauceLabsBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.removeFromCartSauceLabsBackpack = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.addToCartSauceLabsBikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.removeFromCartSauceLabsBikeLight = page.locator('[data-test="remove-sauce-labs-bike-light"]')
        this.titleSauceLabsBackpack = page.locator('[aria-label="View details for Sauce Labs Backpack"]')
        this.imageSauceLabsBackpack = page.locator('[data-test="inventory-item-sauce-labs-backpack-img"]')
        this.addToCartProductDetails = locator('[data-test="add-to-cart"]')
        this.removeFromCartProductDetails = locator('[data-test="remove"]')
        this.backToProducts = locator('[data-test="back-to-products"]')
        this.filterOptions = locator('[data-test="product_sort_container"]')
    }
    async sortBy(option) {
        await this.filterOptions.selectOption(option);
      }
}