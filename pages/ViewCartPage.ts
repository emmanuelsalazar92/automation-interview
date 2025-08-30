import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';
import { getLocator } from '../utils/locator-helper';
import { PRODUCTS_PAGE } from '../locators/locators';

export class ViewCartPage extends BasePage {
  readonly thirdProduct: Locator;

  constructor(page) {
    super(page);
    this.thirdProduct = getLocator(page, PRODUCTS_PAGE.THIRD_VIEW_PRODUCT);
  }
    
  async openThirdProduct(): Promise<void> {
    await this.thirdProduct.click();
  }
}