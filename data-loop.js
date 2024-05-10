const product = [
    {name:"Product One",price:100,discount:10},
    {name:"Product Two",price:2000,discount:3},
    {name:"Product Three",price:3000,discount:5}
]
product[5] = {name:"Product Five",price:3450,discount:5}

// for(i=0;i<product.length;i++){
//     if(product[i]){
//         console.log("Product Name:",product[i].name)
//         console.log("Product Price : Npr.",product[i].price)
//         console.log("Product Discount : ",product[i].discount,"%")
//         const after_discount = product[i].price - product[i].price*product[i].discount/100
//         console.log("After Discount : Npr.",after_discount)
//         console.log("..............................................")
//     }
// }


// for(i in product){             //for in loop gives index
//         console.log("Product Name:",product[i].name)
//         console.log("Product Price : Npr.",product[i].price)
//         console.log("Product Discount : ",product[i].discount,"%")
//         const after_discount = product[i].price - product[i].price*product[i].discount/100
//         console.log("After Discount : Npr.",after_discount)
//         console.log("..............................................")
// }


// for(i of product){   //for of loop gives value 
//     if(i){
//         console.log("Product Name:",i.name)
//         console.log("Product Price : Npr.",i.price)
//         console.log("Product Discount : ",i.discount,"%")
//         const after_discount = i.price - i.price*i.discount/100
//         console.log("After Discount : Npr.",after_discount)
//         console.log("..............................................")
//     }
// }

/*
    Create an array of students having name, email, marksObt as an object data
    Store atleast 10 student on an array
    consider 500 as an total
    print each student % and divison
    >=80 dis
    >=60 first
    >=45 second
    >=35 third
    <35 fail
*/

let students = [
    {
        name:"Student One",
        email:"one@mail.com",
        marksObt:400
    },
    {
        name:"Student Two",
        email:"two@mail.com",
        marksObt:50
    },
    {
        name:"Student Three",
        email:"three@mail.com",
        marksObt:250
    },
    {
        name:"Student Four",
        email:"four@mail.com",
        marksObt:500
    },
    {
        name:"Student Five",
        email:"five@mail.com",
        marksObt:350
    },
    {
        name:"Student Six",
        email:"six@mail.com",
        marksObt:150
    },
    {
        name:"Student Seven",
        email:"seven@mail.com",
        marksObt:90
    },
    {
        name:"Student Eight",
        email:"eight@mail.com",
        marksObt:333
    },
    {
        name:"Student Nine",
        email:"nine@mail.com",
        marksObt:111
    },
    {
        name:"Student Ten",
        email:"ten@mail.com",
        marksObt:433
    }
]
let divison="";
for(let i in students){
    console.log("Name of Student : ",students[i].name)
    console.log("Email of Students : ",students[i].email)
    const percentage = (students[i].marksObt/500)*100
    if(percentage>=80){
        students[i].divison = "Distinction"
    }else if(percentage>=60){
        students[i].divison = "First Division"
    }else if(percentage>=45){
        students[i].divison = "Second Divison"
    }else if(percentage>=35){
        students[i].divison = "Third Divison"
    }else{
        students[i].divison = "Fail"
    }
    console.log("% of Students : ",percentage,"%")
    console.log("Divison of students : ",students[i].divison)
    console.log("..............................................")

}