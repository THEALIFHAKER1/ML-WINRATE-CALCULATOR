     
const TotalMatch = document.querySelector("#TotalMatch");
const TotalWinRate = document.querySelector("#TotalWinRate");
const WinRateTarget = document.querySelector("#WinRateTarget");
const Calculate = document.querySelector("#Calculate");
const Result = document.querySelector("#Result");
let text;

function eventListener() {
    Calculate.addEventListener("click", res);
}

function res() {
    document.getElementById("TotalMatch").defaultValue = "351";
    document.getElementById("TotalWinRate").defaultValue = "51.4";
    document.getElementById("WinRateTarget").defaultValue = "70";
    let resultNum = rumus(TotalMatch.value, TotalWinRate.value, WinRateTarget.value);
    if (resultNum > 0.0){
        text = `Need around <b>${resultNum}</b> win without lose to reach <b>${WinRateTarget.value}%</b> win rate`;
        Result.innerHTML = text;
    }
    else if (resultNum < 0.0){
        text = `Need around <b>${resultNum}</b> lose without win to reach <b>${WinRateTarget.value}%</b> win rat`;
        Result.innerHTML = text;
    }
}

function rumus(TotalMatch, TotalWinRate, WinRateTarget) {
    let tWin = TotalMatch * (TotalWinRate / 100);
    let tLose = TotalMatch - tWin;
    let sisaWr = 100 - WinRateTarget;
    let wrResult = 100 / sisaWr;
    let seratusPersen = tLose * wrResult;
    let final = seratusPersen - TotalMatch;
    return Math.round(final);
}

// Main
window.addEventListener("load", init);

function init() {
    load();
    eventListener();
}

function load() {}

function eventListener() {
    Calculate.addEventListener("click", res);
}