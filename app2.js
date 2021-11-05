'use strict'

// let cookieTable = document.getElementById('cookieTable');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']



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
    this.perHrSale ();
    this.calculateStoreTotal ();
}


// generates random amount of customers per hour
Store.prototype.randCustAmount = function() {
    for(let hourlyIndex = 0; hourlyIndex < hours.length; hourlyIndex+=1) {
        let range = this.maxCust - this.minCust + 1;
        this.customers = Math.round(Math.random() * range) + this.minCust;
        this.customersPerHour.push(this.customers)
    }
}

// generates cookie sales per hour based on customer per hour amount
Store.prototype.perHrSale = function() {
    for(let custIndex = 0; custIndex < hours.length; custIndex+=1) {
        let hrSale = Math.round(this.customersPerHour[custIndex] * this.avgCookiesPerCust);
        this.hourlyCookieSale[custIndex] = hrSale;
    }
}

// calculates total cookie sales for store

Store.prototype.calculateStoreTotal = function() {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    this.totalSalePerStore = this.hourlyCookieSale.reduce(reducer);
}

// for(let standIndex = 0; standIndex < hours.length; standIndex+=1) {
// seattle.generateHourlySales();

// stores' info
const seattle = new Store('Seattle', 23, 65, 6.3);
const tokyo = new Store('Tokyo', 3, 24, 1.2);
const dubai = new Store('Dubai', 11, 38, 3.7);
const paris = new Store('Paris', 20, 38, 2.3);
const lima = new Store('Lima', 2, 16, 4.6);