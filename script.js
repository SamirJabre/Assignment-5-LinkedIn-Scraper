const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless:false
  });
  const page = await browser.newPage();
  await page.goto('https://www.linkedin.com/jobs/search/?currentJobId=3947001319&origin=JOBS_HOME_JYMBII');

  const jobHandles=await page.$$('.jobs-search__results-list > li');

  for(const jobhandle of jobHandles){
    const title = await page.evaluate(el  => el.querySelector('.base-search-card__title').textContent,jobhandle);
    const companyName = await page.evaluate(el  => el.querySelector('.base-search-card__subtitle').textContent,jobhandle);
    let i;
    console.log(`${i}- Job Title : ${title} , Company Name : ${companyName}`);
    i++
  }




  // await page.locator('.scaffold-layout__list-container');
  // await page.waitForSelector('span');
  // const title = await page.$eval('span', element => element.textContent);
  // console.log('Extracted Text:', title);
})();












// const run = async () =>{
//     const browser = await puppeteer.launch({
//         headless:false,
//         defaultViewport:false
//     });
//     const page = await browser.newPage();
//     await page.goto("https://www.linkedin.com/jobs/search?trk=guest_homepage-basic_guest_nav_menu_jobs&position=1&pageNum=0");
    

    

// };
// run();