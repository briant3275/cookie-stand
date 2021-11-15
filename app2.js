'use strict'

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const storeLocations = [];

// constructor function
function Store(location, minCust, maxCust, avgCookiesPerCust) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiesPerCust = avgCookiesPerCust;

    this.customersPerHour = [];
    this.hourlyCookieSale = [];
    this.totalSalePerStore = 0;
    this.dailyTotal = 0;

    this.randCustAmount();
    this.perHrSale();
    this.generateDailyTotal();
    this.render();

    Store.all.push(this);
}
Store.all = [];


// generates random amount of customers per hour
Store.prototype.randCustAmount = function () {
    for (let i = 0; i < hours.length; i += 1) {
        let range = this.maxCust - this.minCust + 1;
        this.customers = Math.round(Math.random() * range) + this.minCust;
        this.customersPerHour.push(this.customers);
    }
}

// generates cookie sales per hour based on customer per hour amount
Store.prototype.perHrSale = function () {
    for (let i = 0; i < hours.length; i += 1) {
        let hrSale = Math.round(this.customersPerHour[i] * this.avgCookiesPerCust);
        this.hourlyCookieSale[i] = hrSale;
    }
}

Store.prototype.generateDailyTotal = function () {
    let total = 0;
    for (let i = 0; i < this.hourlyCookieSale.length; i += 1) {
        total += this.hourlyCookieSale[i];
    }
    this.dailyTotal = total;
}

function generateHourlyTotal() {

    hourlyTotalSales = [];
    for (let i = 0; i < hours.length; i += 1) {
        let salesTotal = 0;

        for (let j = 0; j < storeLocations.length; j += 1) {
            const currentStand = storeLocations[j];
            let sales = currentStand.hourlyCookieSale[i];

            salesTotal += sales;
        }
        hourlyTotalSales.push(salesTotal);

    }
}

function createLists() {
    //grab the lists section
    const listContainer = document.getElementById(cityList)
    //for loop that creates li's for each location ul
    for (let i = 0; i < Store.all.length; i += 0) {
        let storeUL = document.getElementById(this.location);
        let listItem = document.createElement('li');
        storeUL.appendChild(listItem);
    }
}


const cookieJar = document.getElementById('cookieJar');

//create table
const tableElem = document.createElement('table');
cookieJar.appendChild(tableElem);


function tableHead() {
    let headerRow = document.createElement('tr');
    tableElem.appendChild(headerRow);

    let empty = document.createElement('td');
    headerRow.appendChild(empty);

    for (let i = 0; i < hours.length; i += 1) {
        let tableCell = document.createElement('th');
        headerRow.appendChild(tableCell).textContent = hours[i];
    }
    const totalLabel = document.createElement('td');
    totalLabel.textContent = "Store Totals";
    headerRow.appendChild(totalLabel);
}
tableHead();

Store.prototype.render = function () {

    let tableRow;

    for (let i = 0; i < cityIndex.length; i += 1) {
        tableRow = document.createElement('tr');
        tableElem.appendChild(tableRow);

    }
    const locationCell = document.createElement('td');
    tableRow.appendChild(locationCell);
    locationCell.textContent = this.location;

    for (let i = 0; i < hours.length; i += 1) {
        const locationCell = document.createElement('td');
        tableRow.appendChild(locationCell);
        locationCell.textContent = this.hourlyCookieSale[i];
    }

    const dailyTotalCell = document.createElement('td');
    tableRow.appendChild(dailyTotalCell);
    dailyTotalCell.textContent = this.dailyTotal;
}

let hourlyTotalSales = [];
function footerRow() {

    const footRow = tableElem.createTFoot();
    footRow.setAttribute('id', 'totalRow');
    tableElem.appendChild(footRow);

    const footRowCells = document.createElement('td');
    footRow.appendChild(footRowCells);
    footRowCells.textContent = "Hourly Sales Total";

    generateHourlyTotal()

    for (let i = 0; i < hours.length; i += 1) {
        const totalCell = document.createElement('td');
        footRow.appendChild(totalCell);
        let hrTotal = hourlyTotalSales[i];
        totalCell.textContent = hrTotal;
    }
    let grandTotalCell = document.createElement('td');
    footRow.appendChild(grandTotalCell);
    grandTotalCell.textContent = generateGrandTotal();

}

function generateGrandTotal() {

    let grandTotal = 0;
    for (let i = 0; i < storeLocations.length; i += 1) {
        let currentStand = storeLocations[i];
        let storeDailytotal = currentStand.dailyTotal;
        grandTotal += storeDailytotal;
    }
    return grandTotal;
}

function populateStores() {
    // stores' info
    let seattle = new Store('Seattle', 23, 65, 6.3);
    let tokyo = new Store('Tokyo', 3, 24, 1.2);
    let dubai = new Store('Dubai', 11, 38, 3.7);
    let paris = new Store('Paris', 20, 38, 2.3);
    let lima = new Store('Lima', 2, 16, 4.6);

    storeLocations.push(seattle);
    storeLocations.push(tokyo);
    storeLocations.push(dubai);
    storeLocations.push(paris);
    storeLocations.push(lima);
    // storeLocations.push(newFormStore);

}
const cityIndex = ['seattleUL', 'tokyoUL', 'dubaiUL', 'parisUL', 'limaUL'];

// stuff for ul's
const seattleInfo = [23, 65, 6.3];
const tokyoInfo = [3, 24, 1.2];
const dubaiInfo = [11, 38, 3.7];
const parisInfo = [20, 38, 2.3];
const limaInfo = [2, 16, 4.6];
const cityIndexVars = [seattleInfo, tokyoInfo, dubaiInfo, parisInfo, limaInfo];
const listLabels = ['Minimum Customers', 'Maximum Customers', 'Cookie Sales Per Customer'];

function storeInfo() {
    for (let i = 0; i < cityIndex.length; i += 1) {
        let uls = document.getElementById(cityIndex[i]);
        let cityInfo = cityIndexVars[i];
        for (let c = 0; c < seattleInfo.length; c += 1) {
            const liElem = document.createElement('li');
            liElem.append(listLabels[c] + ': ' + cityInfo[c]);
            uls.appendChild(liElem);
        }
    }
}
storeInfo();


function handleForm(event) {
    event.preventDefault();
    const formElem = event.target;

    const newLocation = formElem.location.value;
    const minCustNum = parseInt(formElem.minCust.value);
    const maxCustNum = parseInt(formElem.maxCust.value);
    const avgCookieNum = parseFloat(formElem.avgCookies.value);
    alert("Thank you for your submission!");
    addInputToTable(newLocation, minCustNum, maxCustNum, avgCookieNum);

}

function addInputToTable(location, minCust, maxCust, avgCookiesPerCust) {

    const newStoreInfo = new Store(location, minCust, maxCust, avgCookiesPerCust);
    storeLocations.push(newStoreInfo);

    const thetotalRow = document.getElementById('totalRow');
    thetotalRow.remove();

    footerRow();
}

const form = document.getElementById("form");
form.addEventListener("submit", handleForm);

function start() {
    populateStores();
    footerRow();
}
start();
