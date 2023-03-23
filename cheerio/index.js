/**
 * 
 * Create a Application which can fetch list of popular github repo
 *
 * To build this application we need following things 
 * 
 *   Nodejs 
 *   npm init -y -> This initliase a node js project
 *   Cheerio -> Run  https://cheerio.js.org/docs/intro  npm install cheerio
 *   request -> Run  npm install request 
 *   node -v
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
      ).find('.text-bold').text();
      console.log(followerCount);

      var name = dom(".p-name").text().trim();
      console.log(name);

      var title = dom(".p-note").text().trim();
      console.log(title);
    }

    request("https://github.com/Anshu-rai89", handleRequestData);
}

var puppeteer = require("puppeteer");
 async function extractData() {
   //Run npm i puppeteer

   // Function to create a browser
   var browser = await puppeteer.launch({ headless: false });

   // new web Page on the browser
   var page = await browser.newPage();

   await page.goto("https://github.com/Anshu-rai89");

   await page.waitForSelector(".repo"); // It is waiting for this element to be present in dom tree

   // All your business logic to extract data goes here
   var popular_repos = await page.evaluate(function () {
     // First we are accessing all repos element using class  and then converting them in array
     var reposElements = Array.from(document.getElementsByClassName("repo"));

     var repos = [];

     reposElements.forEach(function (repo) {
       repos.push(repo.innerText);
     });

     return repos;
   });

   console.log("Repos are ", popular_repos);

   var userName = await page.evaluate(function () {
     return document.querySelector(".p-name").textContent;
   });
   console.log(userName);

   await page.evaluate(function () {
     document.querySelector("a[href='/Anshu-rai89?tab=repositories']").click();
   });

   await page.waitForSelector("#user-repositories-list > ul > li"); // It is waiting for this element to be present in dom tree

   var all_repo = await page.evaluate(function () {
     var lis = Array.from(
       document.querySelectorAll("#user-repositories-list > ul > li")
     );

     var repo_name = [];

     lis.forEach(function (li) {
       var text = li.querySelector("a").textContent;
       repo_name.push(text);
     });

     return repo_name;
   });

   console.log("All repos", all_repo);

  await page.type("#your-repos-filter", "march", { delay: 100 });
     //await browser.close();
 }

extractData();


