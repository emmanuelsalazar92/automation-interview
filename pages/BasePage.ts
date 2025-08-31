import { Page } from '@playwright/test';
import { Navigation } from './Navigation';

export abstract class BasePage {
  readonly page: Page;
  readonly navbar: Navigation;

  constructor(page: Page) {
    this.page = page;
    this.navbar = new Navigation(page);
  }
}