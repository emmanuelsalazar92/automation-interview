// Navigation Bar
export const NAVIGATION_BAR = {
  PRODUCTS: { type: 'role-link', value: ' Products' },
  CART: { type: 'role-link', value: ' Cart' },
  SIGNUP_LOGIN: { type: 'role-link', value: ' Signup / Login' },
} as const;

export const PRODUCTS_PAGE = {
  THIRD_VIEW_PRODUCT: { type: 'css', value: 'div:nth-child(5) > .product-image-wrapper > .choose > .nav > li > a' },
} as const;

export const PRODUCTS_DETAILS_PAGE = {
  CONDITION_NEW: { type: 'text', value: 'Condition: New' },
  AVAILABILITY_STOCK: { type: 'text', value: 'Availability: In Stock' },
  BRAND_MADAME: { type: 'text', value: 'Brand: Madame' },
  CATEGORY: { type: 'text', value: 'Category: Women > Dress' },
  QUANTITY: { type: 'css', value: '#quantity' },
} as const;

export const VIEW_CART_PAGE = {
  THIRD_VIEW_PRODUCT: { type: 'css', value: 'div:nth-child(5) > .product-image-wrapper > .choose > .nav > li > a' },
} as const;

export const LOGIN_PAGE = {
  THIRD_VIEW_PRODUCT: { type: 'css', value: 'div:nth-child(5) > .product-image-wrapper > .choose > .nav > li > a' },
} as const;

export const SIGNUP_PAGE = {
  THIRD_VIEW_PRODUCT: { type: 'css', value: 'div:nth-child(5) > .product-image-wrapper > .choose > .nav > li > a' },
} as const;


