function FizzBuzz(number){
	for(var i = 1; i <= 100; i++){

		if (number % 3 == 0){
			return "Fizz";
		}

	else if(number % 5 == 0){
			return "Buzz";
		}

	return number;

	}

}


console.log(FizzBuzz(1) == 1);
console.log(FizzBuzz(2) == 2);
console.log(FizzBuzz(3) == "Fizz");
console.log(FizzBuzz(4) == 4);
console.log(FizzBuzz(5) == "Buzz");
console.log(FizzBuzz(6) == "Fizz");
console.log(FizzBuzz(7) == 7);
console.log(FizzBuzz(8) == 8);
console.log(FizzBuzz(9) == "Fizz");

console.log (FizzBuzz(21));



