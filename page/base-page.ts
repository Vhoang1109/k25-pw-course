import { Page } from "@playwright/test";
//key word export de xuat class ra ngoai de su dung o file khac

export class BasePage {// truyen vao class con
    page: Page; // thuoc tinh
    urlStore = "http//store/"
    // xpathDashboard = "#dashboard"
    constructor(page: Page) {// truyen thuoc tinh bat buoc tao ra class con
        this.page = page;
    }

    async navigateTo(pagramPage: string) {
        await this.page.goto(`${this.urlStore}/${pagramPage}`);
    }
}