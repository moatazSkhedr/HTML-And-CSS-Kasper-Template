
let element = document.getElementById("icon");

let myList  = document.getElementById("list");
element.onclick = function() {
   console.log("hello wolrd")
   myList.classList.toggle("toggle")
}

// element.onclick = function(){
//     if(list.style.display==="none"){
//         list.style.display="block";
//     }else{
//         list.style.display="none";  
//     }
// }