import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';
import { getLocator } from '../utils/locator-helper';
import { ACCOUNT_CREATED_PAGE } from '../locators/locators';
import { MainPage } from './MainPage';

export class AccountCreatedPage extends BasePage {
    readonly accountCreatedMessage: Locator;
    readonly continueButton: Locator;

    constructor(page) {
        super(page);
        this.accountCreatedMessage = getLocator(page, ACCOUNT_CREATED_PAGE.ACCOUNT_CREATED_MESSAGE);
        this.continueButton = getLocator(page, ACCOUNT_CREATED_PAGE.CONTINUE_BUTTON);
    }

    async clickContinue(): Promise<MainPage> {
        await this.continueButton.click();
        return new MainPage(this.page);
    }
}