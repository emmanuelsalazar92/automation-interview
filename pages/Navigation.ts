import { Page, Locator } from '@playwright/test';
import { NAVIGATION_BAR } from '../locators/locators';
import { getLocator } from '../utils/locator-helper';
import { ProductsPage } from './ProductsPage';

export class Navigation {
  readonly page: Page;
  readonly products: Locator;
  readonly cart: Locator;
  readonly signupLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = getLocator(page, NAVIGATION_BAR.PRODUCTS);
    this.cart = getLocator(page, NAVIGATION_BAR.CART);
    this.signupLogin = getLocator(page, NAVIGATION_BAR.SIGNUP_LOGIN);
  }

  async clickProductsLink(): Promise<void> {
    await this.products.click();
  }

  async clickCartLink(): Promise<void> {
    await this.cart.click();
  }

  async clickSignupLoginLink(): Promise<void> {
    await this.signupLogin.click();
  }
}