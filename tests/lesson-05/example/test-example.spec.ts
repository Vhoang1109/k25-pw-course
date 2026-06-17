import { test } from "@playwright/test";

test("Test 01", async ({ page }) => {
    await test.step("Navigate to Register Page", async () => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    });
    await test.step("fill info", async () => {
        //                        truyen select xpath     truyen value
        await page.fill("//input[@id='username']", "Playwright"); //cach1
        await page.locator("//input[@id= 'email']").fill("pw@gmail.com"); //cách 2
        // await page.locator("//textarea[@id='bio']").pressSequentially("Hello", {
        //     delay: 200 // 200 mili giây, 1000 1s, 2000 2s
        // })
        await page.locator("//input[@id='female']").check();
        await page.locator("//input[@id='reading']").setChecked(false);
        await page.locator("//input[@id='reading']").setChecked(true);
        await page.locator("//select[@id='country']").selectOption("australia"); // lay value default sẵn của thẻ này 
        await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-05/example/test-data/image.txt");
        //                                                             path file

    });
});


test("Test 02", async ({ page }) => {
    await test.step("Single click", async () => {

        await page.goto('https://material.playwrightvn.com/018-mouse.html');

        await page.locator("//div[@id='clickArea']").click();


    });
    await test.step("double click", async () => {

        await page.locator("//div[@id='clickArea']").dblclick();
        await page.locator("//div[@id='clickArea']").click({
            clickCount: 2
        });
    });
    await test.step("shift + click", async () => {

        await page.locator("//div[@id='clickArea']").click({
            modifiers: ["Shift"]
        });
    });

    await test.step("Right click", async () => {

        await page.locator("//div[@id='clickArea']").click({
            button: "right"
        });
    });
})