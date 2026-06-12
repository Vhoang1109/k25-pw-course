import { Page } from "@playwright/test";

class BasePage {
    page: Page; // thuoc tinh
    xpathDashboard = "dashboard"
    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }
}


class LoginPage exports BasePage {
    xpathUsername = "#username";
    xpathPassword = "#password";

    constructor(page: Page){
        super(page);
    }
    async navigateToLoginPage() {
        await this.navigateTo("url_")
    }
}