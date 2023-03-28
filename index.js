var puppeteer = require("puppeteer");
async function extractData(){
     var browser = await puppeteer.launch({ headless: false });

     // new web Page on the browser
     var page = await browser.newPage();

     await page.goto("https://github.com/trending");

     await page.waitForSelector(".Box-row");

     var repos = await page.evaluate(function () {
        var repoArr = [];
        var reposElement = Array.from(document.querySelectorAll(".Box-row"));
        reposElement.forEach((repo) => {
            // Here i have the access of repo element 

            // I need to extract the title of repo;

            var titleData = repo.querySelector('h1').innerText;
             var descriptionData = "";
             if(repo.querySelector("p")) {
                descriptionData = repo.querySelector("p").innerText;
             };
             var langData = "";
             
             if(repo.querySelector(
               "span[itemprop ='programmingLanguage']"
             ))
              {
                langData = repo.querySelector("span[itemprop ='programmingLanguage']").innerText;
              }

              var urlData = "";
              var starUrl = "";

              if (repo.querySelector("h1> a"))
              {
                urlData = repo.querySelector("h1> a").href;
                starUrl = repo.querySelector("h1> a").getAttribute('href');
              }             
                titleData.replace(" ", "");

           
            var forkUrl = starUrl + '/forks';
             starUrl = starUrl + "/stargazers";
            console.log("start url", starUrl);
            starData = repo.querySelector(`a[href = '${starUrl}']`).innerText;
            var forkData = repo.querySelector(
              `a[href = '${forkUrl}']`
            ).innerText;

            repoArr.push({
              title: titleData,
              description: descriptionData,
              language: langData,
              url: urlData,
              stars: starData,
              fork: forkData
            });

           
        });

        return repoArr;
        
     });


    var developerElement = await page.$("a[href ='/trending/developers']");
    await developerElement.click();


   await page.waitForSelector(
     "a[href= '/trending/developers/javascript?since=daily"
   );
    
 var text = await page.evaluate(()=> {
    return document.querySelector("a[href= '/trending/developers/javascript?since=daily").click();
 });

 console.log("test", text);
       

 var deveopers = await page.evaluate(()=> {
    var developersArr = [];
    var developersRows = Array.from(document.querySelectorAll('.Box-row'));
    developersRows.forEach((developer)=> {
        var name = developer.querySelector(".h3").innerText;
        var repo = developer.querySelector(".h4").innerText;
        var description = "";
        
        if(developer.querySelectorAll(".f6")[2]){
            description = developer.querySelectorAll(".f6")[2].innerText;
        }

        developersArr.push({
          name: name,
          repo: repo,
          description: description,
        });
    });

    return developersArr;
 });




     console.log("Exrracted data", repos, deveopers);
}

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}


async function submitProblem() {
     var browser = await puppeteer.launch({ headless: false });

     // new web Page on the browser
     var page = await browser.newPage();

     await  page.goto(
       "https://www.hackerrank.com/challenges/solve-me-first/problem"
     );

     // STep 1 
     // Login
     await page.evaluate(()=> {
        document.querySelector("#tab-3-item-1").click();
     })

    await page.type("#input-4", "anshurai8991@gmail.com");
    await page.type("#input-5", "Anshu@1998");

    await page.evaluate(()=> {
        document.querySelector(".auth-button").click();
    })

    await page.waitForSelector(".checkbox-input");
    await page.evaluate(()=> {
      document.querySelector(".checkbox-input").click();
    })

    
    // var textArea = await page.$$("#input-6");
    // console.log("ele", textArea);
    // await page.evaluate(()=> {
    //   document.querySelector("#input-6").click();
    // })

    // await page.type("#input-6","testabc", {delay: 100});
    // await page.keyboard.down("Control");
    // await page.keyboard.press("A", {delay : 100});
    // await page.keyboard.press("X", {delay: 100});

  
    await page.evaluate(()=> {
      document.querySelector(".monaco-editor").click();
    });

    await delay(3000);
   // await page.type(".monaco-scrollable-element", "anshu", {delay:100});
    //await page.keyboard.up("Control");


  //  await page.evaluate(()=> {
  //   document.querySelector(".monaco-scrollable-element").click();
  //  })

  var editor = await page.$(".monaco-editor");

     await page.keyboard.down("Meta");
     await page.keyboard.press("A", { delay: 100 });

    await delay(1000);
    await page.type(".monaco-editor", "abc");

}
//extractData();

submitProblem();