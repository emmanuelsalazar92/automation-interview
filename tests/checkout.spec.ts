import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { getRandomQuantity} from '../utils/generate-data'

test.describe('Login Functionality', () => {
  let mainPage: MainPage;
  let productsPage: ProductsPage;
  let productDetailPage: ProductDetailPage;

    test('TC-001 | Checkout Flow - Add a Product and Proceed to Register', async ({page}) => {
    mainPage = new MainPage(page);

    await test.step('I am on the Products page', async () => {
      await mainPage.goto('https://automationexercise.com/');
      productsPage = await mainPage.goToProductsPage();
    });
    await test.step('I select the third product', async () => {
      productDetailPage = await productsPage.openThirdProduct();
      await expect(productDetailPage.availability).toBeVisible();
      await expect(productDetailPage.condition).toBeVisible();
      await expect(productDetailPage.brand).toBeVisible();
      await expect(productDetailPage.category).toBeVisible();
      await expect(productDetailPage.quantity).toBeVisible();
    });
    await test.step('I enter a random quantity between 1 and 20', async () => {
      await productDetailPage.typeQuantity(getRandomQuantity());
    });
    await test.step('I add the product to the cart', async () => {
      await productDetailPage.addProductToCart();
      await expect(productDetailPage.viewCartLink).toBeVisible();
    });
    await test.step('I proceed to checkout', async () => {

    });
    await test.step('A Login/Register modal should appear', async () => {

    });
    await test.step('I am able to create a new user', async () => {

    });

  });
});


