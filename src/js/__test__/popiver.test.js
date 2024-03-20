const puppeteer = require('puppeteer');

describe('Popover functionality', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:8080');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Popover appears and disappears after clicking the button', async () => {
    const button = await page.$('.btn');
    let popover = await page.$('.popover');
    expect(popover).toBeNull();

    await button.click();

    popover = await page.$('.popover');
    expect(popover).not.toBeNull();

    await page.waitForSelector('.popover', { hidden: true });
    popover = await page.$('.popover');
    expect(popover).toBeNull();
  }, 10000);
});
