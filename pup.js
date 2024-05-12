import * as cheerio from 'cheerio';
import delay from 'delay';
import puppeteer from 'puppeteer-extra';
import stealth from "puppeteer-extra-plugin-stealth";
import { ConsoleMessage } from 'puppeteer';

const OPTIONS = {
    headless: false,
    ignoreHTTPSErrors: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-sync",
      "--ignore-certificate-errors",
      "--lang=en-US,en;q=0.9",
    ],
    defaultViewport: { width: 1920, height: 1080 },
  };


  (async () => {
    try {


const URL = 'https://www.rtklive.com/sq/page.php?ID=28';
    // const URL = 'https://fingerprint.com/products/bot-detection/';

    puppeteer.use(stealth())
    const browser = await puppeteer.launch(OPTIONS)
    const page = await browser.newPage()

    

    // data holders
    let horoskopeData = [];

  

        //make the call to fetch Raw HTML from URL
        await page.goto(URL, { waitUntil: 'domcontentloaded' })
        
        await page.waitForSelector('body');

        

        const response = await page.evaluate(() => {

                return document.body.innerHTML;

            });


        await delay(135000);
        browser.close();
        // let rawHTML = await cloudscraper(options);
        // console.log(response)
        // //load rawHTML to cheerio for easier selection
        let $ = await cheerio.load(response);

        // console.log($('body').text());






    } catch (error) {
      console.log(error);
    }
  })();