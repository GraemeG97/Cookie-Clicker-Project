// start cookies count at 0
let cookies = 0;

var Grandma = 0;
var GrandmaCost = 500;

var Oven = 0;
var OvenCost = 2500;

var Factory = 0;
var FactoryCost = 5000;

var Mine = 0;
var MineCost = 10000;

var Bank = 0;
var BankCost = 100000;

document.body.onload = function startGame() {
  setInterval(function () {
    cookies += 1;
    console.log("🍪", cookies);
    document.getElementById("numberOfCookies").innerHTML = cookies;
    setCookies();
    getCookies();
  }, 1000);
};

let cookiePic = document.getElementById("cookiePic");
cookiePic.addEventListener("click", clickForCookies);
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetCookies);

function clickForCookies(event) {
  cookies += 1;
  document.getElementById("cookiePic");
  document.getElementById("numberOfCookies").innerHTML = cookies;
}

function setCookies(event) {
  event.preventDefult();
  localStorage.setItem("localCookies", cookies);
}
//get item and parse
function getCookies(event) {
  const parsedCookies = JSON.parse("localCookies");
}

function resetCookies(event) {
  cookies = 0;
}

function m() {
  const e = document.getElementById("shop");
  (e.innerHTML = ""),
    p.forEach((t) => {
      const r = document.createElement("div");
      (r.className = "shop-item"),
        (r.innerHTML = `
    <div>${E(t.name)}</div>
    <div>${t.name} </div>
    <div>$C ${t.price}</div>
    <div>+${t.increase}</div>
    `);
      const i = document.createElement("button");
      (i.innerHTML = "Buy"),
        i.addEventListener("click", () => {
          k(t) && (s.push(t), d(), a(), m());
        }),
        r.appendChild(i),
        e.appendChild(r);
    });
}
