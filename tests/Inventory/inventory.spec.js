import { test, expect } from '@playwright/test';

test('TC_Inventory_001 - Verify user can add a product to the cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
});

test('TC_Inventory_002 - Verify user can remove a product from the cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
});

test('TC_Inventory_003 - Verify user can navigate to the product details page by clicking the product title', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await inventoryPage.sortBy(SORT_OPTIONS.priceAsc);
});