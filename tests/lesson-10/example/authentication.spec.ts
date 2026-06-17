import test, { expect, Page } from "@playwright/test";
import { LoginPage } from "../../../page/login-page";
import { Dashboard } from "../../../page/dashboard-page";
test.describe("AUTH", () => {

    let loginPage: LoginPage;
    let dashboardPage: Dashboard;
    // ngoac nhon {} block scope
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page) // truyen fixture page de khoi tao login-page
        dashboardPage = new Dashboard(page)
        await loginPage.login("username", "password");
    })

    test("Login pass", async ({ page }) => {
        // khai bao login-page dung tuong tu nhu syntax khai bao class dc hoc bai truoc

        await test.step("Navigate to login page", async () => {
            await loginPage.navigateToLoginPage();
        });

        await test.step("fill into and login", async () => {
            await loginPage.fillUsername("username");
            await loginPage.fillPassword("password");
            await loginPage.clickBtnLogin();

            await expect(loginPage.page.locator(loginPage.xpathUsername)).toHaveValue("expect_value");
            await expect(loginPage.page.locator(loginPage.xpathPassword)).toHaveValue("expect_value");

            await loginPage.clickBtnLogin();

            await expect(dashboardPage.page.locator(dashboardPage.xpathDashboard)).toBeVisible()
        })

    })
})


test.describe("POST", () => {

    let loginPage: LoginPage;
    let dashboardPage: Dashboard;
    // ngoac nhon {} block scope
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page) // truyen fixture page de khoi tao login-page
        dashboardPage = new Dashboard(page)
        await loginPage.login("username", "password");
    })

    test("Add post", async ({ page }) => {
 // logic testcase

    })
})