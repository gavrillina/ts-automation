import {test, expect} from '@playwright/test';
import exp from 'constants';

test.beforeEach(async({page}) => {
    await page.goto('https://sdetunicorns.com/')

})

test.describe('check main page is opened', () => {
    test('click on cources link', async ({page}) => {
        await page.locator('#masthead').getByRole('link', {name: 'Courses'}).click()
        await expect(page).toHaveURL(/courses/)

    })

    test('Check main page is opened', async ({page}) => {
    await page.locator('#masthead').getByRole('link', {name: 'Courses'}).click()
    await expect(page.getByRole('button' , {name: 'JOIN ACADEMY'})).toBeVisible()
    await expect(page.locator('.elementor-loop-container')).toBeVisible()
    })
})