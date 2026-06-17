import { expect, test } from '@playwright/test';

test('visual comparision', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/03-xpath-todo-list.html');
    await expect(page).toHaveScreenshot("todo-list.png")
});