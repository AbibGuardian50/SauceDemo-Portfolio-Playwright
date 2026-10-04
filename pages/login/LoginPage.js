
    export class LoginPage {
        constructor(page) {
            this.page = page;

            this.usernameInput = page.locator('[data-test="username"]');
            this.passwordInput = page.locator('[data-test="password"]');
            this.loginButton = page.locator('[data-test="login-button"]');
        }

        async enterUsername(username) {
            await this.usernameInput.fill(username);
        }

        async enterPassword(password) {
            await this.passwordInput.fill(password);
        }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }
}

module.exports = { LoginPage };