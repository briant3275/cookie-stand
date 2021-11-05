'use strict'

// let cookieTable = document.getElementById('cookieTable');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



// constructor function
function Store(location, minCust, maxCust, avgCookiesPerCust) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiesPerCust = avgCookiesPerCust;

    this.customersPerHour = [];
    this.hourlyCookieSale = [];
    this.totalSalePerStore = 0;
    this.cookiePerSale = 0;

    this.randCustAmount();
    this.perHrSale();
    this.calculateStoreTotal();
}


// generates random amount of customers per hour
Store.prototype.randCustAmount = function () {
    for (let hourlyIndex = 0; hourlyIndex < hours.length; hourlyIndex += 1) {
        let range = this.maxCust - this.minCust + 1;
        this.customers = Math.round(Math.random() * range) + this.minCust;
        this.customersPerHour.push(this.customers);
    }
}

// generates cookie sales per hour based on customer per hour amount
Store.prototype.perHrSale = function () {
    for (let custIndex = 0; custIndex < hours.length; custIndex += 1) {
        let hrSale = Math.round(this.customersPerHour[custIndex] * this.avgCookiesPerCust);
        this.hourlyCookieSale[custIndex] = hrSale;
    }
}

// calculates total cookie sales for store

Store.prototype.calculateStoreTotal = function () {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    this.totalSalePerStore = this.hourlyCookieSale.reduce(reducer);
}

const cookieJar = document.getElementById('cookieShops');

const articleElem = document.createElement('article');

cookieJar.appendChild(articleElem);


//create table
const tableElem = document.createElement('table');
articleElem.appendChild(tableElem);

//clean my rows up too
const topRow = document.createElement('tr');
tableElem.appendChild(topRow);

const row2 = document.createElement('tr');
tableElem.appendChild(row2);

const row3 = document.createElement('tr');
tableElem.appendChild(row3);

const row4 = document.createElement('tr');
tableElem.appendChild(row4);

const row5 = document.createElement('tr');
tableElem.appendChild(row5);

const row6 = document.createElement('tr');
tableElem.appendChild(row6);

//clean all this up below
const rowHeader1 = document.createElement('th');
topRow.appendChild(rowHeader1);
rowHeader1.textContent = 'Location';

const rowHeader2 = document.createElement('th');
row2.appendChild(rowHeader2);
rowHeader2.textContent = 'Seattle';

const rowHeader3 = document.createElement('th');
row3.appendChild(rowHeader3);
rowHeader3.textContent = 'Tokyo';

const rowHeader4 = document.createElement('th');
row4.appendChild(rowHeader4);
rowHeader4.textContent = 'Dubai';

const rowHeader5 = document.createElement('th');
row5.appendChild(rowHeader5);
rowHeader5.textContent = 'Paris';

const rowHeader6 = document.createElement('th');
row6.appendChild(rowHeader6);
rowHeader6.textContent = 'Lima';


for (let hourlyIndex = 0; hourlyIndex < hours.length + 1; hourlyIndex += 1) {
    const thElem = document.createElement('td');
    topRow.appendChild(thElem);
    thElem.textContent = hours[hourlyIndex];
}

function renderFooterRow() {
    // calculate hourly total
    // add row of totals to table
    const footerRow = document.createElement('tr');
    tableElem.appendChild(footerRow);
    const hourlyTotals = document.createElement('th');
    footerRow.appendChild(hourlyTotals);
    hourlyTotals.textContent = 'Totals';

    for (let hourlyIndex = 0; hourlyIndex < hours.length; hourlyIndex += 1) {
        const thElem = document.createElement('td');
        footerRow.appendChild(thElem);
        thElem.textContent = '?';


    }
}
// for(let standIndex = 0; standIndex < hours.length; standIndex+=1) {
// seattle.generateHourlySales();

// stores' info
const seattle = new Store('Seattle', 23, 65, 6.3);
const tokyo = new Store('Tokyo', 3, 24, 1.2);
const dubai = new Store('Dubai', 11, 38, 3.7);
const paris = new Store('Paris', 20, 38, 2.3);
const lima = new Store('Lima', 2, 16, 4.6);

renderFooterRow();

// function handleClick() {
//     alert("Thank you for your submission!");
//     const newLocation = 
// }
function handleForm(event) {
    // alert ("Ok");
    event.preventDefault();
    const formElem = event.target;

    const minCustNum = parseInt(formElem.minCust.value);
    const maxCustNum = parseInt(formElem.maxCust.value);
    const avgCookieNum = parseInt(formElem.avgCookie.value);
    alert(formElem["location"].value);
    alert(formElem["minCust"].value, formElem["maxCust"].value, formElem["avgCookie"].value);
}

// const formLocation = document.getElementById("location");
// formLocation.addEventListener("submit", handleForm);

// const formMinCust = document.getElementById("minCust");
// formMinCust.addEventListener("submit", handleForm);

// const formMaxCust = document.getElementById("maxCust");
// formMaxCust.addEventListener("submit", handleForm);

// const formAvgCookies = document.getElementById("avgCookies");
// formAvgCookies.addEventListener("submit", handleForm);

const form = document.getElementById("form");
form.addEventListener("submit", handleForm);