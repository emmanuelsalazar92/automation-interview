import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';
import { Page } from '@playwright/test';
import { ProductsPage } from './ProductsPage';
import { ViewCartPage } from './ViewCartPage';

export class MainPage extends BasePage {

  constructor(page) {
    super(page);
  }
    
  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async goToProductsPage(): Promise<ProductsPage> {
    await this.navbar.clickProductsLink();
    return new ProductsPage(this.page);  
  }

  async goToViewCart(): Promise<ViewCartPage> {
    await this.navbar.clickCartLink();
    return new ViewCartPage(this.page);
  }
}