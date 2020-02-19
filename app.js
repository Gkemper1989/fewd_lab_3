var salutation = function greet() {
    return 'Haydo!';
};
 var salutation = greet();

 function echo(sound) {
     return 'sound';
 };

 function greet(name) {
     return 'Hello ' + name + '!';
 }

function shout(string) {
    return string + string;
};
shout('Fire');

function doSomething(name) {
    return 'name';
}
doSomething('Gustavo');

function multiplyFive(number) {
    return 9 * 5;
}

function myFunction() {
    alert('Hello World!');
}
myFunction();

let isAnswerRight = true;

isAnswerRight ? console.log('The answer is right!') : console.log('The answer is wrong!');

function tellFortune(numberOfChildren, partenersName, geoLocation, jobTittle) {
    return `You will be a ${jobTittle} in ${geoLocation}, and married to ${partenersName} with ${numberOfChildren}`;
}
tellFortune(0,'Amanda','Dublin','Progammer');
tellFortune(1,'Jennifer','Osasco','Bartender');
tellFortune(2,'Valkiria','Dubai','Security');
tellFortune(15,'Angelina','Canary Island','ScubaDiver');
