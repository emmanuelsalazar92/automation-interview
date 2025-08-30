export function getLocator(page: any, locator: any) {
  switch (locator.type) {
  case 'text':
    return page.getByText(locator.value);
  case 'role-link':
    return page.getByRole('link', { name: locator.value });
  case 'css':
    return page.locator(locator.value); 
  default:
    throw new Error(`Unknown locator type: ${locator.type}`);
  }
}