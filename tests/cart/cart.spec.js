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

test('TC_Checkout_001 - Verify user cant see any product when the cart is empty', async ({ page, cartPage }) => {
    await cartPage.shoppingCart();
    await expect(page).toHaveURL(/cart\.html/)
});

test('TC_Checkout_002 - Verify product is displayed when the cart contains a product', async ({ cartPage, inventoryPage }) => {
    await inventoryPage.addToCartSauceLabsBackpack();
    await cartPage.shoppingCart();
    await expect(cartPage.inventoryCartItems()).toBeVisible();
});
test('TC_Checkout_003 - Verify user can remove product from cart ', async ({ cartPage, inventoryPage }) => {
    await inventoryPage.addToCartSauceLabsBackpack();
    await cartPage.shoppingCart();
    await cartPage.removeFromCart();
});
test('TC_Checkout_004 - Verify user can navigate to the inventory by clicking continue shopping button', async ({ cartPage }) => {
    await cartPage.shoppingCart();
    await cartPage.continueShopping();
});
test('TC_Checkout_005 - Verify user can go to checkout page if the cart is empty', async ({ cartPage, page }) => {
 await cartPage.shoppingCart();
 await cartPage.checkout();
 await expect(page).toHaveURL(/checkout-step-one\.html/)
});