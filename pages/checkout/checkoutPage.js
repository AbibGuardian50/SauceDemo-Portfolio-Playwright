import { expect } from '@playwright/test';
export class CheckoutPage {
    constructor(page) {
        this.page = page;
    }
    
    
    
    async continueCheckout () {
        await this.page.locator('[data-test="continue"]').click();
    }
firstNameErrorMessage () {
    return this.page.locator('div').filter({ hasText: /^Error: First Name is required$/ }).nth(1);
   }

    lastNameErrorMessage () {
     return this.page.locator('div').filter({ hasText: /^Error: Last Name is required$/ }).nth(1);
   }
    postalCodeErrorMessage () {
     return this.page.locator('div').filter({ hasText: /^Error: Postal Code is required$/ }).nth(1);
   }

   async inputFirstName (firstName) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
   }

   async inputLastName (lastName) {
    await this.page.locator('[data-test="lastName"]').fill(lastName);
   }

   async inputPostalCode(postalCode) {
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
   }
   async cancel() {
    await this.page.locator('[data-test="cancel"]').click();
   }
    
}