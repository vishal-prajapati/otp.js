/*
* Name : otp.js 
* Description : A library which generates One Time Password(OTP).
* Author : Vishal Prajapati
* License : UNLICENSED -> Anyone can use this code.
*/

/*
* Type -> code -> 1 -> (Only numbers)
* Type -> code -> 2 -> (Only Alphabates)
* Type -> code -> 3 -> (Alphanumeric with BLOCK letters Only) 
* Type -> code -> 4 -> (Alphanumeric with both BLOCK and small letter)
*/

module.exports.otp = function(digits, type)
{
	var choose_from = "1234567890";
	switch(type)
	{
		case undefined:
		choose_from = "1234567890"
		break;
		case 1:
		choose_from = "1234567890"
		break
		case 2:
		choose_from = "ABCDEFGHIJKLMNPQRSTUVWXYZ"
		break
		case 3:
		choose_from = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789"
		break
		case 4:
		choose_from = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz123456789"
		break
		default:
		// error
		console.log('(otp.js) Error occur : OTP type is invalid. Assumed type 1 (Only numbers)')
	}
	if(digits == undefined){
		digits = 4
	}
	
	if(digits < 4 && !(digits == undefined)){
		digits = 4
		console.log('(otp.js) Error occur : OTP digits less than 4. Assumed them 4.')
	}
	
	if(digits > 8){
		digits = 4
		console.log('(otp.js) Error occur : OTP digits greater than 8. Assumed them 8 (MAX ALLOWED).')
	}
	// otp generation
	var code = ''
	for(var i=0; i < digits; i++){
		code += choose_from.charAt(Math.floor(Math.random() * choose_from.length))
	}
	return code
}
