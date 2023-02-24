

const greet = function (greeting)
{
 return function(name)
 {
    console.log(` ${greeting} ${name}`);
 }

 };

const greeterHey = greet('Hey');

greeterHey('Chinmayee');
greeterHey('Pankaj');


greet('Hello')('Pankaj');


const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Heyaaa')('Jonas');