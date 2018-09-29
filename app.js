'use strict';

var workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']
var pikePlace = {

  name: 'First and Pike',
  min: 23,
  max: 65,
  avgCookiesPerSale: 6.3,
  cookiesSoldEachHour: [],
  avgCustArr: [],
  totalCooks: 0,
  //Constructor for all stores
  calculateCustomersPerHour: function () {
    for (var i = 0; i < workHours.length; i++) {
      var randomAmount = Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.avgCustArr.push(randomAmount);
      console.log(this.avgCustArr);
    }
  },

  calculateCookiesSoldEachHour: function () {
    for (var j = 0; j < workHours.length; j++) {
      this.totalCooks += this.avgCustArr[j];
      console.log('***********', this.totalCooks)
    }
  },

  listThings: function () {
    car.storesContainer = document.createElement('div')
    container.innerHTML = '<h3>' + this.name + '<h3>'
    document.body.appendChild(container);
  }

}

pikePlace.calculateCustomersPerHour();
pikePlace.calculateCookiesSoldEachHour();

