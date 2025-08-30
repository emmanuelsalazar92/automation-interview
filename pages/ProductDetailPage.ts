import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';
import { getLocator } from '../utils/locator-helper';
import { PRODUCTS_DETAILS_PAGE, PRODUCTS_PAGE } from '../locators/locators';

export class ProductDetailPage extends BasePage {
    readonly condition: Locator;
    readonly availability: Locator;
    readonly brand: Locator;
    readonly category: Locator;
    readonly quantity: Locator;

  constructor(page) {
    super(page);
    this.condition = getLocator(page, PRODUCTS_DETAILS_PAGE.CONDITION_NEW);
    this.availability = getLocator(page, PRODUCTS_DETAILS_PAGE.AVAILABILITY_STOCK);
    this.brand = getLocator(page, PRODUCTS_DETAILS_PAGE.BRAND_MADAME);
    this.category = getLocator(page, PRODUCTS_DETAILS_PAGE.CATEGORY);
    this.quantity = getLocator(page, PRODUCTS_DETAILS_PAGE.QUANTITY);
  }
    
  /*async openThirdProduct(): Promise<void> {
    await this.thirdProduct.click();
  }*/
}