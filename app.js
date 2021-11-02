'use strict'


const hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
// let cookiesAmount = Math.floor(randomInRange(23,65) * 6.3)


let seattle = {
    location: `Seattle`,
    minCustomer: 23,
    maxCustomer: 65,
    avgCookies:  6.3,
    cookiesSalesPerHour: [],
    assignCustomerPerHour: function() {
        // generate random customer amount
        let range = maxCustomer - minCustomer + 1;
        return Math.floor(Math.random() * range) + min;
    },
    assignCookiePerHour: function() {
        // generate random customer amount
        let range = maxCustomer - minCustomer + 1;
        return Math.floor((Math.floor(Math.random() * range) + min) * 6.3);
    
    }
}

function cookies(seattle) {
    for (let i = 0; i < hour.length; i +=1) {
    // let maxCustomer = 65;
    // let minCustomer = 23;
    let range = seattle.maxCustomer - seattle.minCustomer + 1;
    let cookiesAmount = Math.floor(Math.floor(Math.random() * range + seattle.minCustomer) * 6.3)
    console.log(cookiesAmount)
    }
}
cookies(seattle)

// function sum(cookies) {
//     sum cookies;
// }


let seattleContainer = document.getElementById(`seattle`)

let articleElem = document.createElement('article');

seattleContainer.appendChild(articleElem)

let h2Elem = document.createElement('h2');
articleElem.appendChild(h2Elem);
h2Elem.textContent = seattle.location;

let ulElem = document.createElement('ul')

// cookiesAmount: Math.floor(randomInRange(23,65) * 6.3),


