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
    var container = document.createElement('div')
    container.innerHTML = '<h3>' + this.name + '<h3>'
    document.body.appendChild(container);

    var list = document.createElement('ul')
    var listArr = [];

    for (var i = 0; i < workHours.length; i++){
      if (i<5) {
        listArr.push('<li>' + workHours[i] + ': ' + this.avgCustArr[i]+ ' cookies</li>');
      } else {
        listArr.push('<li>' + workHours[i] + ': ' + this.avgCustArr[i]+ ' cookies</li>');
        console.log('BEFORE',listArr);

      }
    }
    listArr.push('<li>Total: ' +this.totalCooks + ' cookies</li>');

    var fullString = listArr.join('');
    list.innerHTML = fullString;
    document.body.appendChild(list);
    console.log('AFTER',listArr);

  }

};

pikePlace.calculateCustomersPerHour();
pikePlace.calculateCookiesSoldEachHour();
pikePlace.listThings();


var seatacAirport = {

  name: 'SeaTac Airport',
  min: 3,
  max: 24,
  avgCookiesPerSale: 1.2,
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
    var container = document.createElement('div')
    container.innerHTML = '<h3>' + this.name + '<h3>'
    document.body.appendChild(container);

    var list = document.createElement('ul')
    var listArr = [];

    for (var i = 0; i < workHours.length; i++){
      if (i<5) {
        listArr.push('<li>' + workHours[i] + ': ' + this.avgCustArr[i]+ ' cookies</li>');
      } else {
        listArr.push('<li>' + workHours[i] + ': ' + this.avgCustArr[i]+ ' cookies</li>');
        console.log('BEFORE',listArr);

      }
    }
    listArr.push('<li>Total: ' +this.totalCooks + ' cookies</li>');

    var fullString = listArr.join('');
    list.innerHTML = fullString;
    document.body.appendChild(list);
    console.log('AFTER',listArr);

  }

};

seatacAirport.calculateCustomersPerHour();
seatacAirport.calculateCookiesSoldEachHour();
seatacAirport.listThings();




var capitolHill = {

  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookiesPerSale: 2.3,
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
    var container = document.createElement('div')
    container.innerHTML = '<h3>' + this.name + '<h3>'
    document.body.appendChild(container);

    var list = document.createElement('ul')
    var listArr = [];

    for (var i = 0; i < workHours.length; i++){
      if (i<5) {
        listArr.push('<li>' + workHours[i] + ': ' + this.avgCustArr[i]+ ' cookies</li>');
      } else {
        listArr.push('<li>' + workHours[i] + ': ' + this.avgCustArr[i]+ ' cookies</li>');
        console.log('BEFORE',listArr);

      }
    }
    listArr.push('<li>Total: ' +this.totalCooks + ' cookies</li>');

    var fullString = listArr.join('');
    list.innerHTML = fullString;
    document.body.appendChild(list);
    console.log('AFTER',listArr);

  }

};

capitolHill.calculateCustomersPerHour();
capitolHill.calculateCookiesSoldEachHour();
capitolHill.listThings();





var alki = {

  name: 'Alki',
  min: 2,
  max: 16,
  avgCookiesPerSale: 4.6,
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
    var container = document.createElement('div')
    container.innerHTML = '<h3>' + this.name + '<h3>'
    document.body.appendChild(container);

    var list = document.createElement('ul')
    var listArr = [];

    for (var i = 0; i < workHours.length; i++){
      if (i<5) {
        listArr.push('<li>' + workHours[i] + ': ' + this.avgCustArr[i]+ ' cookies</li>');
      } else {
        listArr.push('<li>' + workHours[i] + ': ' + this.avgCustArr[i]+ ' cookies</li>');
        console.log('BEFORE',listArr);

      }
    }
    listArr.push('<li>Total: ' +this.totalCooks + ' cookies</li>');

    var fullString = listArr.join('');
    list.innerHTML = fullString;
    document.body.appendChild(list);
    console.log('AFTER',listArr);

  }

};

alki.calculateCustomersPerHour();
alki.calculateCookiesSoldEachHour();
alki.listThings();
