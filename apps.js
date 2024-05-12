import { connect } from 'puppeteer-real-browser'

connect({
    turnstile: true,
    headless: 'auto',
    fingerprint: true,
})
.then(async response => {
        const { page, browser, setTarget } = response;

                
        page.goto('https://www.rtklive.com/sq/page.php?ID=28', {
            waitUntil: 'domcontentloaded'
        })

        await page.waitForSelector('.page-content');
        console.log(await page.evaluate(() => document.body.innerHTML))
        browser.close();

})