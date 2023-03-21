/**
 * 
 * Create a Application which can fetch list of popular github repo
 *
 * To build this application we need following things 
 * 
 *   Nodejs 
 *   npm init -y -> This initliase a node js project
 *   Cheerio -> Run  https://cheerio.js.org/docs/intro  npm install cheerio
 *   request -> Run  npm install request node -v
 *   npm -v
 */

var request = require("request");
var cheerio = require("cheerio");
var puppeteer = require("puppeteer");


// Async code using callback 

// 

function cheerioFetch() {
    function handleRequestData(err, htmlCode) {
      if (err) {
        console.log("Error in request");
      }

      // You need to load the html file in cheerio

      // Juery
      var dom = cheerio.load(htmlCode.body); // Dom Tree using html code

      var popular_repo = [];
      var repos = dom(".repo").text(); // 6 elements
      console.log(repos);

      var followerCount = dom(
        "a[href = 'https://github.com/Anshu-rai89?tab=followers']"
      ).find('.text-bold').text().trim();
      console.log(followerCount);

      var name = dom(".p-name").text().trim();
      console.log(name);

      var title = dom(".p-note").text().trim();
      console.log(title);
    }

    request("https://github.com/Anshu-rai89", handleRequestData);
}


cheerioFetch();
  // Run npm i puppeteer
//   async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();

//     await page.goto("https://github.com/Anshu-rai89");

//     var repos = await page.waitForSelector(".repo");

//     var repos;
//     await repos.evaluate((elements) => {
//       repos = elements;
//     });

//     console.log("repos", repos);
//     await browser.close();
//   }
// );