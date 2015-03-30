function FizzBuzz(number){

	var isFizz = number % 3 == 0;
	var isBuzz = number % 5 == 0;

	if(isFizz && isBuzz){ return "FizzBuzz"; }

	if(isFizz){ return "Fizz"; }

	if(isBuzz){ return "Buzz"; }

	return number.toString();

}


console.log(typeof FizzBuzz(1));
console.log(FizzBuzz(2) );
console.log(FizzBuzz(3) );
console.log(FizzBuzz(4) == "4");
console.log(FizzBuzz(5) );
console.log(FizzBuzz(6) == "Fizz");
console.log(FizzBuzz(7) == 7);
console.log(FizzBuzz(8) == 8);
console.log(FizzBuzz(9) == "Fizz");

console.log (FizzBuzz(15) );



