import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';
import { Page } from '@playwright/test';
import { ProductsPage } from './ProductsPage';

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
}