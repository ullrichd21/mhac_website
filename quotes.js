var quotes = [
  "This is the deepest quote you've ever heard and it turns out you really needed it in your life.",
  "Who knew that a beanbag is just a boneless couch...",
  "The profound knowledge that you possess will probably be a crime so pretend you're dumb for safety.",
  "The programmer is trapped by MHAC, please send help."
]

var rNum = Math.floor(Math.random() * quotes.length);
console.log(rNum)

document.getElementById("text").innerHTML = quotes[rNum];
