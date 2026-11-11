import { test, expect } from '../../fixtures/fixtures';
import { loginData } from '../../test-data/login.data';
import { LoginPage } from '../../pages/login/LoginPage';
import { checkoutData } from '../../test-data/checkout.data';


let loginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.enterUsername(loginData.validUser.username);
    await loginPage.enterPassword(loginData.validUser.password);
    await loginPage.clickLogin();
});

test('TC_Checkout_001 - Verify user cannot proceed if first name is empty', async ({ checkoutPage, cartPage }) => {
    await cartPage.shoppingCart();
    await cartPage.checkout();
    await checkoutPage.inputLastName(checkoutData.validUser.lastName);
    await checkoutPage.inputPostalCode(checkoutData.validUser.postalCode);
    await checkoutPage.continueCheckout();
    await expect(checkoutPage.firstNameErrorMessage()).toBeVisible();
});

test('TC_Checkout_002 - Verify user cannot proceed if last name is empty', async ({ cartPage, checkoutPage }) => {
    await cartPage.shoppingCart();
    await cartPage.checkout();
    await checkoutPage.inputFirstName(checkoutData.validUser.firstName);
    await checkoutPage.inputPostalCode(checkoutData.validUser.postalCode);
    await checkoutPage.continueCheckout();
    await expect(checkoutPage.lastNameErrorMessage()).toBeVisible();
});

test('TC_Checkout_003 - Verify user cannot proceed if zip/postal code is empty', async ({ cartPage, checkoutPage }) => {
    await cartPage.shoppingCart();
    await cartPage.checkout();
    await checkoutPage.inputFirstName(checkoutData.validUser.firstName);
    await checkoutPage.inputLastName(checkoutData.validUser.lastName);
    await checkoutPage.continueCheckout();
    await expect(checkoutPage.postalCodeErrorMessage()).toBeVisible();
});

test('TC_Checkout_004 - Verify user cannot proceed if all required fields are empty', async ({ cartPage, checkoutPage }) => {
    await cartPage.shoppingCart();
    await cartPage.checkout();
    await checkoutPage.continueCheckout();
    await expect(checkoutPage.firstNameErrorMessage()).toBeVisible();
});

test('TC_Checkout_005 - Verify user can proceed if all required fields are filled', async ({ cartPage, checkoutPage, page }) => {
    await cartPage.shoppingCart();
    await cartPage.checkout();
    await checkoutPage.inputFirstName(checkoutData.validUser.firstName);
    await checkoutPage.inputLastName(checkoutData.validUser.lastName);
    await checkoutPage.inputPostalCode(checkoutData.validUser.postalCode);
    await checkoutPage.continueCheckout();
    await expect(page).toHaveURL(/checkout-step-two\.html/)   
});

test('TC_Checkout_006 - Verify user can navigate to cart by clicking cancel button in checkout', async ({ cartPage, checkoutPage, page }) => {
    await cartPage.shoppingCart();
    await cartPage.checkout();
    await checkoutPage.cancel(); 
    await expect(page).toHaveURL(/cart\.html/)   
});