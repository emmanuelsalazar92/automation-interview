import { test } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test.describe('Login Functionality', () => {
  let mainPage: MainPage;

    test('TC-001 | Checkout Flow - Add a Product and Proceed to Register', async ({page}) => {
    mainPage = new MainPage(page);

    await test.step('I am on the Products page', async () => {
      await mainPage.goto('https://automationexercise.com/');
      await mainPage.navbar.clickProductsLink();
    });
    await test.step('I select the third product', async () => {

    });
    await test.step('I enter a random quantity between 1 and 20', async () => {

    });
    await test.step('I add the product to the cart', async () => {

    });
    await test.step('I proceed to checkout', async () => {

    });
    await test.step('A Login/Register modal should appear', async () => {

    });
    await test.step('I am able to create a new user', async () => {

    });

  });
});
