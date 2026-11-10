import { test, expect } from '../../fixtures/fixtures';
    import { loginData } from '../../test-data/login.data';
    import { LoginPage } from '../../pages/login/LoginPage';

    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto('https://www.saucedemo.com/');
        await loginPage.enterUsername(loginData.validUser.username);
        await loginPage.enterPassword(loginData.validUser.password);
        await loginPage.clickLogin();
    });

    test('TC_Inventory_001 - Verify user can add a product to the cart', async ({ inventoryPage }) => {
        
        await inventoryPage.addToCartSauceLabsBackpack();
        await inventoryPage.shoppingCart();
        await expect(inventoryPage.inventoryItem).toBeVisible();
    });

test('TC_Inventory_002 - Verify user can remove a product from the cart', async ({ inventoryPage }) => {
    
    await inventoryPage.addToCartSauceLabsBackpack();
    await inventoryPage.shoppingCart();
    await inventoryPage.removeFromCartSauceLabsBackpack();
    await expect(inventoryPage.inventoryItem).not.toBeVisible();
});

test('TC_Inventory_003 - Verify user can navigate to the product details page by clicking the product title', async ({ inventoryPage }) => {
    
    await inventoryPage.titleSauceLabsBackpack();
    await expect(inventoryPage.inventoryItemDetails).toBeVisible();
});

test('TC_Inventory_004 - Verify user can navigate to the product details page by clicking the product image', async ({ inventoryPage }) => {
    
await inventoryPage.imageSauceLabsBackpack();
await expect(inventoryPage.inventoryItemDetails).toBeVisible();
});

test('TC_Inventory_005 - Verify user can add multiple products to the cart', async ({ inventoryPage }) => {
    await inventoryPage.addToCartSauceLabsBackpack();
    await inventoryPage.addToCartSauceLabsBikeLight();
    await inventoryPage.shoppingCart();

    await inventoryPage.expectItemInCart('Sauce Labs Backpack');
    await inventoryPage.expectItemInCart('Sauce Labs Bike Light');

});

test('TC_Inventory_006 - Verify user can remove one product from the cart when multiple products are selected ', async ({ inventoryPage }) => {
    await inventoryPage.addToCartSauceLabsBackpack();
    await inventoryPage.addToCartSauceLabsBikeLight();
    await inventoryPage.shoppingCart();
    await inventoryPage.removeFromCartSauceLabsBackpack();
    await expect(inventoryPage.inventoryItem).toBeVisible();

});

test('TC_Inventory_007 - Verify user can add a product to the cart from the product details page ', async ({ inventoryPage }) => {
    await inventoryPage.titleSauceLabsBackpack();
    await inventoryPage.addToCartProductDetails();
    await inventoryPage.shoppingCart();
    await expect(inventoryPage.inventoryItem).toBeVisible();

});

test('TC_Inventory_008 - Verify user can remove a product from the cart from the product details page ', async ({ inventoryPage }) => {
    await inventoryPage.titleSauceLabsBackpack();
    await inventoryPage.addToCartProductDetails();
    await expect(inventoryPage.cartBadge).toBeVisible();
    await inventoryPage.removeFromCartProductDetails();
    await expect(inventoryPage.cartBadge).not.toBeVisible();

});

test('TC_Inventory_009 - Verify user can add a product from the inventory page and remove it from the product details page ', async ({ inventoryPage }) => {
     

});

test('TC_Inventory_010 - Verify user can sort products by name from A to Z ', async ({ inventoryPage }) => {
    

});

test('TC_Inventory_011 - Verify user can sort products by name from Z to A ', async ({ inventoryPage }) => {
    

});

test('TC_Inventory_012 - Verify user can sort products by price from low to high ', async ({ inventoryPage }) => {
    

});

test('TC_Inventory_013 - Verify user can sort products by price from high to low', async ({ inventoryPage }) => {
    

});