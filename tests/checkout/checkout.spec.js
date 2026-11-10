import { test, expect } from '../../fixtures/fixtures';
import { loginData } from '../../test-data/login.data';
import { checkoutPage } from '../../pages/checkout/checkoutPage';
import { LoginPage } from '../../pages/login/LoginPage';

let checkoutPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.enterUsername(loginData.validUser.username);
    await loginPage.enterPassword(loginData.validUser.password);
    await loginPage.clickLogin();
});

test('TC_Checkout_001 - Verify user cant see any product when the cart is empty', async ({ checkoutPage }) => {

});

test('TC_Checkout_002 - Verify product is displayed when the cart contains a product', async ({ checkoutPage }) => {

});
test('TC_Checkout_003 - Verify user can remove product from cart ', async ({ checkoutPage }) => {

});
test('TC_Checkout_004 - Verify user can navigate to the inventory by clicking continue shopping button', async ({ checkoutPage }) => {

});
test('TC_Checkout_005 - Verify user cant checkout if the cart is empty', async ({ checkoutPage }) => {

});