console.log("hello homework3")

function stringToInt(input){
	if(parseInt(input) == NaN){
		return NaN;
	}
	else
		return parseInt(input);
}

function maskNumber(input){
	var mask_number="";
	for(var i=0; i<11; i++)
	{
		if(i <7)
			mask_number += input[i];
		else
			mask_number += "*";
	}

	return mask_number;
}

function getAverage(input_array){
	var avg=0;
	for(var i=0; i < input_array.length; i++){
		avg += input_array[i];
	}
	avg /= input_array.length;
	return avg;
}

function isMultipleSeven(input){
	if(input%7 == 0)
		return true;
	else
		return false;
}

function operation(arg1, arg2, arg3) {
	switch(arg1){
		case "add":
		return arg2 + arg3;
		break;
		case "substract":
		return arg2 - arg3;
		break;
		case "multiply":
		return arg2 * arg3;
		break;
		case "divide":
		return arg2 / arg3;
		break;
		/*case "power":
		return Math.pow(arg2,arg3);
		break;*/
		default:
		console.log("Not Suppoted");
		return undefined;

	}
}

function triangleMtn(input){
	var a="*";
	for(var i = 1; i <= input; i++){
		console.log(a);
		a += "*";
	}
}