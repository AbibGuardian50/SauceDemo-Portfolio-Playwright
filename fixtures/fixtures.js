// fixtures/fixtures.js
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login/LoginPage';
import { InventoryPage } from '../pages/inventory/InventoryPage';
import { CheckoutPage } from '../pages/checkout/checkoutPage';
import { CartPage } from '../pages/cart/CartPage';

export const test = base.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
    cartPage: async ({ page }, use) => {   // <- huruf kecil
        await use(new CartPage(page));
    },
});

export { expect } from '@playwright/test';