// console.log("hello world")
// let num = Number(prompt("Enter the number: "))
// switch(num){
//     case 1:
//         console.log("it is January")
//         break;
//     case 2:
//         console.log("it is February")
//         break;
//     case 3:
//         console.log("it is March")
//         break;
//     default:
//         console.log("there is no more month")
// }
//Daxil edilən 2 ədədin hasilinin müsbət yoxsa mənfi ədəd olmasını göstərən funksiya yazın.

// let num1 = Number(prompt("Enter the first number: "))
// let num2 = Number(prompt("Enter the second number: "))
// let multiple = num1 * num2
// if (multiple > 0) {
//     console.log(num1 + " * " + num2 + " = " + multiple)
//     console.log(multiple + " is positive number...")
// } 
// else if(num1 == 0 || num2 == 0){
//     console.log(num1 + " * " + num2 + " = " + multiple)
//     console.log(multiple + " zero...")

// }
// else {
//     console.log(num1 + " * " + num2 + " = " + multiple)
//     console.log(multiple + " is negative number...")
// }

//Tələbənin daxil etdiyi bala görə A B C D E F qiymətlərindən hansını aldığını müəyyənləşdirrən proqram yazın. 90 və yuxarı üçün "A", 80-89 üçün "B", 70-79 üçün "C", 60-69 üçün "D", 59 və daha aşağı qiymətlər üçün "F". Daxil edilən rəqəm müsbət, sıfırdan böyük və 100-dən kiçik olmalıdır.


// let point = Number(prompt("Enter your score: "))
// if (point > 0 && point < 100){
//     if(point > 50 && point <= 60){
//         console.log("your score : E")
//     }
//     else if(point > 60 && point <= 70){
//         console.log("your score : F")
//     }
//     else if(point > 70 && point <= 80){
//         console.log("your score : C")
//     }
//     else if(point > 80 && point <= 90){
//         console.log("your score : B")
//     }
//     else if(point > 90 && point <= 100){
//         console.log("your score : A")
//     }
//     else{
//         console.log("no more score...")
//     }
// }
// else{
//     console.log("you must enter number between 0 and 100!")
// }


let salary = Number(prompt("Enter your salary: "))
let wantingCount = Number(prompt("Enter your count which you want: "))
let timeMonth = Number(prompt("Enter your time: "))
let returnedCount
let percent


if (timeMonth > 0 && timeMonth < 36){
    if(timeMonth > 0 &&  timeMonth < 12 ){
        percent = 13
        returnedCount = (wantingCount *(100 + percent)) / 100
    }
    else if( timeMonth >= 12 && timeMonth < 24){
        percent = 15
        returnedCount = (wantingCount *(100 + percent)) / 100
    }
    else{
        percent = 17
        returnedCount = (wantingCount *(100 + percent)) / 100
    }
    
    
}
else{
    alert("no more month time...")
    console.error("Ops...You cannot buy credit....")
}
if (wantingCount > salary * 10){
    alert("Ops...You cannot buy credit....")
    console.error("Ops...You cannot buy credit....")
}

let paymentPerMonth = returnedCount / timeMonth
if(paymentPerMonth > (salary * 45) / 100){
    alert("Ops...You cannot buy credit....")
    console.error("Ops...You cannot buy credit....")
    
}else {
    alert(wantingCount + " AZN Mebleg size " + percent + " % kreditle " + timeMonth + " ay muddetine ayliq " + paymentPerMonth + " manat odenisle verilir" )
    console.log(wantingCount + " AZN Mebleg size " + percent + " % kreditle " + timeMonth + " ay muddetine ayliq " + paymentPerMonth + " manat odenisle verilir..." )
}













