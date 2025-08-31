
export const NAVIGATION_BAR = {
	PRODUCTS: { type: "role-link", value: ' Products' },
	CART: { type: "role-link", value: ' Cart' },
  SIGNUP_LOGIN: { type: "role-link", value: ' Signup / Login' },
  LOGOUT: { type: "role-link", value: ' Logout' },
} as const;

export const PRODUCTS_PAGE = {
	THIRD_VIEW_PRODUCT: { type: "css", value: "div:nth-child(5) > .product-image-wrapper > .choose > .nav > li > a"},
} as const;

export const PRODUCTS_DETAILS_PAGE = {
	CONDITION_NEW: { type: "text", value: "Condition: New" },
	AVAILABILITY_STOCK: { type: "text", value: "Availability: In Stock" },
	BRAND_MADAME: { type: "text", value: "Brand: Madame" },
	CATEGORY: { type: "text", value: "Category: Women > Dress" },
	QUANTITY: { type: "css", value: "#quantity" },
	ADD_TO_CART: { type: "role-button", value: " Add to cart" },
	VIEW_CART: { type: "role-link", value: "View Cart" },
} as const;

export const VIEW_CART_PAGE = {
  PROCEED_TO_CHECKOUT: { type: "text", value: "Proceed To Checkout" },
  REGISTER_LOGIN_LINK: { type: "role-link", value: "Register / Login" },
  CHECKOUT_HEADING: { type: "role-heading", value: "Checkout" },
  MESSAGE_CHECKOUT: { type: "text", value: "Register / Login account to proceed on checkout." },
  CONTINUE_ON_CART: { type: "role-button", value: "Continue On Cart" },
} as const;

export const LOGIN_PAGE = {
  NAME_FIELD: { type: "role-textbox", value: "Name" },
  EMAIL_FIELD: { type: 'css', value: 'form:has-text("Signup") >> input[placeholder="Email Address"]' },
  SIGNUP_BUTTON: { type: "role-button", value: "Signup" },
} as const;

export const SIGNUP_PAGE = {
  PASSWORD_FIELD: { type: "role-textbox", value: "Password *" },
  FIRST_NAME_FIELD: { type: "role-textbox", value: "First name *" },
  LAST_NAME_FIELD: { type: "role-textbox", value: "Last name *" },
  ADDRESS_FIELD: { type: "role-textbox", value: "Address * (Street address, P." },
  STATE_FIELD: { type: "role-textbox", value: "State *" },
  CITY_FIELD: { type: "role-textbox", value: "City * Zipcode *" },
  ZIPCODE_FIELD: { type: "css", value: '#zipcode' },
  MOBILE_NUMBER_FIELD: { type: "role-textbox", value: "Mobile Number *" },
  COUNTRY_FIELD: { type: "label", value: "Country *" },
  CREATE_ACCOUNT_BUTTON: { type: "role-button", value: "Create Account" },
} as const;

export const ACCOUNT_CREATED_PAGE = {
  ACCOUNT_CREATED_MESSAGE: { type: "text", value: "Account Created!" },
  CONTINUE_BUTTON: { type: "role-link", value: "Continue" },
} as const;
