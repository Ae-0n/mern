/*
    if-else
    else-if

    loop
*/

const name = ''
// if(name='')
if(name !==""){
    console.log("Your name is:",name)
}else{
    console.log("Your name is empty")
}

//create a js code block to calculate the divison and percentage based on percentage
//You have a variable storing marks obt
//value should be less than 500 and greater or equal to 0
//Calculate the % if total score is 500
//calculate divison based on %
// percenteage >=80 Distinction
// >=60,<80 first
// >=45,<60 second
// >=35,<60 third
// <35 fail
let score=450
let percentage = (score/500)*100

if(percentage>=80){
    console.log("Distinction")
}else if(percentage>=60){
    console.log("First Divison")
}else if(percentage>=45){
    console.log("Second Divison")
}else if(percentage>=35){
    console.log("Third Divison")
}else{
    console.log("You are fail")
}


//calculate utility bill for electricity
//Assume a household cosnumes a 350 units of electricity in a month
//calculate the toatal bill to be paid
// consider the following
//total units consume is less than 20 a lumsum amount of Npr20 has to be paid
//for next 20 unit rate is 5/unit
//for next 30 unit rate is 7.5/unit
//for next 50 unit rate is 10/unit
//for next 100 unit rate is 15/unit
//and av=bove all rate is 20/unit

let consumption = 350
let amount = 0
if(consumption <=20){
    amount=80;
}else if(consumption<=40){
    amount=80+(consumption-20)*5
}else if(consumption<=70){
    amount=80+20*5+(consumption-40)*7.5
}else if(consumption<=120){
    amount=80+20*5+30*7.5+(consumption-70)*10
}else if(consumption<=220){
    amount=80+20*5+30*7.5+50*10+(consumption-120)*15
}else{
    amount=80+20*5+30*7.5+50*10+100*15+(consumption-220)*20
}
console.log(amount)



//claculate tax to be paid monthly and yearly with net income
//consider a software developer earns yearly 500000
//tax bracket for is as follows
//for first npr.500000 is 1%
//for next npr.200000 is 15%
//for next npr.300000 is 20%
//for next npr.1000000 is 25%
//for next npr.2000000 is 30%
//for any surplus amount is 36%
//calculate net salary yearly net salary monthly tax to be paid monthly and yearly

let tax = 0 
let salary = 500000
if(salary <= 500000){
    tax = salary * 0.01
}else if(salary <= 700000){
    tax = 500000 * 0.01 + (salary - 500000) * 0.15
}else if(salary <= 1000000){
    tax = 500000 * 0.01 + 200000 * 0.15 + (salary - 700000) * 0.2
}else if(salary <= 2000000){
    tax = 500000 * 0.01 + 200000 * 0.15 + 300000 * 0.2 + (salary - 1000000) * 0.25
}else if(salary <= 4000000){
    tax = 500000 * 0.01 + 200000 * 0.15 + 300000 * 0.2 + 1000000 * 0.25 + (salary - 2000000) * 0.3
}else{
    tax = 500000 * 0.01 + 200000 * 0.15 + 300000 * 0.2 + 1000000 * 0.25 + 2000000 * 0.3 + (salary - 4000000) * 0.36
}

let netYearlySalary = salary - tax;
console.log("Net Yearly Salary : ",netYearlySalary)

let netMonthlySalary = netYearlySalary / 12
console.log("Net Monthly Salary : ",netMonthlySalary)

console.log("Tax to be paid per annum : ",tax)

let monthlyTax = tax / 12
console.log("Monthly tax to be paid : ",monthlyTax)


//create a day variable storing a name from sunday to saturday
//print if day is saturday or sunday then holiday
//friday weekend
//any other day weekday
let day = "Monday"
switch(day){
    case "Sunday":
    case "Saturday":
        console.log("Holiday")
        break;
    case "Friday":
        console.log("Weekend")
        break;
    default:
        console.log("Weekday")
}


  
