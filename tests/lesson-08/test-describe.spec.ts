import test from "@playwright/test";

// Template test.describe
test.describe("AUTH", async () => {  
    // tạo 4 cái hooks
   
    test.beforeAll(async () => {
        console.log("before all");
    });
    test.afterAll(async () => {
        console.log("after all");
    });

    test.beforeEach(async () => {
        console.log("before Each");
    });
    test.afterEach(async () => {
        console.log("after Each");
    });

    test("login pass", async () => {
        await test.step("Navigate to Login Page ", async () => {
            console.log("Code test Login pass");
        });


        await test.step("fill and login", async () => {
        });
    });

    test("login fail", async () => {
        await test.step("Navigate to Login Page ", async () => {
            console.log("Code test Login fail");
        });

        await test.step("fill and login", async () => {
        });
    });
});