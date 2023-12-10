//for loop
// let students = ["rubi","rohi","jani","gugi"];
// for (let i=0; i<students.length; i++){
//     console.log(students[i]);
// }

// //for of 
// for (let student of students){
//     console.log(student);
// // }

// let cities = ["delhi","mumbai","pune"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for (let val of marks){
//     sum += val;
// }
// let avg =sum/marks.length;
// console.log(`avg marks of the class =${avg}`);

// let item =[250,645,300,900,50];

// let i= 0;
// for(let val of item){
//     console.log(`the index of values of ${i}= ${val}`);
//     let offer =val/10;
//     item[i] = item[i]-offer;
//     console.log(`values of offer=${item[i]}`)
//     i++;
// }

// for (let i =0; i,item.length; i++){
//     let offer = item[i]/10;
//     item [i]-=offer;
// }
// console.log(item);

// class a {
//     x = 10
//     fun()
//     {
//         constructor()
//         {
//             console.log("hi gm");
//         }
//     }
// }
// class b extends a 
// { 
//     y =29
//     constructor()
//     {
//         super();
//         console.log("by b this second point")
//     }
   
// }
// let a1= new a();
// let b1 = new b();

// b1.fun();

//document object module (dom);

// let marvalheros = ["thor","spiderman","ironman"];
// let dcheoers =["superamn","batman"];
// let indian  = ["krish","shaktiman","dhoom"];

// let heroes =marvalheros.concat(dcheoers,indian);
// console.log(heroes);
// let marvalheros = ["thor","spiderman","ironman"];
// let val =marvalheros.shift();
// console.log(val);

// let marvalheros = ["thor","spiderman","ironman","antman","dr.stream","badman"];
// console.log(marvalheros);
// console.log(marvalheros.slice(1,4));

// let compamies = ["boolberg","microsoft","uber","google","ibm","netflix"];
// compamies.push["amazon"];
// console.log(compamies);

//function and methods.
// function myfunction(){
//     console.log("welcome guyys of new");
//     console.log("we are lerning js");
// }

// // myfunction();
// function myclass (msg,n){
//     console.log(msg,n);
// }

// myclass("best class in indore",100);
// function sum (x,y){
//     console.log(x+y);
// }
// sum(20,30);

// function sum (x,y){
//     s = x + y;
//     return s;
// }

// let val= sum (3,5);
// console.log(val);


// function myclass(name,n){
//     console.log(name,n);
// }
// myclass("roni",21)

// //sum function
// function sum (a ,b){
//      return a+b;
// }
//multiplication function
// function mul (a , b){
//     return a*b;
// }

// //modurn jscript

// const arrsum = (a,b)=>{
//     console.log(a +b);
// }
// arrsum(34,56);

// const printhello = ()=>{
//     console.log("hello");
// }
// printhello();
// let arr = ["pune","mumbai","cg","kn"];
// arr.forEach((val,n)=> {
//     console.log(val.toUpperCase(),100);
// });


// let nums =[1,2,4,4,5,6];
// nums.forEach((nums)=>{
//     console.log(nums*nums);

// });

// let str = ["rahul","soni"]

// str.map((val)=>{
//     console.log(val)
// }

// )

// let nums = [65,32,12,45]

// let newarr = nums.map((val)=>{
//     return val * 2;

// });

// console.log(newarr);

// let arr = [23,34,45,56]

// let evanarr = arr.filter((val)=>{
//     return val>30;
// })
// console.log(evanarr);

//reudce
let arr = [1,20,3,4,5]

const output = arr.reduce((prev, curr)=>{
    return prev > curr ?  prev : curr;
})
console.log(output);





