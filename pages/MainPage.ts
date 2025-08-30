import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';

export class MainPage extends BasePage {
  readonly heroTitle: Locator;

  constructor(page) {
    super(page);
  }
    
  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }
}