export function getLocator(page: any, locator: any) {
  switch (locator.type) {
  case 'text':
    return page.getByText(locator.value);
  case 'role-link':
    return page.getByRole('link', { name: locator.value });
  case 'role-button':
    return page.getByRole('button', { name: locator.value });
  case 'role-heading':
    return page.getByRole('heading', { name: locator.value });
  case 'css':
    return page.locator(locator.value); 
  default:
    throw new Error(`Unknown locator type: ${locator.type}`);
  }
}