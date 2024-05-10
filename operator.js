/*
    -Arithmetic Opearator
        (+,-,/,%,*)
    -Increment or Decrement Operator
        (++,--)
    -Assignment Operator 
        (=,+=,-=,/=,*=,%=)
    -String or Concatination
        (+)
    -Template Literals
        (``,${})
    -Comparison Operator
        (<,>,==,<=,>+,!=,!==,===)
    -Logical Operator
        (&&,||,!)
    -Condition and Ternary Operator
    -Object Destructor
    -Spread Operator
    -Rest Operaotr
*/

let a= 12
console.log(a++) //postfix
console.log(++a) //prefix

var name = "Aayush"
var email = 'Dear'+name+',<br />'

email = `Dear ${name},<br />` //Tempalte Literals

a = 10
let b = 10

console.log(a < b) //false
console.log(a > b) //false
console.log(a == b) //true
console.log(a===b) //false

let userRegister = {
    role:"Student"
}
// let role = (userRegister.role = "admin")?"admin":"user"

let role = (userRegister.role = "admin")?"admin":(
            (userRegister.role = "student")?"Student":"user"
)

let userRole = userRegister.role ?? "user"
console.log(userRole)

let userData = {
    fullName:"User One",
    email:"user@mail.com",
    address:"Ktm",
    phone:9811111111
}

let {fullName,email:mail,...remaining} = userData //objectDestructor   here ...remaining is rest Opearator

//let name = userData.fullName  Writing above or this line is same   Here let fullName=name is aliasing

//let remaining = {
/*
    address:userData.address
    phone:userData.phone
}
*/

const adminData = {
    ...userData,  //spread Operator
    role:"admin"
}


const user = {
    name:"Aayush"
}
console.log(user.name)
const user1= user
user1.name = "Moktan"
console.log(user1.name)
console.log(user.name)

/*Instead of creting above Object or assigning use Spread Operator */