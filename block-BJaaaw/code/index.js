// if..else
if 
else

else
if 
else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"

*/
let x=2
if (x%2==0) { console.log (" number is even")
  
} else {console.log (" number is odd")
  
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let x=prompt ('enter 1stno','0')
let y=prompt ('enter 2ndno','0')

if (x>y) {console.log ("x")


}else {console.log ("y")
  
}

// 3. Convert the above code using`?` terniary operator
x>y ? console.log ("x is greater"):console.log ("y is greater");


/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName=prompt('houseName','execute')
switch(houseName) {
  case "stark":
    console.log ("Winter is coming")    
    break;
  case "lannister" :
    console.log (" A lannister always pays his debt")
    break;
  default:
    console.log (" All men must die")
}



// 5. Convert the above code using`?` terniary operator



houseName === "stark"
  ? console.log("this is stark")
  : houseName === "lanister"
  ? console.log("no house is lanister")  
  : console.log("no stark no lenister");


// Switch

// 6. Write a program that takes the number of the month(3) and alert number of days in the month.
let month=prompt('enter month')
switch(month) {
  case"1":
    console.log ("print janaury")    
    break;
  case "2" :
    console.log ("print feb ")
    break;
  default:
    console.log (" print march")
}



/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary=prompt('enter salary')
salary=parseInt (salary)
switch (salary) {
  case 20000 :
    console.log ("tax is 10 %")    
    break;
  case 40000 :
    console.log ("tax is 20 % ")
    break;
  default:
    console.log ("tax is 30 % ")
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks= promt('print','0')

if (marks>100) {console.log ("Marks can't be greater than 100")


}
else if(marks>50)
{console.log ("Grade A")

}
else if(marks>30)
{console.log ("Grade B")


}
else if(marks>0)
{console.log ("Grade D")


}


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
