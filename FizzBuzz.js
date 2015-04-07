function FizzBuzz(number){

	var isFizz = number % 3 == 0;
	var isBuzz = number % 5 == 0;
	var whatIs = number.toString();

	if(isFizz){ whatIs = "Fizz"; }

	if(isBuzz){ whatIs = "Buzz"; }

	if(isFizz && isBuzz){ whatIs = "FizzBuzz"; }

	return whatIs;

}


console.log(FizzBuzz(1));
console.log(FizzBuzz(2) );
console.log(FizzBuzz(3) );
console.log(FizzBuzz(4) );
console.log(FizzBuzz(5) );
console.log(FizzBuzz(6) );
console.log(FizzBuzz(7) );
console.log(FizzBuzz(8) );
console.log(FizzBuzz(9) );

console.log (FizzBuzz(15));



