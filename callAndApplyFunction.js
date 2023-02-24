

const indigo = {
airline : 'Indigo',
code : 'IN',
bookings :[],

book(flightNum,name){

console.log(`${name} has a booking in ${this.airline} flight ${this.code}${flightNum}`);

this.bookings.push({ Flight : `${this.code}${flightNum}`,Name : name});
},
};

indigo.book(238, 'Chinmayee Diwan');
indigo.book(539,'Pankaj Vadade');
console.log(indigo.bookings);

const Hrishi = {
airline : 'Jet airways',   
name : 'Hrishi',
code : 'MH',
bookings : [],

};

const book = indigo.book;
book.call(Hrishi , '239', 'Hrishikesh Diwan');


const flightData = [583, 'George Cooper'];
book.apply(Hrishi,flightData)
console.log(Hrishi);


book.call(Hrishi, ...flightData);




