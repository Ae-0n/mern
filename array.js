// let employee_1 = ["PersonName","Email","Address","PhoneNo"]
// console.log(employee_1[0])

// let all_employee = [
//     ["PersonName1","Email1","Address1","PhoneNo1"],
//     ["PersonName2","Email2","Address2","PhoneNo2"],
//     ["PersonName3","Email3","Address3","PhoneNo3"]
// ]
// console.log(all_employee[1][1])

// let user_1 = {
//     name:"Aayush",
//     email:"aayush@mail.com",
//     address:"Ktm",
//     phone:981011111
// }
// console.log(user_1.address)            //user_1["name"]

// let user_2 = {
//     name:{
//         first:"Person",
//         middle:null,
//         last:"Name"
//     },
//     email:"email@mail.com",
//     address:"Bhaktapur",
//     phone:9811111111
// }

// console.log(user_2)

// let all_User = [
//     {
//         name:"Aayush Tamang",
//         email:"aayush@email.com",
//         address:"Kathmandu",
//         phone:98123456,
//         designation:"President"
//     },
//     {
//         name:"Amit Ghimire",
//         email:"amit2mail.com",
//         address:"Bhaktapur",
//         phone:9822222222,
//         designation:"CEO"
//     },
//     {
//         name:"Biplove Paudel",
//         email:"biplove@mail.com",
//         address:"Lalitpur",
//         phone:9811111111,
//         designation:"Chairman"
//     }
// ]

// let all_employees = []

// //default insert is always at last

// all_employees.push("Populate at last")
// all_employees.push("Insert at 1")

// // Always populate at index 0
// all_employees.unshift("Always at 0")

// all_employees[1] = "I am replacement of index 1"
// console.log(all_employees)

// all_employees.splice(0,2,"Inserted Forcefully")
// console.log(all_employees)


//Cretae a js program to store a product info in the form of array of obj . Illsustrate yhe different use case of js array function in order to insert read and delete
//the elements in that array atleast use 10 different object in that array. The product should contain atleast name,price,category and brand info
let product_details=[]
console.log("Product Details")
product_details.push({name:"Product_Name_1",price:1200,category:"Phone",brand:"Brand_Name_1"})
product_details.push({name:"Product_Name_2",price:1100,category:"Phone",brand:"Brand_Name_2"})
product_details.unshift({name:"Product_Name_3",price:400,category:"Clothes",brand:"Brand_Name_3"})
product_details.unshift({name:"Product_Name_4",price:400,category:"Clothes",brand:"Brand_Name_4"})
product_details.push({name:"Product_Name_5",price:1200,category:"Phone",brand:"Brand_Name_5"})
product_details.push({name:"Product_Name_6",price:1100,category:"Phone",brand:"Brand_Name_6"})
product_details.splice(0,0,{name:"Product_Name_7",price:1200,category:"Phone",brand:"Brand_Name_7"})
product_details.push({name:"Product_Name_8",price:1100,category:"Phone",brand:"Brand_Name_8"})
product_details.unshift({name:"Product_Name_9",price:400,category:"Clothes",brand:"Brand_Name_9"})
product_details.push({name:"Product_Name_10",price:400,category:"Clothes",brand:"Brand_Name_10"})
console.log(product_details)
product_details.pop()
product_details.shift()
let slice_details = product_details.slice(1,3)
console.log("Removed Product Details")
console.log(product_details)
console.log("Slice Product Details")
console.log(slice_details)
