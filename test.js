
const webdriver = require('selenium-webdriver');
const assert = require('assert');
const path = require('path');
const { pathToFileURL } = require('url');

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

async function runTest() {

    try {

        // Open the HTML file in Chrome
        const filePath = path.resolve(__dirname, 'index.html');

        await driver.get(pathToFileURL(filePath).href);

        // Find first input and enter 50
        const num1 = await driver.findElement(
            webdriver.By.id('num1')
        );

        await num1.sendKeys('50');

        // Find second input and enter 10
        const num2 = await driver.findElement(
            webdriver.By.id('num2')
        );

        await num2.sendKeys('10');

        // Find and click Add button
        const addButton = await driver.findElement(
            webdriver.By.id('add')
        );

        await addButton.click();

        // Get the result
        const result = await driver.findElement(
            webdriver.By.id('result')
        );

        const text = await result.getText();

        // Verify the result
        assert.strictEqual(
            text,
            '60',
            'Sum calculation is incorrect'
        );

        console.log('Test passed: Sum is correct');

    } catch (error) {

        console.error('Test failed:', error);

    } finally {

        // Close the browser
        await driver.quit();

    }
}

runTest();
