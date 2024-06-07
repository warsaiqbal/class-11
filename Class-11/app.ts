// // //type of alias
// // //type alias is the short way to represent type data.
// type Istudentdetails = {
//     name: string,
//     rollno: number,
//     attendense: boolean
// };
// let student1: Istudentdetails = {
//     name: "kashan",
//     rollno: 1,

//     attendense: true
// };
// let student2: Istudentdetails = {
//     name: "huzaifa",
//     rollno: 2,
//     attendense: false
// };
// let student3: Istudentdetails = {
//     name:"maheen",
//     rollno: 1,
//     attendense: true
// };
// console.log(student1);

// // //type union alias
// type Icardetail = string|number|boolean
// let car:Icardetail = "corolla"
// car = 123
// car = true
// console.log(car);


// //intersection
// //when you have two type of objects they show result in intersection. 
// //they accept only one type of property.
// //Extra primitive data type doesnot use intersection.
// type Istudents = {
//     name: string,
//     seatno: number
// }
// type Iteacher = {
//     name: string,
//     experience: number
// }
// type Imanagement = {
//     member: boolean
// }
// let both: Istudents & Iteacher & Imanagement = { //both means student bhi hai or teacher bhi
//     name: "Warsa",
//     seatno: 937171,
//     member: true,
//     experience: 2 
// }
// console.log(both);

//structural typing
//there are two types of structured objects in typing.
//1 fresh object
//2 stale object
let ball = {
    diameter: 10
}
console.log(ball); //fresh object
let sphere = {
    diameter: 20
}
ball = sphere // stale object //right ki value left mei ajaegi
console.log(ball);
let tube = {
    diameter: 30,
    length: 50
}

sphere = tube
console.log(sphere);

// case 1 
// structure is different fresh show error 
// extra properties are not allowed
// case 2
// structure is allowed different type of data in stale
// not show any error.