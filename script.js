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
    const jobLocation = await page.evaluate(el  => el.querySelector('.job-search-card__location').textContent,jobhandle);
    
    console.log(`- Job Title : ${title} , Company Name : ${companyName} , Job Location : ${jobLocation}`);
  }

})();



// ALL OF COMMENTED CODE DOWN THERE ARE EXPERIMENTAL :)
























  // for(const jobhandle of jobHandles){
  
  //   const title = await page.evaluate(el  => el.querySelector('.base-search-card__title').textContent,jobhandle);
  //   const companyName = await page.evaluate(el  => el.querySelector('.base-search-card__subtitle').textContent,jobhandle);
  //   const jobLocation = await page.evaluate(el  => el.querySelector('.job-search-card__location').textContent,jobhandle);
    
  //   console.log(`- Job Title : ${title} , Company Name : ${companyName} , Job Location : ${jobLocation}`);

  // }

  




  // await page.locator('.base-card__full-link').click();

  // const element=await page.$$('.top-card-layout__card relative');
  //   const title = await page.evaluate(el => el.querySelector('.top-card-layout__title').textContent, element);
  //   console.log('Text Content:', title);

  // if (element) {
  //   // Example: Get the text content
  //   const title = await page.evaluate(el => el.querySelector('.top-card-layout__title').textContent, element);
  //   console.log('Text Content:', title);
  // }


  // const jobHandles=await page.$$('.jobs-search__results-list > li');
  // const jobHandles=await page.$$('.jobs-search__results-list > li');



  




  // await page.locator('.scaffold-layout__list-container');
  // await page.waitForSelector('span');
  // const title = await page.$eval('span', element => element.textContent);
  // console.log('Extracted Text:', title);





// await page.waitForSelector('.jobs-search__results-list > li > .base-card__full-link'); // Adjust the selector as needed

  // // Click on the link
  // await page.click('.jobs-search__results-list > li > .base-card__full-link'); // Adjust the selector as needed

  // // Wait for navigation to complete (if needed)
  // await page.waitForNavigation();

  // console.log('Link clicked and navigation completed.');







// const run = async () =>{
//     const browser = await puppeteer.launch({
//         headless:false,
//         defaultViewport:false
//     });
//     const page = await browser.newPage();
//     await page.goto("https://www.linkedin.com/jobs/search?trk=guest_homepage-basic_guest_nav_menu_jobs&position=1&pageNum=0");
    

    

// };
// run();