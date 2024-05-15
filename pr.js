// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 5000);


// setTimeout(() => {
//     console.log("hello")
// },4000);


// console.log("hello");
// console.log("mini");
// setTimeout(() => {
//     console.log("hello");
// },4000);
// console.log("you know")
// console.log("tnak you guys")

// function sum(a,b){
//     console.log(a+b);
// }

// function calculatore (a ,b,sumcallback){
//     sumcallback(a,b);
// }

// calculatore(4,2,sum);

// function getData(dataid , getnextData){
//     setTimeout(() => {
//         console.log("data",dataid);
//         if (getnextData){
//             getnextData();
//         }
        
//     },3000);
// }

// //callback hell 
// getData(1, () => {
//     console.log("gettting data2")
//     getData(2, ()=>{
//         console.log("getting2")
//         getData(3, ()=>{
//             console.log("getting 3")
//             getData(4);
//         })
//     })
// });

//promise
 
// let promise = new Promise((resolve, reject) => {
//     console.log("i am promise");
//     reject("only error");
// })

// //than and promise
// const getprommise =() => {
//     new Promise((resolve, reject) => {
//             console.log("i am promise");
//             resolve("success");
//             // reject("network error")
//     });
// };

// let promise = getprommise();
// promise.then((res) => {
//     console.log("promise fullfield");

// });

// promise.catch(() =>{
//     console.log("rejected", err);

// });


// function asyncfunction () {
//     return new Promise ( (resolve,reject) => {
//         setTimeout(()=>{
//             console.log("sum data1");
//             // resolve("success");
//             reject("ok not is this");
//         },4000);
//     });
// }

// console.log("fetcing data1");
// let p1 = asyncfunction();
// p1.then((res) => {
//     console.log(res)
// });
 
// p1.catch((rej)=>{
//     console.log("rejected", rej)
// });


// let arr = [4,5,6,12,45,67,78]

// for(let i=0; i<=arr.length; i++)
// {
//     for(let j=1; j<=10; j++)
//     {
//         console.log(arr[i]*j);
//     }
//     console.log("-----------------")
// }


// let b = ("entr a number");
// a = 34;
// if(a<0){
//     alert("this is an valid ")
// }
// else if(a<9)
// {
//     alert("this is an invalid page")
// }
// else if(a<18 && a>>9)
// {
//     alert("you can not ride because you are a kid")
// }
// else{
//     alert("this is invalid age")
// }


// let marks = prompt("Enter marks:");

// if (marks > 90) {
//     console.log("That's great");
// } else if (marks > 80) {
//     console.log("Good");
// } else if (marks >= 50) {
//     console.log("Better but not great");
// } else {
//     console.log("Needs improvement");
// }

// let str3 = "please give me 1000";
// let amount = Number.parseInt(str3.slice(15));
// console.log(amount);
// console.log(typeof amount);



// let str = "please give me 1000";
// let amt = parseInt(str.slice(14));
// console.log(amt);
// console.log(typeof amt);

//[array]

// let marksa_class_12 = [89,78,78,67,56,55]
// console.log(marksa_class_12.length)
// console.log(marksa_class_12.sort())
// console.log(marksa_class_12[7])
// marksa_class_12[4] = 90;
// marksa_class_12[1] = 99.9;
// console.log(typeof marksa_class_12);

// let arr =[78,56,55,23,34,33,12,11,34];

// for(i=0; i<arr; i++){
//     for(let j=1; j<10; j++)
//     {
//         console.log(arr[i]*j)
//     } 
//     console.log("----")
// }


// let arr = [4,5,6,12,45,67,78,"hg"]

// for(let i=0; i<=arr.length; i++)
// {
//     console.log(arr[i])
// }
// console.log("----------")

//array methods ;

// let num =[45,45,12,23,33,4,42,89];
// let b = num.toString();
// console.log(b);
// let c = num.join("-");
// console.log(c,typeof c);
// let r = num.pop();
// console.log(num[r]);



// let arr = [1,2,4];
// let b =arr.unshift(10);
// console.log(b);
// let c = arr.push(34,89,90);
// console.log(c);
// console.log(arr);


// concat

// let first = [1,2,3]
// let second = [11,12,13]
// let concat = first.concat(second);
// let c = concat.slice(2,4);
// console.log(concat);
// console.log(c);

// const a = [89,56,5,62,2,0]
// const b = a.pop()
// console.log(b);
// const c = a.shift();
// console.log(c);
// console.log(a);
 
// const ab = [1,23,3,4,5,6,7,8]
// const bc = [11,12,13,14,15]
// let cd = [21,22,23,24,24,252,54]

// let az = ab.concat(bc,cd)
// console.log(az);

// let array = [45,2,3,33,6,67,89,10,988,123];
// let ar2 = array.sort();
// let ar3 = (a,b) =>{
//     return a-b;
// }
// ar2.sort(ar3);
// console.log(array);


//splice   add new item 
// let arr = [45, 1, 2, 23, 21, 23, 34, 55, 45];
// let del_arr = arr.splice(2, 4, 676, 878, 879, 980);
// console.log(del_arr);
// console.log(arr)


//slice

// let arr = [34,87,878,88,120,120]
// let r= arr.slice(2,5)
// console.log(r);
// console.log(arr);

// let numm = [3,4,5,12,78,9]

// for(let i=0; i<numm.length; i++){
//     console.log(numm[i]);
// }

// let numm = [3,4,5,12,78,9]

// numm.forEach((Element)=>{
//     console.log(Element+Element);
// });



// let arr = [67,27,23,231,1,2,3,4];

// arr.forEach((syntex)=>{
//     console.log(syntex)
// });


// let name = "harry"
// let arr = Array.from(name)
// console.log(arr);

// for (let i of name){
//     console.log(i);
// }

// let array = "this is a string";
// let agh = Array.from(array)
// console.log(agh);

// for (i of array){
//     console.log(i)
// }


// MAP FILTER REDUCE

// let arr = [1,2,3,4,5]

// arr.map((value)=>{
//     console.log(value);
// })

// console.log(arr)

// let arr = [1,2,3,4,5]
// arr.forEach( (Element)=>{
//     console.log(Element);
// })


// let arr = [1,2,3,4,5]

// let a = arr.map((value,index,array)=>{
//     console.log(value,index,array);
//     return value + index +value

// })

// console.log(a);


// let arr = [45,12,23,113,575]

// let a = arr.map( (value,index,Array)=>{
//     console.log(value,index,Array)
//     return value + index
// })
// console.log(a)

//filtermethods

// let arr = [12,575,11,98,90,78,67]
// let a2 = arr.filter((a)=>{
//     return a>10
// })
// console.log(a2 .toString)
// // console.log(typeof arr)
// console.log(arr);



 
// let arr = [1,2,3,4,5,6]
// const reduce =(b1,b2)=>{
//     return b1 + b2
// }
// let newarr = arr.reduce(reduce)
// console.log(newarr);

// let arr = [1,2,3,4,5,6]
// let d = arr.reduce((A,B)=>
// {
//     return A*B;
// })
// console.log(d);

// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve(455)
//         },3500);
//     })
// }

// async function main(){
//     console.log("loading methods")

//     console.log("hi this a second methos")

//     console.log("load methods")

//     let data = await getData()
//     console.log(data)
//     console.log("process data")
//     console.log("task 2")
// }

// main()

// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     });
// }

// async function main() {
//     console.log("main");
//     console.log("this second ");

//     let data = await getData();
//     console.log(data);
//     console.log("second paragraph");
//     console.log("second paragraph");
//     prompt("enter your name")
//     alert("ok")
// }

// main();


// console.log("this is first paragraph");
// console.log("this is a second paragraph")

// setTimeout(() => {
//     console.log("set time..")
// }, 2000);


// setTimeout(() => {
//     console.log("set time..2")
// }, 3000);


// console.log("the end ");


// const ab = (ab) =>{
//     console.log("nothing a web ;")
// }


// const callback = (arg,ab)=>{
//     console.log(arg)
//     console.log(ab)
// }

// const loadscript = (src,callback) => {
//   let cs = document.createElement("script")
//   cs.script = src
//   cs.onload = callback("harry")
//   document.head.append(cs,ab)
// }

// loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)

