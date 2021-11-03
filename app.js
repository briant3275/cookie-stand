'use strict'


const hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

function assignCustomerPerHour(max,min) {
    // generate random customer amount
    let range = max - min + 1;
    return Math.round(Math.random() * range) + min;
}
function City(shopCity, cookieSalesPerHour, total) {

    this.location = shopCity;
    this.cookieSalesPerHour = cookieSalesPerHour
    this.total = 0
}

City.prototype.assignCookiePerHour = function () {
    this.cookiesSalesPerHour = Math.round(assignCustomerPerHour(this.maxCustomer,this.minCustomer) * this.avgCookies);
    console.log(this.assignCookiePerHour);
}

City.prototype.total = function () {
    this.total = this.total + this.cookiesSalesPerHour[i];
}

const seattle = new City('seattle')

let seattle = new City("Seattle", 2, 16, 4.6, hour);
let tokyo = new City()
let dubai = new City()
let paris = new City()
let lima = new City()

// const tableElem = document.createElement('table');
// articleElem.appendChild(tableElem);

// const headerRowElem = document.createElement('tr');
// tableElem.appendChild(headerRowElem);

// const seattleElem = document.createElement('th');
// headerRowElem.appendChild(seattleElem);

// const tokyoElem = document.createElement('th');
// headerRowElem.appendChild(tokyoElem);

// const dubaiElem = document.createElement('th');
// headerRowElem.appendChild(dubaiElem);

// const parisElem = document.createElement('th');
// headerRowElem.appendChild(parisElem);

// const limaElem = document.createElement('th');
// headerRowElem.appendChild(limaElem);

// const totalsElem = document.createElement('th');
// headerRowElem.appendChild(totalsElem);

// const dataRow = document.createElement('tr');
// tableElem.appendChild(dataRow);

// let seattle = {
//     location: `Seattle`,
//     minCustomer: 23,
//     maxCustomer: 65,
//     avgCookies:  6.3,
//     cookiesSalesPerHour: [],
//     total: [],
//     assignCookiePerHour: function() {
//         // generate random cookies per hour
//         const cookiesSalesPerHour = Math.round(assignCustomerPerHour(this.maxCustomer,this.minCustomer) * this.avgCookies);
//         console.log(this.assignCookiePerHour);
//         return cookiesSalesPerHour;
    
//     },
//     pushTotal: function() {
//         //push total onto end of cookieSalesPerHour array
//         cookieSalesPerHour.push(total);
//     }
// }

//testing push
// let cookieSalesPerHourNew = [total];
// seattle.cookieSalesPerHour.push(cookieSalesPerHourNew);

// function cookies() {
// for (let i = 0; i < hour.length; i +=1) {
//     seattle.cookiesSalesPerHour[i] = seattle.assignCookiePerHour();
//     total = total + seattle.cookiesSalesPerHour[i];
    // seattle.cookieTotal = seattle.cookiesSalesPerHour[i];
    //let maxCustomer = 65;
    // let minCustomer = 23;
    // let cookiesAmount = Math.round(assignCustomerPerHour(this.maxCustomer,this.minCustomer) * this.avgCookies)
    // console.log(seattle.cookieSalesPerHour)
    // console.log(seattle.cookieTotal)
// }
// }
// cookies()

// function sum(cookies) {
//     sum cookies;
// }

// function doCookies(seattle) {
//     let seattleContainer = document.getElementById(`seattle`)

//     // function arrayRender() {
//     // }
//     //grab elem append to
//     //create ne elems for display
//     //assign content to new elem
//     //append elem to first thing we grabbed

//     const articleElem = document.createElement('article');
//     seattleContainer.appendChild(articleElem)

//     let h2Elem = document.createElement('h2');
//     articleElem.appendChild(h2Elem);
//     h2Elem.textContent = seattle.location;

//     let listElem = document.createElement('ul')
//     seattleContainer.appendChild(listElem)

//     for (let i = 0; i < seattle.cookiesSalesPerHour.length; i += 1) {
//         const cookiePerHourElem = document.createElement('li');
//         listElem.appendChild(cookiePerHourElem);
//         const cookiePerHourText = seattle.cookiesSalesPerHour[i];
//         cookiePerHourElem.textContent = cookiePerHourText;
//     }

//     const shopTotalElem = document.createElement('li')
//     listElem.appendChild(shopTotalElem);
//     const shopTotalText = total;
//     shopTotalElem.textContent = shopTotalText

//     let cookiePer = seattle.cookieSalesPerHour
//     seattleContainer.appendChild(cookiePer)

//     // cookiesAmount: Math.floor(randomInRange(23,65) * 6.3),

// }

// doCookies(seattle);
