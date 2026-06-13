import { Page } from "@playwright/test";

class BasePage {// truyen vao class con
    page: Page; // thuoc tinh
    xpathDashboard = "#dashboard"
    constructor(page: Page) {// truyen thuoc tinh bat buoc tao ra class con
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }
}


class LoginPage extends BasePage {

    xpathUsername = "#username";
    xpathPassword = "#password";

    constructor(page: Page) {
        super(page);
    }
    // override method
    async navigateToLoginPage() {
        await this.navigateTo("url_login")
    }
    async fillUsername(username: string) {
        await this.page.locator(this.xpathUsername).fill(username);
    }
}    