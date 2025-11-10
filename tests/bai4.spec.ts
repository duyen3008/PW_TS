import { test, expect } from '@playwright/test';

const DEMO_URL = 'https://demoapp-sable-gamma.vercel.app/'

// test('Cac cap do auto waiting trong PW', async({page})=>{
//     await page.goto(DEMO_URL)
//     await page.getByRole('link',{name:'Bài 1: Auto-Wait Demo'}).click();
//     await page.locator("//span[contains(text(),'Bắt đầu Test')]").click();
//     const slowButton1 =  page.locator("#button-1");
//     await slowButton1.click({timeout: 5000});
    

// })

// test('Cấp 2', async({page})=>{
//     await page.goto(DEMO_URL)
//     await page.getByRole('link',{name:'Bài 1: Auto-Wait Demo'}).click();
//     await page.locator("//span[contains(text(),'Bắt đầu Test')]").click();
//     const slowButton1 =  page.locator("#button-2");
//     await slowButton1.click();
    

// })

test.setTimeout(30000)

test('Cấp 3', async({page})=>{
    await page.goto(DEMO_URL)
    await page.getByRole('link',{name:'Bài 1: Auto-Wait Demo'}).click();
    await page.locator("//span[contains(text(),'Bắt đầu Test')]").click();
    const slowButton1 =  page.locator("#button-2");
    await slowButton1.click();
    

})



/* 3 cấp độ timeout

1.Inline time out => sếp
2. Trung bình action time out => phòng ban
3. Thấp nhất => toàn cục => toàn bộ nhân viên

Mặc định là 30s cho action và toàn cục
*/


/* Web First Assertion
Có 2 cấp độ
1.Inline time out => sếp
2. Default
*/


test('Cấp 1: Webfirst assertion', async({page})=>{
    await page.goto(DEMO_URL)
    await page.getByRole('link',{name:'Bai 1: Auto-Wait Demo'}).click()
    await page.getByRole('button',{name:'Web-First Assertion'}).click()
    await page.getByText('Bắt đầu chờ').click()
    const statusMessage = page.locator('#status-message')

    await expect(statusMessage).toHaveText('Tải dữ liệu thành công',{timeout: 8000})

})