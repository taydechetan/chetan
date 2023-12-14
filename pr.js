let arr = document.getElementsByClassName("op");
console.log(arr);
console.dir(arr);

let arr = document.getElementsByTagName("p");
console.log(arr);
console.dir(arr);

let first = document.querySelector("#button");
 console.dir(first);

let all =document.querySelectorAll(".op");
 console.dir(all);


let div = document.querySelector("div");
console.dir(div);
console.log(div);

let div = document.querySelector("div");
console.dir(div);

let button = document.querySelector("button");
console.log(button);

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);




let para = document.querySelector("p");
console.log(para.setAttribute("class", "new class"));

let h1= document.querySelector("h1");
console.log(h1);

let div = document.querySelector("div");
div.style.backgroundColor=('red')
div.style.backgroundColor=('white')
div.style.color= ('black');
div.style.height = ('150px');
div.style.width = ('150px');

let button = document.querySelector("button")
console.log(button);

button.style.backgroundColor=('red');
button.style.color = ('white');
button.style.height = ('150px');
button.style.width = ('150px');


let btn = document.createElement('button');
btn.innertext = 'add me';
console.log(btn);


let ul=document.querySelector("ul");
ul.after(btn);

let btn = document.createElement("button");
// console.log(btn);