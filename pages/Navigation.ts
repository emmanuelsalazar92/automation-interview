import { Page, Locator } from '@playwright/test';
import { NAVIGATION_BAR } from '../locators/locators';
import { getLocator } from '../utils/locator-helper';
import { ProductsPage } from './ProductsPage';

export class Navigation {
  readonly page: Page;
  readonly products: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = getLocator(page, NAVIGATION_BAR.PRODUCTS);
  }

  async clickProductsLink(): Promise<void> {
    await this.products.click();
  }
}