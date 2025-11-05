import { test, expect } from '@playwright/test';

// test.describe('Trang chu Playwright.dev', () =>{
//     test('TC01. Check menu hien thi DOCS', async({page})=>{
//         await page.goto('https://playwright.dev/');
//         await expect (page.getByRole('link',{name: 'Docs'})).toBeVisible();
//     })

//     test('TC02. Check menu hien thi DOCS', async({page})=>{
//         await page.goto('https://playwright.dev/');
//         await expect (page.getByRole('link',{name: 'Docs'})).toBeVisible();
//     })
// })

// test.describe('Trang nhan su cu Anh Tester', () => {
//     test('TC01. Kich ban dang nhap va kiem tra widget', async ({ page }) => {
//         await test.step('Buoc 1: Dieu huong va dang nhap', async () => {
//             await page.goto('https://hrm.anhtester.com/erp/login');
//             await page.getByRole('textbox', { name: 'Your Username' }).click();
//             await page.getByRole('textbox', { name: 'Your Username' }).fill('admin_example');
//             await page.getByRole('textbox', { name: 'Enter Password' }).click();
//             await page.getByRole('textbox', { name: 'Enter Password' }).fill('123456');
//             await page.getByRole('button', { name: ' Login' }).click();

//         })

//         await test.step('Buoc 2: Kiem tra dang nhap thanh cong', async () => {
//             await expect(page.getByRole('navigation')).toContainText('Your Apps');
//         })

//     })
// })

test('test', async({page})=>{
    await page.goto('https://demoapp-sable-gamma.vercel.app/')
    await page.getByRole('link',{name:'Bài 1: Auto-Wait Demo'}).click();
    await page.screenshot({path: 'screenshot/tab1.png'})
    await page.getByRole('button',{name:'Click Me!'}).click();

}
)