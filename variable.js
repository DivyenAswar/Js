const acc_id = 1234   // valuen of const will be not changed 
let acc_mail = "d@123gmail.com"
let acc_pass = "12345"
let acc_city = "Rajkot"

// update values 
acc_mail = "abc@123gmail.com"
acc_pass = "123456"
acc_city = "Mumbai"

console.table([acc_id, acc_mail, acc_pass, acc_city])


/*
prefer not to use var because  of issue in  block scope and functional issue 
*/
