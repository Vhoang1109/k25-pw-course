import test from "@playwright/test";

// Template test.describe
test.describe("AUTH", async () => {
    // tạo 4 cái hooks

    // test.beforeAll(async () => {
    //     console.log("before all");
    // });
    // test.afterAll(async () => {
    //     console.log("after all");
    // });

    test.beforeEach(async () => {
        console.log("Đi tới trang login: https://pw-practice-dev.playwrightvn.com/wp-admin");
    });
    // test.afterEach(async () => {
    //     console.log("after Each");
    // });

    test("login pass", async () => {
        await test.step("Nhập vào thông tin username, password đúng", async () => {
             console.log("Code test Login pass");
        });


        await test.step("Click button login", async () => {
        });
    });

    test("login fail", async () => {
        await test.step("Navigate to Login Page ", async () => {
            console.log("Nhập vào thông tin username, password bị sai ");
        });

        await test.step("Click and login", async () => {

        });
    });
});