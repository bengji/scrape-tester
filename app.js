import got from 'cloudflare-scraper';

(async () => {
  try {
    const response = await got.get('https://www.rtklive.com/sq/page.php?ID=28');
    console.log(response.body);
  } catch (error) {
    console.log(error);
  }
})();