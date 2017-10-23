/*
* Code showing uses of otp.js library
*/
var otp = require('./index.js')
/*
* function otp(no_of_digits, otp_type_code) return One Time Password as an String
* no_of_digits ranges from 4 to 8, and accepts only numeric value. Default is 4.
* otp_type_code accepts only numeric value. default is 1.
* *********** OTP TYPES (otp_type_code) *****************
* |-- code --- description ----------- result_example----|
* | 	1	Only numbers 				1567			 |
* |		2	Only alphabates (BLOCK)		XFDU			 |
* | 	3	Alpha numeric (BLOCK)		1567			 |
* |		4	Alpha numeric (both BLOCK 	aF53			 |
* |					 		& small)					 |
* ********************************************************
*/
// generates 4 digit numeric otp
console.log(otp.otp()) // 5031

// generates 4 digit numeric otp (ANOTHER WAY)
console.log(otp.otp()) // 8235

//generates 4 digit alphabates otp
console.log(otp.otp(4,2)) // HPIT

//generates 6 digit alphanumeric (BLOCK) otp
console.log(otp.otp(6,3)) // CHYK71

//generates 6 digit alphanumeric (both BLOCK & small) otp
console.log(otp.otp(6,4)) // m76CEt

// bye :-)

