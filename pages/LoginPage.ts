import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';
import { getLocator } from '../utils/locator-helper';
import { LOGIN_PAGE } from '../locators/locators';
import { SignupPage } from '../pages/SignupPage';

export class LoginPage extends BasePage {
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly signupButton: Locator;

  constructor(page) {
    super(page);
    this.nameField = getLocator(page, LOGIN_PAGE.NAME_FIELD);
    this.emailField = getLocator(page, LOGIN_PAGE.EMAIL_FIELD);
    this.signupButton = getLocator(page, LOGIN_PAGE.SIGNUP_BUTTON);
  }

  async typeName(name: string): Promise<void> {
    await this.nameField.fill(name);
  }

  async typeEmail(email: string): Promise<void> {
    await this.emailField.fill(email);
  }

  async clickSignup(): Promise<SignupPage> {
      await this.signupButton.click();
      return new SignupPage(this.page);
  }
}