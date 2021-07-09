const { Builder, until, By } = require("selenium-webdriver");
const { Browser, PageLoadStrategy } = require("selenium-webdriver/lib/capabilities");
const chrome = require("selenium-webdriver/chrome");
require("chromedriver");

const getChromeDriver = () => {
    return new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(new chrome.Options()
            .setPageLoadStrategy(PageLoadStrategy.NORMAL)
            .addArguments(['--ignore-certificate-errors',
                '--disable-extensions',
                '--disable-popup-blocking',
                'enable-automation'])
            .headless())
        .build();
}

const driver = getChromeDriver();

const findElementBy = (locator) => {
    return driver.findElement(By.css(locator)).getText()
}

const findElementByXPath = (locator) => {
    return driver.findElement(By.xpath(locator)).getText()
}

afterAll(async () => {
    await driver.quit();
}, 15000);


describe('Home page', () => {

    beforeEach(() => {
        jest.setTimeout(30000);
    });

    test('should be opened as successfully', async (done) => {
        await driver.get('https://www.readeo.com/');

        // expect(await findElementBy('h1'))
        //     .toEqual('Storytime is a video chat away');
        expect(await findElementByXPath('/nav/a[6]/div'))
            .toEqual('log in');
        done();
    }, 30000);

});