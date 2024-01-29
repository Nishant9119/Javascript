const account_id = 14453 // Const means constant values
let account_email = "nishant@gmail.com"
var account_pass = "1234"
account_city ="jaipur"

//account_id = 2 // not allowed
account_email=  "wer"
account_pass = "4"
account_city = "mumbai"
let account_state
console.table([account_id,account_email,account_pass,account_city,account_state])
/* 
Prefer not to use var because of issue in block scope and functional scope
*/ 