/*
	Program Title: M2D question
	Developer’s Name: Shmueli Ellenbogen
	Date Created: May 6 - 11 2018
	Purpose of Code: From 1 to N, where N is an integer greater one. We will output the number between [1,N] that has the most factors. accounts for ties.
*/

// input and variable initilization
var input = 5000;//Number(prompt('enter a number'));
var totalFactors = 0;
var ties = [];
var factorTies = [1];
var num = input;
var divider = 0;

// processing
while (num > 0){
    totalFactors = 0;
    divider = 2;
    while (divider < num){
        if (num % divider === 0){
            totalFactors++;
        }
        divider++;
    }
    if (factorTies[factorTies.length - 1] === totalFactors){
        ties.push(num);
        factorTies.push(totalFactors);
    } else if (factorTies[factorTies.length - 1] < totalFactors){
        while(factorTies.length > 0){
            factorTies.pop();
        }
        while(ties.length > 0){
            ties.pop();
        }
        factorTies.push(totalFactors);
        ties.push(num);
    }
    num--;
}

// output
if (input === 0){
    console.log('0 technically has an infinite amount of factors');
} else if (input === 1){
    console.log('1 with 0 factors other than itself');
} else if (input === 2){
    console.log('1 and 2 with 0 factors other than itself and one');
} else if (input === 3){
    console.log('1, 2, and 3 with 0 factors other than itself and one');
} else if (input === 4){
    console.log('4 with 1 factor other than itself and one');
} else if (ties.length === 2){
    console.log(String(ties[0]), 'and', String(ties[1]), 'both have', String(factorTies[1]), 'factors other than themselves and 1');
} else {
    if (ties.length > 1){
        console.log(String(ties), 'all have', String(factorTies[1]), 'factors other than themselves and 1');
    } else {
        console.log(String(ties[0]), 'with', String(factorTies[0]), 'factors other than',  String(ties[0]), 'and 1');
    }
}