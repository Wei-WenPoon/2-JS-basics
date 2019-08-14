/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreeJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}


if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}
*/

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary)
{
	console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) 
{
	console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike)
{ 
	console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
	console.log('There is a draw');
}
/*if (scoreJohn > scoreMike) {
	console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
	console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
	console.log('There is a draw');
}*/


//---------------------------FUNCTIONS-------------------------------//
function calculateAge(birthYear) {
	return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName)
{
	var age = calculateAge(year);
	var retirement = 65 - age;

	if (retirement > 0) {
		console.log(firstName + ' retires in ' + retirement + ' years');	
	} else {
	console.log(firstName + ' is already retired.');
	}

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');


/*--------------------------- FUNCTION STATEMENTS --------------------
* Function statements and expressions
*/

// Function decleration
/* function whatDoYouDo(job,firstName) ()*/

// Function expression
var whatDoYouDo = function (job, firstName) {
	switch(job) {
		case 'teacher':
			return firstName + ' teaches kids how to code';
		case 'driver':
			return firstName + ' drives a cab in Libson.';
		case 'designer':
			return firstName + ' designs beautiful websites';
		default:
			return firstName + ' does something else';
	}
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('reitred', 'Mark'));
/*

/*------------------------------Arrays-----------------------------*/
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1998, 1969, 1948);



names[1] = 'Ben';
names[names.length] = 'Mary';

console.log(names[2]);
console.log(names.length, years.length);

console.log(names);
*/

/*------------------------------Tip Calculator-----------------------------*/

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

function tipCalculator(bill) {
	var percentage;
	if (bill < 50) {
		percentage = .2;
	} else if (bill >= 50 && bill < 200) {
		percentage = .15;
	} else {
		percentage = .1;
	}
	return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
			tipCalculator(bills[1]),
			tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
				   bills[1] + tips[1],
				   bills[2] + tips[2]];
console.log(tips, finalValues);


/************************ Objects and Priperties ***********************/

var John = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false
};
console.log(John.firstName);
console.log(John['lastName']);
var x = 'birthYear';
console.log(John[x]);