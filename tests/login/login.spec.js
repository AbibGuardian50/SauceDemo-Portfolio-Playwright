import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login/LoginPage';
import { loginData } from '../../test-data/login.data';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.route(/fonts\.(googleapis|gstatic)\.com/, route => route.abort());
});

test('TC_LOGIN_001', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('/');
    await loginPage.enterUsername(loginData.validUser.username);
    await loginPage.enterPassword(loginData.validUser.password);
    await loginPage.clickLogin();

    await expect(page).toHaveURL(/inventory\.html/);
});

test('TC_LOGIN_002', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.enterUsername(loginData.invalidPassword.username);
    await loginPage.enterPassword(loginData.invalidPassword.password);
    await loginPage.clickLogin();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});

test('TC_LOGIN_003', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.enterUsername(loginData.invalidUsername.username);
    await loginPage.enterPassword(loginData.invalidUsername.password);
    await loginPage.clickLogin();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});

test('TC_LOGIN_004', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.enterUsername(loginData.invalidCredentials.username);
    await loginPage.enterPassword(loginData.invalidCredentials.password);
    await loginPage.clickLogin();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});

test('TC_LOGIN_005', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.enterUsername(loginData.usernameEmpty.username);
    await loginPage.enterPassword(loginData.usernameEmpty.password);
    await loginPage.clickLogin();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
});

test('TC_LOGIN_006', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.enterUsername(loginData.passwordEmpty.username);
    await loginPage.enterPassword(loginData.passwordEmpty.password);
    await loginPage.clickLogin();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Password is required');
});

test('TC_LOGIN_007', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.clickLogin();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
});

test('TC_LOGIN_008', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.enterUsername(loginData.lockedOutUser.username);
    await loginPage.enterPassword(loginData.lockedOutUser.password);
    await loginPage.clickLogin();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
});