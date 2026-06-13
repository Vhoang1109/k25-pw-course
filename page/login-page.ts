import { BasePage } from "./base-page";
import { Page } from "@playwright/test";
export class LoginPage extends BasePage {
    // urlLoginPage = "url_loginpage"
    paramLogin = "login";
    xpathUsername = "#username";
    xpathPassword = "#password";
    xpathBtnLogin = "#login";

    constructor(page: Page) {
        super(page);
    }

    async navigateToLoginPage() {
        // await this.navigateTo("url_login")
        await this.navigateTo(this.paramLogin)
    }

    async fillUsername(username: string) {
        await this.page.locator(this.xpathUsername).fill(username);
    };

    async fillPassword(password: string) {
        await this.page.locator(this.xpathPassword).fill(password);
    };

    async clickBtnLogin() {
        await this.page.click(this.xpathBtnLogin);
    };

    async login(username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickBtnLogin();
    }
};