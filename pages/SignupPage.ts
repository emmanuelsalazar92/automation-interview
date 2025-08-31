import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';
import { getLocator } from '../utils/locator-helper';
import { SIGNUP_PAGE } from '../locators/locators';
import { AccountCreatedPage } from './AccountCreatedPage';

export class SignupPage extends BasePage {
    readonly passwordField: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly addressField: Locator;
    readonly stateField: Locator;
    readonly cityField: Locator;
    readonly zipcodeField: Locator;
    readonly mobileNumberField: Locator;
    readonly countryField: Locator;
    readonly createAccountButton: Locator;  

  constructor(page) {
    super(page);
    this.passwordField = getLocator(page, SIGNUP_PAGE.PASSWORD_FIELD);
    this.firstNameField = getLocator(page, SIGNUP_PAGE.FIRST_NAME_FIELD);
    this.lastNameField = getLocator(page, SIGNUP_PAGE.LAST_NAME_FIELD);
    this.addressField = getLocator(page, SIGNUP_PAGE.ADDRESS_FIELD);
    this.stateField = getLocator(page, SIGNUP_PAGE.STATE_FIELD);
    this.cityField = getLocator(page, SIGNUP_PAGE.CITY_FIELD);
    this.zipcodeField = getLocator(page, SIGNUP_PAGE.ZIPCODE_FIELD);
    this.mobileNumberField = getLocator(page, SIGNUP_PAGE.MOBILE_NUMBER_FIELD);
    this.countryField = getLocator(page, SIGNUP_PAGE.COUNTRY_FIELD);
    this.createAccountButton = getLocator(page, SIGNUP_PAGE.CREATE_ACCOUNT_BUTTON);
  }

    async typePassword(password: string): Promise<void> {
        await this.passwordField.fill(password);
    }
    
    async typeFirstName(firstName: string): Promise<void> {
        await this.firstNameField.fill(firstName);
    }

    async typeLastName(lastName: string): Promise<void> {
        await this.lastNameField.fill(lastName);
    }

    async typeAddress(address: string): Promise<void> {
        await this.addressField.fill(address);
    }

    async typeState(state: string): Promise<void> {
        await this.stateField.fill(state);
    }

    async typeCity(city: string): Promise<void> {
        await this.cityField.fill(city);
    }

    async typeZipcode(zipcode: string): Promise<void> {
        await this.zipcodeField.fill(zipcode);
    }

    async typeMobileNumber(mobileNumber: string): Promise<void> {
        await this.mobileNumberField.fill(mobileNumber);
    }

    async selectCountry(country: string): Promise<void> {
        await this.countryField.selectOption(country);
    }

    async clickCreateAccount(): Promise<AccountCreatedPage> {
        await this.createAccountButton.click();
        return new AccountCreatedPage(this.page);
    }
}