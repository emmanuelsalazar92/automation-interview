import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { ProductsPage } from '../pages/ProductsPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { LoginPage } from '../pages/LoginPage';
import { ViewCartPage } from '../pages/ViewCartPage';
import { SignupPage } from '../pages/SignupPage';
import { AccountCreatedPage } from '../pages/AccountCreatedPage';
import { getRandomQuantity, generateNameAndEmail, generateSignupDataForUSA } from '../utils/generate-data'

test.describe('Checkout Flow', () => {
  let mainPage: MainPage;
  let productsPage: ProductsPage;
  let productDetailPage: ProductDetailPage;
  let viewCartPage: ViewCartPage;
  let loginPage: LoginPage;
  let signupPage: SignupPage;
  let accountCreatedPage: AccountCreatedPage;

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
      viewCartPage = await productDetailPage.goToViewCart();
      await viewCartPage.clickProceedToCheckout();
    });

    await test.step('A Login/Register modal should appear', async () => {
      await expect(viewCartPage.registerLoginLink).toBeVisible();
      await expect(viewCartPage.checkoutHeading).toBeVisible();
      await expect(viewCartPage.messageCheckout).toBeVisible();
      await expect(viewCartPage.continueOnCart).toBeVisible();
    });

    await test.step('I am able to create a new user', async () => {
      loginPage = await viewCartPage.clickRegisterLoginLink();

      const { name, email } = generateNameAndEmail();
      await loginPage.typeName(name);
      await loginPage.typeEmail(email);

      signupPage = await loginPage.clickSignup();
      const signupData = generateSignupDataForUSA();
      await signupPage.typePassword(signupData.password);
      await signupPage.typeFirstName(signupData.firstName);
      await signupPage.typeLastName(signupData.lastName);
      await signupPage.typeAddress(signupData.address);
      await signupPage.selectCountry(signupData.country);
      await signupPage.typeState(signupData.state);
      await signupPage.typeCity(signupData.city);
      await signupPage.typeZipcode(signupData.zipcode);
      await signupPage.typeMobileNumber(signupData.mobileNumber);

      accountCreatedPage = await signupPage.clickCreateAccount();
      await expect(accountCreatedPage.accountCreatedMessage).toBeVisible();

    });

    await test.step('The Cart has the selected product', async () => {
      mainPage = await accountCreatedPage.clickContinue();

      viewCartPage = await mainPage.goToViewCart();
      await expect(viewCartPage.proceedToCheckout).toBeVisible();

      loginPage = await viewCartPage.Logout();
    });
  });
});


