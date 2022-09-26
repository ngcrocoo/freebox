
const axios = require("axios").default;
const moment = require("moment");
const Datepicker = require("vanillajs-datepicker/Datepicker").default;

let dates = [];

const desiredStates = ["NY"];

let startDate = "";
let endDate = "";
let texasCount = 0;
let previousList;
const loader = document.getElementById("loader");
const audioEl = document.getElementById("audio");
const audioBGEl = document.getElementById("audiobg");
const startElem = document.querySelector('input[name="start"]');
const endElem = document.querySelector('input[name="end"]');
const startDatepicker = new Datepicker(startElem, {
    format: "yyyy-mm-dd"
});
const endDatepicker = new Datepicker(endElem, {
    format: "yyyy-mm-dd"
});

let dateInterval;

const list = document.getElementById("results");

startElem.addEventListener("changeDate", (e) => {
    startDate = e.target.value;
    if (!startDate || !endDate) {
        clearInterval(dateInterval);
    } else if (endDate) {
        getRange(startDate, endDate, "days");
    }
});

endElem.addEventListener("changeDate", (e) => {
    endDate = e.target.value;
    if (!startDate || !endDate) {
        clearInterval(dateInterval);
    } else if (startDate) {
        getRange(startDate, endDate, "days");
    }
});

function getRange(startDate, endDate, type) {
    loader.style.display = "block";

    let fromDate = moment(startDate);
    let toDate = moment(endDate);
    let diff = toDate.diff(fromDate, type);
    let range = [];
    for (let i = 0; i < diff; i++) {
        range.push(moment(startDate).add(i, type));
    }
    dates = range.map((r) => r.format("YYYY-MM-DD"));
    clearInterval(dateInterval);
    dateInterval = setInterval(checkDates, 5000);
}

const checkDates = () => {
   // console.log("checking dates");
    loader.style.display = "block";
    const availableOptions = [];
    let completedDates = 0;
    texasCount = 0;
    let currentList = 0;

    dates.forEach(async(date, index) => {
        const d = new Date();
        const results = await axios.get(
            `https://ttp.cbp.dhs.gov/schedulerapi/slots/asLocations?minimum=1&filterTimestampBy=on&timestamp=${date}&serviceName=Global%20Entry&t=${d
        .getTime()
        .toString()}`
        );
        results.data.forEach((datum) => {
            if (datum.state === "TX") {
                texasCount += 1;
            }
            if (desiredStates.includes(datum.state)) {
                if (datum.city === "New York") {
                    audioBGEl.play();
                }
                currentList = currentList + datum.id;
                availableOptions.push({...datum, date });
            }
        });
        completedDates++;
        if (completedDates === dates.length) {
            // console.log("completed");
            const res = availableOptions;
            loader.style.display = "none";
            if (res.length) {
                let content = "";
                list.innerHTML = "";
                if (previousList !== currentList) {
                    audioEl.play();
                }
                previousList = currentList;
                res.forEach((re) => {
                 //   console.log(re);
                    content += `<li>${re.date} | ${re.city}, ${re.state}</li>`;
                });
                list.innerHTML = content;
            } else {
                list.innerHTML = `<li>There are currently no appointments available in New York, but somehow, texas has ${texasCount} FUCKING appointments avaialble. This country is broken</li>`;
            }
        }
    });
};
