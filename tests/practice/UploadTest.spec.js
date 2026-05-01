import {test,expect} from '@playwright/test'


test('Verify file upload',async ({page})=>{
    await page.goto('https://practice.qabrains.com/form-submission');
    const filePath = 'testdata/test_file1.txt';
    const fileInput = await page.getByLabel('Upload File');
    await fileInput.setInputFiles(filePath);
    //await page.click('button[type="submit"]');
   // const successMessage = await page.locator('#success-message').textContent();
   // expect(successMessage).toBe('File uploaded successfully!');
   await page.waitForTimeout(3000);
   await page.close();
}
)