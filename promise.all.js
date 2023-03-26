


function isValidCard() {
    return true;
}

function isSuffcientBalanced() {
    return false;
}

function isValidUser() {
    return true;
}

function makePayment() {
    console.log("Payment is made");
}
var promise1 = new Promise((function(resolve, reject) {
    setTimeout(function() {
        if(isValidCard()) {
             resolve("Valid Card");
        }
        else {
            reject("Invalid card");
        }
       
    }, 1000);
}))

var promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if(  isSuffcientBalanced()) {
         resolve("Sufficent Balanced");
    }
    else {
        reject("Insufficent balance")
    }
   
  }, 2000);
});

var promise3 = new Promise(function (resolve) {
  setTimeout(function () {
    if(isValidUser()) {
      resolve("Valid user");
    }
    else {
        reject("Invalid User")
    }
   
  }, 3000);
});


// I want to print hello world all promise resolved when promise1 , promise2 and promise3 is resolved
// If any one of the promise fails then i want to print the failed promise

var allPromise = Promise.all([promise1, promise2, promise3])

allPromise.then(function(data) {
    console.log("All resolved", data);
     makePayment();
}).catch(function(data) {
    console.log("Promise rejected", data);
})


promise1
.then(function() { return promise2})
.then(function() {return promise3})
.catch(function(err) { console.log(err)});


async function validUser() {
    return isValidUser();
}

async function sufficentFund() {
    return isSuffcientBalanced();
}

async function validCard() {
    return isValidCard();
}

