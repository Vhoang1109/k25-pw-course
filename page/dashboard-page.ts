import { Page } from "@playwright/test";
import { BasePage } from "./base-page";
//key word export de xuat class ra ngoai de su dung o file khac
export class Dashboard extends BasePage {// truyen vao class con
    
    urlDashboardpage = "url_dashboard"
    xpathDashboard = "#dashboard"
    constructor(page: Page) {// truyen thuoc tinh bat buoc tao ra class con
        super(page);
    }

    async navigateToDashboardPage(url: string) {
        await this.page.goto(this.urlDashboardpage);
    }
}