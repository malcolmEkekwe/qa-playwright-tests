import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly postalInput: Locator;
  readonly countrySelect: Locator;
  readonly continueButton: Locator;
  readonly cardNumberInput: Locator;
  readonly expiryInput: Locator;
  readonly cvcInput: Locator;
  readonly placeOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByLabel('Name');
    this.addressInput = page.getByLabel('Address');
    this.cityInput = page.getByLabel('City');
    this.postalInput = page.getByLabel('Postal Code');
    this.countrySelect = page.getByLabel('Country');
    this.continueButton = page.getByRole('button', { name: /continue to payment/i });
    this.cardNumberInput = page.getByLabel('Card Number');
    this.expiryInput = page.getByLabel('Expiry Date');
    this.cvcInput = page.getByLabel('CVC');
    this.placeOrderButton = page.getByRole('button', { name: /place order/i });
  }

  async fillShippingInfo(name: string, address: string, city: string, postal: string, country: string) {
    await this.nameInput.fill(name);
    await this.addressInput.fill(address);
    await this.cityInput.fill(city);
    await this.postalInput.fill(postal);
    await this.countrySelect.selectOption(country);
  }

  async continueToPayment() {
    await this.continueButton.click();
  }

  async fillPaymentInfo(card: string, expiry: string, cvc: string) {
    await this.cardNumberInput.fill(card);
    await this.expiryInput.fill(expiry);
    await this.cvcInput.fill(cvc);
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }
}