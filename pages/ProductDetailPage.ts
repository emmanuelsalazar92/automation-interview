import { BasePage } from "./BasePage";
import { Locator } from "@playwright/test";
import { getLocator } from "../utils/locator-helper";
import { PRODUCTS_DETAILS_PAGE } from "../locators/locators";
import { ViewCartPage } from "./ViewCartPage";

export class ProductDetailPage extends BasePage {
	readonly condition: Locator;
	readonly availability: Locator;
	readonly brand: Locator;
	readonly category: Locator;
	readonly quantity: Locator;
	readonly addToCart: Locator;
	readonly viewCartLink: Locator;

	constructor(page) {
		super(page);
		this.condition = getLocator(page, PRODUCTS_DETAILS_PAGE.CONDITION_NEW);
		this.availability = getLocator(page, PRODUCTS_DETAILS_PAGE.AVAILABILITY_STOCK);
		this.brand = getLocator(page, PRODUCTS_DETAILS_PAGE.BRAND_MADAME);
		this.category = getLocator(page, PRODUCTS_DETAILS_PAGE.CATEGORY);
		this.quantity = getLocator(page, PRODUCTS_DETAILS_PAGE.QUANTITY);
		this.addToCart = getLocator(page, PRODUCTS_DETAILS_PAGE.ADD_TO_CART);
		this.viewCartLink = getLocator(page, PRODUCTS_DETAILS_PAGE.VIEW_CART);
	}

	async typeQuantity(quantity: number): Promise<void> {
		await this.quantity.fill(String(quantity));
	}

	async addProductToCart(): Promise<void> {
		await this.addToCart.click();
	}

	async goToViewCart(): Promise<ViewCartPage> {
		await this.viewCartLink.click();
		return new ViewCartPage(this.page);
	}
}
