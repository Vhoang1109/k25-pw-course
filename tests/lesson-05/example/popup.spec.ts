import {test} from "@playwright/test";

// Handle confirmation dialog
test("Ex3", async ({ page }) => {
await page.goto('https://material.playwrightvn.com/');
await page.click("//a[@href='03-xpath-todo-list.html']");
await page.locator("//input[@id='new-task']").fill("Task 01");
await page.click("//button[@id='add-task']");

page.on('dialog', dialog => dialog.accept());
await page.click("//button[text()='Delete']");
});

// Cach handle dialog sự kiện on dialog tức là khi có dialog xuất hiện thì sẽ tự động xử lý nó
// page.on('dialog', dialog => dialog.accept());
// await page.getByRole('button').click();

//Luu ý: sự kiện on dialog phải được đặt trước khi có sự kiện dialog xuất hiện nếu không sẽ bị lỗi vì không bắt được dialog đó