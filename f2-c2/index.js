var score;


function OpeningCeremony(race100M, longJump, highJump, awardCermony, party) {
  setTimeout(function () {
    console.log("Let the games begin");
    score = { red: 0, blue: 0, green: 0, yellow: 0 };

    race100M(score, longJump, highJump, awardCermony);
  }, 1000);
}

function Race100M(score, longJump, highJump, awardCermony, party) {
  setTimeout(function () {
    var redSeconds = Math.floor(Math.random() * 6) + 10; // 11
    var blueSeconds = Math.floor(Math.random() * 6) + 10; //11
    var yellowSeconds = Math.floor(Math.random() * 6) + 10; //15
    var greenSeconds = Math.floor(Math.random() * 6) + 10; // 14

    var scores = [
      { seconds: redSeconds, color: "red" },
      { seconds: blueSeconds, color: "blue" },
      { seconds: yellowSeconds, color: "yellow" },
      { seconds: greenSeconds, color: "green" },
    ]; // [{seconds: 11, color: "red" }, {seconds: 12, color: 'blue'}]

    console.log("Current Score", score);
    scores.sort(function (a, b) {
      return a.seconds - b.seconds;
    });

    score[scores[0].color] += 50;
    score[scores[1].color] += 25;

    console.log("Updated Score", score);

    longJump(score, highJump, awardCermony);
  }, 3000);
}


function LongJump(score, highJump, awardCermony, party) {
  setTimeout(function () {
    var colors = ["red", "green", "yellow", "blue"];

    var randomIndex = Math.floor(Math.random() * 4); //1
    var selectedColor = colors[randomIndex]; //
    console.log("LongJump-> Current Score", score);

    score[selectedColor] += 150;
    console.log("LongJump-> Updated Score", score);

    highJump(score, awardCermony);
  }, 2000);
}

function HighJump(score, awardCermony, party) {
  var colors = ["red", "green", "yellow", "blue"];
  var color = prompt("Enter winner color").trim(); //"" , null
  console.log("High Jump color", color);
  console.log("HighJump-> Current Score", score);

  if (color && colors.includes(color)) {
    score[color] += 100;
  } else {
    console.log("Event was cancelled");
  }

  console.log("HighJump-> Updated Score", score);

  awardCermony(score);
}

function AwardCeremony(score, party) {
    // {red : 120, blue: 100, green : 90, yellow: 130}
    
    var scoresArray = [
      { score: score.red, color: "Red" },
      { score: score.blue, color: "Blue" },
      { score: score.yellow, color: "Yellow" },
      { score: score.green, color: "Green" },
    ];
    console.log("HighAwardCeremony-> Score", score);

    scoresArray.sort(function (a, b) { return b.score-a.score});

    console.log(`${scoresArray[0].color} 'came first' ${scoresArray[0].score}`);
    console.log(`${scoresArray[1].color} came second ${scoresArray[1].score}`);
    console.log(`${scoresArray[2].color} came third ${scoresArray[2].score}`);

   party();
}


OpeningCeremony(Race100M,LongJump, HighJump, AwardCeremony ) /// → Race100M() → LongJump() → LongJump() → AwardCeremony()

/**
 *  Promise is a JS object which promise you to return a data after some time
 */



OpeningCeremony();
Race100M();
LongJump();
HighJump();
AwardCeremony();