import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';
import { getLocator } from '../utils/locator-helper';
import { VIEW_CART_PAGE } from '../locators/locators';
import { LoginPage } from './LoginPage';

export class ViewCartPage extends BasePage {
    readonly proceedToCheckout: Locator;
    readonly registerLoginLink: Locator;
    readonly checkoutHeading: Locator;
    readonly messageCheckout: Locator;
    readonly continueOnCart: Locator;

    constructor(page) {
        super(page);
        this.proceedToCheckout = getLocator(page, VIEW_CART_PAGE.PROCEED_TO_CHECKOUT);
        this.registerLoginLink = getLocator(page, VIEW_CART_PAGE.REGISTER_LOGIN_LINK);
        this.checkoutHeading = getLocator(page, VIEW_CART_PAGE.CHECKOUT_HEADING);
        this.messageCheckout = getLocator(page, VIEW_CART_PAGE.MESSAGE_CHECKOUT);
        this.continueOnCart = getLocator(page, VIEW_CART_PAGE.CONTINUE_ON_CART);
    }

    async clickProceedToCheckout(): Promise<void> {
        await this.proceedToCheckout.click(); 
    }

    async clickRegisterLoginLink(): Promise<LoginPage> {
        await this.registerLoginLink.click();
        return new LoginPage(this.page);
    }

    async Logout(): Promise<LoginPage> {
    await this.navbar.clickLogoutLink();
    return new LoginPage(this.page);
  }
}