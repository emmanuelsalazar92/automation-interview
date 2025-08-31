
export const NAVIGATION_BAR = {
	PRODUCTS: { type: "role-link", value: " Products" },
	CART: { type: "role-link", value: " Cart" },
	SIGNUP_LOGIN: { type: "role-link", value: " Signup / Login" },
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
	//THIRD_VIEW_PRODUCT: { type: 'css', value: 'div:nth-child(5) > .product-image-wrapper > .choose > .nav > li > a' },
} as const;

export const SIGNUP_PAGE = {
	//THIRD_VIEW_PRODUCT: { type: 'css', value: 'div:nth-child(5) > .product-image-wrapper > .choose > .nav > li > a' },
} as const;
