import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('cell', { name: 'Bài học 2: Product page' }).click();
  await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.getByRole('button', { name: 'Add to Cart' }).nth(1).dblclick();
  await page.getByRole('button', { name: 'Add to Cart' }).nth(2).click();
  await page.getByRole('cell', { name: 'Product 1' }).click();
  await page.getByRole('cell', { name: 'Product 1' }).click();
  await expect(page.locator('#cart-items')).toContainText('Product 1');
  await expect(page.getByRole('cell', { name: 'Product 1' })).toBeVisible();
  await page.getByRole('columnheader', { name: 'Total' }).click();
  await expect(page.getByRole('cell', { name: 'Product 2' })).toBeVisible();
  await page.getByRole('columnheader', { name: 'Total' }).click();
  await page.getByRole('columnheader', { name: 'Total' }).click();

  await page.getByRole('link', { name: 'Trở về trang chủ' }).click();
  await page.getByRole('columnheader', { name: 'Tên trang' }).first().click();
  await page.getByRole('link', { name: 'Bài học 1: Register Page (c' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('Viet Hoang');


test('test 1', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 1: Register Page (c' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('hoangpv');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('123@gmail.com');
  await page.getByRole('checkbox', { name: 'Traveling' }).check();
  await page.getByRole('radio', { name: 'Female' }).check();
});
});
